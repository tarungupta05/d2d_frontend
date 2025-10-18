import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Inventory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Inventory Management
          </h1>
          <p className="text-xl text-slate-300">
            Track and manage resources across geospatial locations with precision and accuracy
          </p>
        </div>

        {/* Placeholder Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-slate-800/50 rounded-xl shadow-md border border-slate-700">
            <div className="h-48 bg-gradient-to-br from-blue-900/30 to-blue-950 rounded-lg flex items-center justify-center mb-6 border border-blue-700">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">📦</div>
                <p className="text-slate-400">Inventory Dashboard Coming Soon</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Resource Tracking</h3>
            <p className="text-slate-300 mb-4">
              Monitor equipment, materials, and resources deployed across your project sites.
            </p>
            <p className="text-sm text-slate-400">
              This section is currently being developed. Continue exploring the app to help us build out more features.
            </p>
          </div>

          <div className="p-8 bg-slate-800/50 rounded-xl shadow-md border border-slate-700">
            <div className="h-48 bg-gradient-to-br from-blue-900/30 to-blue-950 rounded-lg flex items-center justify-center mb-6 border border-blue-700">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">📍</div>
                <p className="text-slate-400">Location Mapping Coming Soon</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Geospatial Mapping</h3>
            <p className="text-slate-300 mb-4">
              Visualize resource distribution and location-based inventory data on interactive maps.
            </p>
            <p className="text-sm text-slate-400">
              This section is currently being developed. Continue exploring the app to help us build out more features.
            </p>
          </div>
        </div>

        {/* Feature Overview */}
        <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700 p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Inventory Features</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1 font-bold border border-blue-600">✓</div>
              <div>
                <h4 className="font-semibold text-white">Real-time Stock Monitoring</h4>
                <p className="text-slate-300 text-sm">Track inventory levels in real-time across all project locations</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1 font-bold border border-blue-600">✓</div>
              <div>
                <h4 className="font-semibold text-white">Automated Alerts</h4>
                <p className="text-slate-300 text-sm">Receive notifications when inventory levels fall below thresholds</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1 font-bold border border-blue-600">✓</div>
              <div>
                <h4 className="font-semibold text-white">Location-Based Organization</h4>
                <p className="text-slate-300 text-sm">Organize inventory by geospatial coordinates and project zones</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1 font-bold border border-blue-600">✓</div>
              <div>
                <h4 className="font-semibold text-white">Historical Tracking</h4>
                <p className="text-slate-300 text-sm">Review inventory history and usage patterns over time</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 border-2 border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            to="/safety"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Safety & Preparedness <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
