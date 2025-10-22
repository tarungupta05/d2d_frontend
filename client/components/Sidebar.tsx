import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

import {
  Home,
  TrendingUp,
  Package,
  Shield,
  MapPin,
  Menu,
  X,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Susceptibility", path: "/susceptibility", icon: AlertTriangle },
    { name: "Prediction", path: "/prediction", icon: TrendingUp },
    { name: "Inventory", path: "/inventory", icon: Package },
    // { name: "Safety & Preparedness", path: "/safety", icon: Shield },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-slate-900 text-white shadow-2xl z-40 transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo/Branding */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
              <img
      src="/logo_lara.png"
      alt="LaRA Logo"
      className="w-14 h-14 rounded-lg object-cover"
    />
            <div>
              <h1 className="text-xl font-bold">LaRA</h1>
              <p className="text-xs text-blue-300">Geospatial Engineering</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-8">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                      active
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-slate-300 hover:bg-slate-800"
                    )}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700">
          <p className="text-xs text-slate-400">
            Geospatial Engineering Platform v1.0
          </p>
        </div>
      </aside>

      {/* Main Content Offset */}
      <div className="hidden lg:block w-64" />
    </>
  );
};

export default Sidebar;
