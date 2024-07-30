export default function Summary() {
    return (
        <div className="relative h-screen flex flex-col justify-center items-center max-h-[85vh]">
            <div className="w-[85vw] -mt-[10vh] max-h-[80%] flex flex-col justify-center items-center bg-[rgba(255,255,255,0.1)] backdrop-blur-md p-10 shadow-md rounded-md">
                <h1 className="text-center text-xl font-bold mb-8 text-white">
                    Welcome to the Eleven Mile Canyon Retreat
                </h1>
                <h2 className="text-center text-lg font-bold mb-8 text-white">
                    9/27/2024 - 9/29/2024
                </h2>
                <p className="text-left text-md font-normal text-white mb-4">
                    We are delighted to have you join us this year. This retreat is an opportunity to enjoy the beautiful Colorado outdoors, connect with your higher power, build lasting relationships with men in recovery, and support each other as we trudge the road to happy destiny.
                </p>
                <p className="text-left text-md font-normal text-white">
                    Before securing your spot, please ensure you complete the registration form and submit the registration fee in full. Your spot is only guaranteed once both are completed. If you have any question or would like to contact us, feel free to email us at&#160;
                    <a 
                        className="underline"
                        href="mailto:11mileretreat@gmail.com">11mileretreat@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}