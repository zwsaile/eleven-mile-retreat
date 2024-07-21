export default function Checklist() {
    return (
      <div className="relative h-screen snap-start flex flex-col justify-center items-center px-4">
        <div className="w-full max-w-4xl max-h-[80%] bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-lg p-8 mt-10 shadow-md">
          <h2 className="text-2xl font-bold text-center text-white mb-5">Camping Trip Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Must Bring Items */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Must Bring Supplies</h3>
              <ul className="list-disc list-inside text-white text-sm">
                <li>Tent</li>
                <li>Sleeping Bag</li>
                <li>Backpack</li>
                <li>Water Bottle</li>
                <li>Flashlight</li>
                <li>Clothing Layers</li>
                <li>Big Book</li>
              </ul>
            </div>
            {/* Nice to Have Items */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Nice to Have Supplies</h3>
              <ul className="list-disc list-inside text-white text-sm">
                <li>Sleeping Pad</li>
                <li>Camping Chair</li>
                <li>Book or Journal</li>
                <li>Extra Batteries</li>
                <li>Portable Charger</li>
                <li>Deck of Cards</li>
                <li>Gear for Outdoor Acivities</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-justify font-light text-white mt-10 mb-3">Note: we may be able to arrange for certain must bring supplies to be loaned to those in need.</p>
        </div>
      </div>
    );
  }
  