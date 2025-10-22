export default function Inventory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl sm:text-5xl font-bold text-white mb-4">
            Landslide Inventory
          </h1>
          <p className="text-lg text-slate-300">
            Map of past landslide occurrences in India
          </p>
        </div>

        {/* Embedded Map */}
        <div className="w-full h-[75vh] rounded-lg overflow-hidden shadow-lg">
          <iframe
           src="https://tavgun-k.users.earthengine.app/view/landslideindia"  // <-- replace with your map website URL
            title="Landslide Map"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
