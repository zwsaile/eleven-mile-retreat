export default function Summary() {
    return (
        <div className="relative h-screen flex flex-col justify-center items-center max-h-[90vh]">
            <div className="w-[90%] -mt-[20vh] flex flex-col justify-center items-center bg-[rgba(255,255,255,0.1)] backdrop-blur-md p-10 shadow-md rounded-md">
                <h1 className="text-center text-2xl font-bold mb-8 text-white">
                    Welcome to the Eleven Mile Canyon Retreat
                </h1>
                <p className="text-left text-lg font-normal text-white mb-4">
                    We're delighted to have you join us this year. Before securing your spot, please ensure you complete the registration form and submit the registration fee in full. Your spot is only guaranteed once both are completed.
                </p>
                <p className="text-left text-lg font-normal text-white">
                    This retreat is an opportunity to enjoy the beautiful Colorado outdoors, connect with your higher power, build lasting relationships with men in AA, and support each other as we trudge the road to happy destiny.
                </p>
            </div>
        </div>
    );
}