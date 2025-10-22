import { ArrowRight, MapPin, Zap, Shield, BarChart3, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      {/* Hero Section */}
      <section className="pt-20 px-6 sm:px-12 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
     
<h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 leading-tight">
  <span className="text-green-500">La</span><span className="text-blue-500">RA</span>
</h1>
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-200 mb-6 tracking-wide">
  Landslide Risk Assessment
</h2>
<p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-8 space-y-4">
     <p className="text-xl text-slate-300 max-w-2xl mb-8">
              Explore and analyze landslide susceptibility with our geospatial web app.<br />
              Access real-time environmental data to predict and assess landslide risks at any location.<br />
              Browse a comprehensive inventory of past landslides for deeper insights.<br /><br />
            
            </p>
  <span className="block mt-4 text-blue-300 font-semibold text-lg sm:text-xl">
    Dive In: Click and Reveal
  </span>
</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/susceptibility"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
              >
                Explore Susceptibility <ArrowRight size={20} />
              </Link>
              <Link
                to="/prediction"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-800 text-blue-400 font-semibold rounded-lg border-2 border-blue-600 hover:bg-slate-700 transition-colors"
              >
                View Predictions
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            <div className="p-6 bg-slate-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-700 hover:border-green-600">
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4 border border-green-700">
                <AlertTriangle className="text-green-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Susceptibility Analysis</h3>
              <p className="text-slate-300 text-sm">Assess environmental risks and vulnerability patterns across geological landscapes.</p>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-700 hover:border-blue-600">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 border border-blue-700">
                <BarChart3 className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Landslide Prediction</h3>
              <p className="text-slate-300 text-sm">Advanced predictive analytics using spatial data and machine learning algorithms.</p>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-700 hover:border-blue-600">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 border border-blue-700">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Landslide Inventory </h3>
              <p className="text-slate-300 text-sm">Track and manage resources across geospatial locations with precision.</p>
            </div>


            <div className="p-6 bg-slate-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-700 hover:border-blue-600">
            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 border border-blue-700">
            <Lock className="text-blue-400" size={24} /> {/* Lock symbol for safety */}
         </div>
         <h3 className="text-lg font-semibold text-white mb-2">Safety and Preparedness</h3>
         <p className="text-slate-300 text-sm"> Stay prepared for landslides with safety tips and evacuation guidelines</p>
          </div>

          </div>
        </div>
      </section>



    </div>
  );
}
