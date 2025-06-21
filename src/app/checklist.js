export default function Checklist() {
  return (
    <div className="space-y-10 max-w-5xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Camping Trip Checklist
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Must Bring Supplies */}
        <div>
          <h3 className="text-xl font-semibold text-[#ffb347] mb-6 border-b-2 border-[#ffb347] pb-2">
            Must Bring Supplies
          </h3>
          <ul className="list-disc list-inside text-gray-800 text-base space-y-2">
            <li>Tent</li>
            <li>Sleeping Bag</li>
            <li>Backpack</li>
            <li>Water Bottle</li>
            <li>Flashlight</li>
            <li>Clothing Layers</li>
            <li>Big Book</li>
          </ul>
        </div>

        {/* Nice to Have Supplies */}
        <div>
          <h3 className="text-xl font-semibold text-[#ffb347] mb-6 border-b-2 border-[#ffb347] pb-2">
            Nice to Have Supplies
          </h3>
          <ul className="list-disc list-inside text-gray-800 text-base space-y-2">
            <li>Sleeping Pad</li>
            <li>Camping Chair</li>
            <li>Book or Journal</li>
            <li>Extra Batteries</li>
            <li>Portable Charger</li>
            <li>Deck of Cards</li>
            <li>Gear for Outdoor Activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}