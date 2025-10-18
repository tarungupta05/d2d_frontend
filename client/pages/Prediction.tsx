import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";
import L, { Icon, LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

// ✅ Fix: define the red pin icon properly using Leaflet
const redPin = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 34], // Makes the tip of the pin match click point
});

// ✅ Small TypeScript helper component for map click
function LocationMarker({
  onSelect,
}: {
  onSelect: (latlng: LatLngLiteral) => void;
}) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng);
    },
  });
  return null;
}

export default function Prediction() {
  const [selected, setSelected] = useState<LatLngLiteral | null>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleMapClick = async (latlng: LatLngLiteral) => {
    setSelected(latlng);
    setLoading(true);
    setData(null);

    try {
      const res = await axios.post("http://localhost:5000/predict", {
        latitude: latlng.lat,
        longitude: latlng.lng,
      });
      setData(res.data);
    } catch (err) {
      console.error("Prediction error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
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

        {/* Map Section */}
        <div className="h-[500px] rounded-xl overflow-hidden border border-slate-700 shadow-md">
          <MapContainer
            center={[22.5, 78.9]} // India center
            zoom={5}
            scrollWheelZoom={true}
            className="h-full w-full z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker onSelect={handleMapClick} />
            {selected && <Marker position={selected} icon={redPin} />}
          </MapContainer>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-slate-300 text-lg">
            Loading prediction...
          </div>
        )}

        {/* Result Section */}
        {data && (
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-md text-white space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">
              Prediction Results
            </h2>
            <p>
              <span className="font-semibold text-slate-300">
                Coordinates:
              </span>{" "}
              {selected?.lat.toFixed(4)}, {selected?.lng.toFixed(4)}
            </p>
            <p>
              <span className="font-semibold text-slate-300">
                Landslide Probability:
              </span>{" "}
              {data.landslide_probability ?? "N/A"}%
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-slate-900/60 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300">
                  Rainfall Forecast
                </h3>
                <p>{data.rainfall_forecast ?? "N/A"} mm</p>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300">Soil Type</h3>
                <p>{data.soil ?? "N/A"}</p>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300">NDVI</h3>
                <p>{data.ndvi ?? "N/A"}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 border-2 border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            to="/inventory"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Inventory <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
