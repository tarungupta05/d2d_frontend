import { ArrowRight, Globe, AlertCircle, Layers, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Susceptibility() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
       
          <h1 className="text-4xl sm:text-4xl font-bold text-white mb-4">
            Landslide Susceptibility Analysis
          </h1>
        
      

        {/* Embedded Website */}
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          {/* 16:9 Aspect Ratio */}
          <iframe
            src="https://tavgun-k.users.earthengine.app/view/susceptibiltymodel" // Replace with your desktop website URL
            title="Embedded Website"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
