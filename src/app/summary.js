export default function Summary() {
  return (
    <div className="space-y-8 text-gray-800">
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Welcome to the Eleven Mile Canyon Retreat
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600">
          October 3 – October 5, 2025
        </h2>
        <div className="mx-auto w-24 md:w-32 h-1 bg-[#ffb347] rounded-full mt-4" />
      </div>

      <p className="text-md md:text-lg leading-relaxed">
        We are delighted to have you join us this year. This retreat is an opportunity to enjoy the beautiful Colorado outdoors, connect with your higher power, build lasting relationships with men in recovery, and support each other as we trudge the road to happy destiny.
      </p>

      <p className="text-md md:text-lg leading-relaxed">
        Before securing your spot, please ensure you complete the registration form and submit the registration fee in full. Your spot is only guaranteed once both are completed. If you have any questions or would like to contact us, feel free to email us at{" "}
        <a
          className="text-[#ffb347] underline hover:text-[#e89e32]"
          href="mailto:11mileretreat@gmail.com"
        >
          11mileretreat@gmail.com
        </a>
        .
      </p>
    </div>
  );
}