import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between pb-4">
                    <a className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" href="">An aesthetic room is <br />given harmony</a>
                    <p className="tracking-wider text-gray-400">WORLD AWARD</p>
                </div>
                <div className="grid lg:grid-cols-2 items-center gap-8">
                    <div>
                        <Image src="/image/aboutfront.png" width={900} height={500} alt="" className="max-md:hidden" />
                    </div>

                    <div>
                        <p className="pl-0 pr-12 pb-4 text-gray-700 text-left lg:pl-12">
                            At Sri Sai Interiors, we don&apos;t just design spaces; we weave dreams into reality. With a deep understanding of aesthetics and a touch of Indian soul, we transform houses into homes filled with warmth, harmony, and unique character. Our dedication to quality craftsmanship and client trust has been recognized with accolades from around the globe. Choose Sri Sai Interiors, where your vision meets our artistry.
                        </p>
                        <div className="flex px-12 pt-4 gap-x-4 ">
                            <Image src="/image/awards.png" width={100} height={80} alt="" className=" h-[100px]" />
                            <Image src="/image/awards1.png" width={100} height={80} alt="" className=" h-[100px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}