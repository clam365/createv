import Image from "next/image";

interface GalleryComponentProps {
    image: string;
    link: string;
    title: string;
    description: string;
    tag: string;
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({image, link, tag, title, description}) => {
    return (
        <a href={`${link}`} className={"group"} target="_blank" rel="opener referrer" id={tag}>
            <div className={"p-5 bg-outlineGray justify-center m-auto flex rounded-md group-hover:bg-hoverOutline transition"}>
                <Image src={`/sc/${image}`} alt={"test"} width={700} height={600} className={"rounded-md"}/>
            </div>
            <h1 className={"font-semibold mt-2"}>{title}</h1>
            <p className={"text-sm text-gray-400"}>{description}</p>
        </a>
    )
}

export default GalleryComponent;