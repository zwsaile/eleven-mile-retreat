export default function About() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center">
      {/* Left: Text content */}
      <div className="flex-1 space-y-8 text-gray-800">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Eleven Mile Canyon
          </h2>
          <div className="w-24 md:w-32 h-1 bg-[#ffb347] rounded-full mt-4 mx-auto md:mx-0" />
        </div>

        <p className="text-md md:text-lg leading-relaxed">
            Tucked away in central Colorado&rsquo;s Pike National Forest, Eleven Mile Canyon is a hidden gem where granite walls meet winding waters. Just a short drive from Lake George and Florissant, the canyon invites you to slow down and reconnect with nature, with others, and with yourself.
        </p>

        <p className="text-md md:text-lg leading-relaxed">
            Whether you&#39;re hiking peaceful trails, fishing along the river, cliff diving into crystal waters, or spotting eagles overhead, Eleven Mile is more than a destination. It&#39;s a chance to recharge, reflect, and be present.
        </p>
      </div>

      {/* Right: Image */}
      <div className="flex-1">
        <img
          src="/wide-river.jpg"
          alt="Eleven Mile Canyon"
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}