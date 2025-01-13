import Image from "next/image";

const GalleryComponent = () => {
    return (
        <a href={"https://ui.aceternity.com/"} className={"group"} target="_blank" rel="opener referrer">
            <div className={"p-5 bg-outlineGray justify-center m-auto flex rounded-md group-hover:bg-hoverOutline transition"}>
                <Image src={"/sc/aceturnity.png"} alt={"test"} width={700} height={600} className={"rounded-md"}/>
            </div>
            <h1 className={"font-semibold mt-2"}>Aceturnity</h1>
            <p className={"text-sm text-gray-400"}>Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
        </a>
    )
}

export default GalleryComponent;