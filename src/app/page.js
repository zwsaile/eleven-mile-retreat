import Navbar from "./navbar";
import Summary from "./summary";
import About from "./about";
import Checklist from "./checklist";

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: "url('/sunset.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Scrollable Content */}
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
          <div className="h-screen snap-start relative flex flex-col justify-end items-center">
            <div className="absolute top-[20%] w-[80%] flex flex-col justify-center items-center bg-[rgba(255,255,255,0.2)] backdrop-blur-sm p-6 shadow-md rounded-md">
              <h1 className="text-center text-3xl font-bold mb-5 text-white">
                "Most of us feel we need look no further for Utopia.
              </h1>
              <h2 className="text-center text-2xl font-normal text-white">
                We have it with us right here and now."
              </h2>
            </div>
            <div className="flex flex-row justify-around w-full max-w-4xl bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-lg p-8 m-4 text-center">
              <p className="text-sm text-left text-white w-[65%]">
                Secure your spot now by clicking the sign up button, or scroll down for more information.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc5YS3MFvIKzU7U_MrS7lZiLznLCluk8cCYLYn68rPUM_cb4A/viewform?usp=sf_link"
                  className="inline-flex justify-center items-center px-4 py-2 bg-black text-white text-lg md:text-xl font-semibold rounded-lg shadow-md text-center hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
          <div className="h-screen snap-start relative flex flex-col justify-center items-center">
            <div className="absolute top-[20%] w-full flex flex-col justify-center items-center">
              <Summary />
            </div>
          </div>
          <div className="h-screen snap-start relative flex flex-col justify-center items-center">
            <div className="absolute top-[20%] w-full flex flex-col justify-center items-center">
              <About />
            </div>
          </div>
          <div className="h-screen snap-start relative flex flex-col justify-center items-center">
            <div className="absolute top-2 w-full flex flex-col justify-center items-center">
              <Checklist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}