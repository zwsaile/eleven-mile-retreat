import Navbar from "./navbar";
import Summary from "./summary";
import About from "./about";
import Checklist from "./checklist";
import Carousel from "./carousel";

export default function Page() {
  return (
    <div className="bg-[#fffaf5] text-gray-900">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-20 bg-white shadow-sm">
        <Navbar />
      </div>

      {/* Content */}
      <main className="pt-24 space-y-0">
        {/* Hero */}
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-20 bg-gradient-to-br from-[#fff8f0] via-[#fff2e2] to-[#ffe5d9]">
          <div className="max-w-[90rem] w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-md">
            
            {/* Text Block */}
            <div className="w-full md:w-1/2 space-y-12 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Most of us feel we need look no further for Utopia.
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700">
                We have it with us right here and now.
              </h2>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc5YS3MFvIKzU7U_MrS7lZiLznLCluk8cCYLYn68rPUM_cb4A/viewform?usp=sf_link"
                className="inline-block px-6 py-3 bg-[#ffb347] text-white text-xl font-semibold rounded-full shadow hover:bg-[#ffa534] transition"
              >
                Sign Up
              </a>
            </div>

            {/* Image */}
            <div
              className="w-full md:w-1/2 h-[50vh] bg-cover bg-center rounded-xl shadow-md"
              style={{ backgroundImage: "url('/sunset.jpg')" }}
            />
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-b from-[#ffeedd] to-[#fff8f0] px-6 py-24">
          <div className="max-w-[90rem] mx-auto rounded-2xl shadow-md p-10 bg-white/90 backdrop-blur-sm">
            <Summary />
          </div>
        </section>

        {/* About */}
        <section className="bg-gradient-to-b from-[#fff8f0] to-[#fef3e8] px-6 py-24">
          <div className="max-w-[90rem] mx-auto rounded-2xl shadow-md p-10 bg-white/90 backdrop-blur-sm">
            <About />
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-gradient-to-b from-[#fef3e8] to-[#fff8f0] px-6 py-24">
          <div className="max-w-[90rem] mx-auto rounded-2xl shadow-md p-10 bg-white/90 backdrop-blur-sm">
            <Checklist />
          </div>
        </section>

        {/* Carousel */}
        <section className="bg-gradient-to-b from-[#fff8f0] to-[#ffeedd] px-6 py-24">
          <div className="max-w-[90rem] mx-auto">
            <Carousel />
          </div>
        </section>
      </main>
    </div>
  );
}