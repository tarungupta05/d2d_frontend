import React, { useRef, useEffect, useState } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat, toLonLat } from "ol/proj";
import { defaults as defaultControls } from "ol/control";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Icon, Style, Stroke, Fill } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";

export default function Prediction() {
  const mapRef = useRef(null);
  const proceedRef = useRef(null); // Reference to proceed button
  const [coords, setCoords] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const featureNames = [
    // "rain_day_1",
    // "rain_day_3",
    // "rain_day_7",
    // "rain_day_30",
    "NDVI",
    "TWI",
    "aspect_deg",
    "curvature_proxy",
    "elevation_m",
    "slope_deg",
  ];

  useEffect(() => {
    if (!mapRef.current) return;

    const uttrakhandCenter = fromLonLat([79.2, 30.0]);
    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: uttrakhandCenter,
        zoom: 7,
        minZoom: 7,
        maxZoom: 18,
      }),
      controls: defaultControls({ attribution: false, zoom: true }),
    });

    fetch("/uttarakhand_districts.geojson")
      .then((res) => res.json())
      .then((geojson) => {
        const districtLayer = new VectorLayer({
          source: new VectorSource({
            features: new GeoJSON().readFeatures(geojson, {
              featureProjection: "EPSG:3857",
            }),
          }),
          style: new Style({
            stroke: new Stroke({ color: "black", width: 2 }),
            fill: new Fill({ color: "rgba(255, 255, 255, 0.1)" }),
          }),
        });
        map.addLayer(districtLayer);
      })
      .catch((err) => console.error("GeoJSON load error:", err));

    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({ source: vectorSource });
    map.addLayer(vectorLayer);

    map.on("click", (evt) => {
      const [lng, lat] = toLonLat(evt.coordinate);
      setCoords({ lat, lon: lng });
      setData(null);

      // Clear previous marker
      vectorSource.clear();
      const marker = new Feature({ geometry: new Point(evt.coordinate) });
      marker.setStyle(
        new Style({
          image: new Icon({
            src: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            scale: 0.07,
            anchor: [0.5, 1],
          }),
        })
      );
      vectorSource.addFeature(marker);

      // Scroll to Proceed button
      setTimeout(() => {
        proceedRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    });

    // Cursor changes
    map.getTargetElement().style.cursor = "grab";
    map.on("pointerdrag", () => map.getTargetElement().style.cursor = "grabbing");
    // map.on("pointerup", () => map.getTargetElement().style.cursor = "grab");
    map.on("pointermove", (evt) => {
      const hit = map.hasFeatureAtPixel(map.getEventPixel(evt.originalEvent));
      map.getTargetElement().style.cursor = hit ? "pointer" : "grab";
    });

    return () => map.setTarget(undefined);
  }, []);

  const handleProceed = async () => {
    if (!coords) return;
    setLoading(true);
    setData(null);

    try {
      const val= JSON.stringify({
          lat: coords.lat,
          lon: coords.lon,
          date: new Date().toISOString().split("T")[0],
        });
      console.log("request send- ",val);
      const res = await fetch("https://backend-1-mv91.onrender.com/predict", {
    method: "POST",
    // ✅ 'Accept' helps backend know it's JSON
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    // ✅ stringify only here
    body: JSON.stringify(payload),
    mode: "cors", // ensures browser allows cross-origin
  });

      const result = await res.json();
      console.log(result); 
      result.features = result.features.slice(4);
      setData(result);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch data from backend!");
    } finally {
      setLoading(false);
    }
  };

  const getRisk = (p) => {
    if (p >= 0.55) return { label: "High", color: "text-red-500" };
    if (p >= 0.45) return { label: "Moderate", color: "text-yellow-400" };
    return { label: "Low", color: "text-green-400" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Landslide Prediction
          </h1>
          <p className="text-xl text-slate-300">
            Click anywhere in Uttarakhand to get landslide probability and environmental parameters.
          </p>
        </div>

        {/* Map */}
        <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden p-4">
          <div
            ref={mapRef}
            style={{ width: "100%", height: "70vh", borderRadius: "12px" }}
          />
          {coords && (
            <div className="mt-4 text-white text-center text-lg">
              Selected Coordinates: {coords.lat.toFixed(4)}, {coords.lon.toFixed(4)}
            </div>
          )}
        </div>

        {/* Proceed Button */}
        {coords && !data && (
          <div className="flex justify-center mt-4" ref={proceedRef}>
            <button
              onClick={handleProceed}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 border-4 border-blue-300 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                "Proceed"
              )}
            </button>
          </div>
        )}

        {/* Results Section */}
        {data && (
          <div className="space-y-10 text-white">
            <div className="bg-slate-800 rounded-2xl shadow-lg p-6 text-center">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">
                Environmental Parameters
              </h2>

              {/* Grid for features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                {featureNames.map((name, i) => (
                  <div
                    key={name}
                    className="w-44 h-28 bg-slate-700 rounded-lg flex flex-col justify-center"
                  >
                    <p className="text-slate-300 font-medium">{name}</p>
                    <p className="text-xl font-bold text-blue-300">
                      {data.features[i]?.toFixed(3) ?? "N/A"}
                    </p>
                  </div>
                ))}
              </div>

              {/* Probability and Risk */}
              <div className="mt-8">
                <p className="text-xl">
                  Landslide Probability:{" "}
                  <span className="font-bold text-blue-300">
                    {(data.probability * 100).toFixed(2)}%
                  </span>
                </p>
                {(() => {
                  const risk = getRisk(data.probability);
                  return (
                    <p className={`text-lg font-semibold mt-2 ${risk.color}`}>
                      Susceptibility: {risk.label}
                    </p>
                  );
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
