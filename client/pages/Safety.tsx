import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Safety() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Safety & Preparedness
          </h1>
          <p className="text-xl text-slate-300">
            Comprehensive safety monitoring and emergency preparedness protocols for your geospatial projects
          </p>
        </div>

        {/* Placeholder Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-slate-800/50 rounded-xl shadow-md border border-slate-700">
            <div className="h-48 bg-gradient-to-br from-blue-900/30 to-blue-950 rounded-lg flex items-center justify-center mb-6 border border-blue-700">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">🚨</div>
                <p className="text-slate-400">Alert System Coming Soon</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Safety Alerts</h3>
            <p className="text-slate-300 mb-4">
              Monitor safety incidents and hazards in real-time across all project locations.
            </p>
            <p className="text-sm text-slate-400">
              This section is currently being developed. Continue exploring the app to help us build out more features.
            </p>
          </div>

          <div className="p-8 bg-slate-800/50 rounded-xl shadow-md border border-slate-700">
            <div className="h-48 bg-gradient-to-br from-blue-900/30 to-blue-950 rounded-lg flex items-center justify-center mb-6 border border-blue-700">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">📋</div>
                <p className="text-slate-400">Preparedness Plans Coming Soon</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Emergency Planning</h3>
            <p className="text-slate-300 mb-4">
              Develop and maintain comprehensive emergency response and preparedness plans.
            </p>
            <p className="text-sm text-slate-400">
              This section is currently being developed. Continue exploring the app to help us build out more features.
            </p>
          </div>
        </div>

        {/* Feature Overview */}
        <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700 p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Safety Features</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1 font-bold border border-blue-600">✓</div>
              <div>
                <h4 className="font-semibold text-white">Incident Tracking</h4>
                <p className="text-slate-300 text-sm">Document and track safety incidents with detailed geospatial data</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1 font-bold border border-blue-600">✓</div>
              <div>
                <h4 className="font-semibold text-white">Risk Assessment</h4>
                <p className="text-slate-300 text-sm">Evaluate and mitigate risks across project zones</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1 font-bold border border-blue-600">✓</div>
              <div>
                <h4 className="font-semibold text-white">Compliance Management</h4>
                <p className="text-slate-300 text-sm">Ensure adherence to safety regulations and industry standards</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1 font-bold border border-blue-600">✓</div>
              <div>
                <h4 className="font-semibold text-white">Emergency Response</h4>
                <p className="text-slate-300 text-sm">Quick coordination and response protocols for emergencies</p>
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
            to="/prediction"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Prediction <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
