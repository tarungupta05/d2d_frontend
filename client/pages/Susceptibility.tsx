import { ArrowRight, Globe, AlertCircle, Layers, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Susceptibility() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 text-green-300 rounded-full mb-6 border border-green-700">
            <Globe size={16} />
            <span className="text-sm font-semibold">Earth Analysis</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Geospatial Susceptibility Analysis
          </h1>
          <p className="text-xl text-slate-300">
            Assess vulnerability zones and environmental susceptibility patterns across terrestrial and geological landscapes using advanced spatial analysis
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Landslide Risk */}
          <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/30 rounded-xl shadow-md border border-slate-700 hover:border-green-600 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-green-900/40 rounded-lg flex items-center justify-center mb-4 border border-green-700 group-hover:bg-green-900/60 transition-colors">
              <AlertCircle className="text-green-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Landslide Susceptibility</h3>
            <p className="text-slate-300 text-sm mb-4">
              Identify slopes and terrain features prone to landslides based on geological and hydrological factors
            </p>
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
              <span>Analyze terrain</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Flood Risk */}
          <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/30 rounded-xl shadow-md border border-slate-700 hover:border-blue-600 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center mb-4 border border-blue-700 group-hover:bg-blue-900/60 transition-colors">
              <Layers className="text-blue-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Flood Susceptibility</h3>
            <p className="text-slate-300 text-sm mb-4">
              Map flood-prone zones by analyzing drainage patterns, elevation, and hydrological networks
            </p>
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
              <span>Map water systems</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Soil Erosion */}
          <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/30 rounded-xl shadow-md border border-slate-700 hover:border-amber-600 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-amber-900/40 rounded-lg flex items-center justify-center mb-4 border border-amber-700 group-hover:bg-amber-900/60 transition-colors">
              <TrendingUp className="text-amber-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Erosion Susceptibility</h3>
            <p className="text-slate-300 text-sm mb-4">
              Evaluate soil erosion potential through vegetation coverage, slope angle, and precipitation data
            </p>
            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
              <span>Monitor soil health</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Seismic Zones */}
          <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/30 rounded-xl shadow-md border border-slate-700 hover:border-red-600 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-red-900/40 rounded-lg flex items-center justify-center mb-4 border border-red-700 group-hover:bg-red-900/60 transition-colors">
              <Globe className="text-red-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Seismic Susceptibility</h3>
            <p className="text-slate-300 text-sm mb-4">
              Identify earthquake-prone areas through tectonic plate analysis and fault mapping
            </p>
            <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
              <span>Analyze tectonics</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Land Cover Change */}
          <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/30 rounded-xl shadow-md border border-slate-700 hover:border-green-600 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-green-900/40 rounded-lg flex items-center justify-center mb-4 border border-green-700 group-hover:bg-green-900/60 transition-colors">
              <Layers className="text-green-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Land Cover Vulnerability</h3>
            <p className="text-slate-300 text-sm mb-4">
              Track deforestation, urban expansion, and vegetation changes affecting ecosystem stability
            </p>
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
              <span>Monitor ecosystems</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Climate Impact */}
          <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/30 rounded-xl shadow-md border border-slate-700 hover:border-cyan-600 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-cyan-900/40 rounded-lg flex items-center justify-center mb-4 border border-cyan-700 group-hover:bg-cyan-900/60 transition-colors">
              <Globe className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Climate Susceptibility</h3>
            <p className="text-slate-300 text-sm mb-4">
              Assess areas vulnerable to climate change impacts including temperature, precipitation shifts
            </p>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
              <span>Climate analysis</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* Interactive Visualization Section */}
        <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-700/50 rounded-xl p-12 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Interactive Vulnerability Maps</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explore multi-layered spatial data with our advanced GIS visualization tools. Combine multiple risk factors to understand complex environmental interactions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="h-40 bg-gradient-to-br from-green-900/40 to-slate-900 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-slate-400 text-sm">Risk Layer Visualization</p>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Multi-Layer Analysis</h3>
              <p className="text-slate-300 text-sm">Overlay multiple susceptibility layers to understand compound risk exposure</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="h-40 bg-gradient-to-br from-blue-900/40 to-slate-900 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-slate-400 text-sm">Statistical Models</p>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Quantitative Assessment</h3>
              <p className="text-slate-300 text-sm">Probabilistic models and statistical analysis for susceptibility indices</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Analysis Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 text-center hover:border-green-600 transition-colors">
              <div className="text-3xl font-bold text-green-400 mb-2">500K+</div>
              <p className="text-slate-300">Terrain Cells Analyzed</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 text-center hover:border-blue-600 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <p className="text-slate-300">Prediction Accuracy</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 text-center hover:border-green-600 transition-colors">
              <div className="text-3xl font-bold text-green-400 mb-2">8+</div>
              <p className="text-slate-300">Risk Factor Categories</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 text-center hover:border-cyan-600 transition-colors">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Real-time</div>
              <p className="text-slate-300">Data Processing</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center text-white shadow-xl border border-green-500">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Your Susceptibility Assessment</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Understand environmental risks and vulnerabilities. Make data-driven decisions for sustainable engineering and development projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              to="/prediction"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              View Predictions <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
