import { ArrowRight, MapPin, Zap, Shield, BarChart3, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      {/* Hero Section */}
      <section className="pt-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full mb-6 border border-blue-700">
              <MapPin size={16} />
              <span className="text-sm font-semibold">Geospatial Intelligence</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Advanced Geospatial <span className="text-blue-500">Engineering</span> Platform
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              Harness the power of spatial data analytics, predictive modeling, and resource management for your engineering projects. Make informed decisions with real-time insights.
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
              <h3 className="text-lg font-semibold text-white mb-2">Prediction Models</h3>
              <p className="text-slate-300 text-sm">Advanced predictive analytics using spatial data and machine learning algorithms.</p>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-700 hover:border-blue-600">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 border border-blue-700">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Inventory Management</h3>
              <p className="text-slate-300 text-sm">Track and manage resources across geospatial locations with precision.</p>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-700 hover:border-red-600">
              <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-4 border border-red-700">
                <Shield className="text-red-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Safety & Preparedness</h3>
              <p className="text-slate-300 text-sm">Comprehensive safety monitoring and emergency preparedness protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-slate-900/50 mt-20 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Platform Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
              <p className="text-slate-300">Active Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">2.5M</div>
              <p className="text-slate-300">Data Points Analyzed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">98%</div>
              <p className="text-slate-300">Prediction Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
              <p className="text-slate-300">Monitoring Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-xl border border-blue-500">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Explore our comprehensive geospatial engineering tools and transform your project management today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/prediction"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Predictions
            </Link>
            <Link
              to="/safety"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Safety & Preparedness
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
