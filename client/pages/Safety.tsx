import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Safety() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Safety & Preparedness
          </h1>
          <p className="text-xl text-slate-300">
            Essential emergency contacts, safety guidelines, and evacuation protocols for landslides in Uttarakhand.
          </p>
        </div>

        {/* Emergency Numbers */}
        <div className="bg-red-800/80 border border-red-600 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-red-200 mb-4">🚨 Emergency Numbers - Uttarakhand</h2>
          <ul className="text-red-100 font-semibold text-lg space-y-2">
            <li>Disaster Management Control Room: <span className="text-white">1070</span></li>
            <li>Police Emergency: <span className="text-white">100</span></li>
            <li>Fire Department: <span className="text-white">101</span></li>
            <li>Ambulance / Medical Emergency: <span className="text-white">108</span></li>
            <li>Uttarakhand Disaster Management Helpline: <span className="text-white">1800-180-423</span></li>
          </ul>
        </div>

        {/* Safety & Evacuation Guidelines */}
        <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700 p-6 space-y-6">
          <h2 className="text-2xl font-bold text-white mb-4">🏞️ Safety & Evacuation Guidelines</h2>
          
          <ul className="space-y-4 text-slate-300">
            <li>
              <span className="font-semibold text-white">Before a Landslide:</span> Monitor susceptibility maps, stay alert for soil cracks, tilting trees, or unusual water flow. Prepare emergency kits and evacuation plans.
            </li>
            <li>
              <span className="font-semibold text-white">During a Landslide:</span> Move to higher ground immediately. Avoid rivers, streams, and unstable slopes. Follow official alerts and guidance.
            </li>
            <li>
              <span className="font-semibold text-white">After a Landslide:</span> Do not return to damaged areas until authorities declare it safe. Check structural safety and avoid contaminated water. Report landslide incidents to local authorities or the app’s inventory system.
            </li>
            <li>
              <span className="font-semibold text-white">Community Preparedness:</span> Stay connected with neighbors, share emergency information, and participate in local disaster drills.
            </li>
          </ul>
        </div>

        {/* Quick Access Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
