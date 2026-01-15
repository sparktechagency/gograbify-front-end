import Image from "next/image";

const Loading = () => {
    return (
                <div className="flex min-h-screen items-center justify-center bg-[#080C15]">
            <div className="flex flex-col items-center gap-6">

                <div className="flex items-center gap-2 animate-logoFadeIn ">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={400}
                        height={200}
                        className="h-28 w-60 object-contain"
                    />
                </div>
            </div>
        </div> 
    );
};

export default Loading;