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
import { Icon, Style } from "ol/style";

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [markerLayer, setMarkerLayer] = useState<VectorLayer<VectorSource<Feature<Point>>> | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: fromLonLat([78.9, 22.5]),
        zoom: 5,
      }),
      controls: defaultControls({ attribution: false, zoom: true }),
    });

    // Vector layer for marker
    const vectorSource = new VectorSource<Feature<Point>>();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);
    setMarkerLayer(vectorLayer);

    map.on("click", (evt) => {
      const [lng, lat] = toLonLat(evt.coordinate);
      setCoords({ lat, lng });

      // Add marker
      vectorSource.clear();
      const marker = new Feature({
        geometry: new Point(evt.coordinate),
      });
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
    });

    return () => map.setTarget(undefined);
  }, []);

  return (

    // /////////
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Prediction Models
          </h1>
          <p className="text-xl text-slate-300">
            Click anywhere in India to get landslide probability and
            environmental metrics.
          </p>
        </div>

      </div>
    <div className="max-w-6xl w-full bg-slate-800 rounded-2xl shadow-xl overflow-hidden p-4">
        <div
          ref={mapRef}
          style={{ width: "100%", height: "70vh", borderRadius: "12px" }}
        />
        {coords && (
          <div className="mt-4 text-white text-center text-lg">
            Clicked Coordinates: {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}
          </div>
        )}
      </div>
    </div>






  );
}
