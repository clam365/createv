import CategoryTag from "@/components/CategoryTag";
import GalleryComponent from "@/components/GalleryComponent";

export default function Gallery() {
    return (
        <>
            <div className={"flex gap-x-2 mt-16"}>
                <CategoryTag category={"Guidelines"}/>
                <CategoryTag category={"Brand"}/>
                <CategoryTag category={"Inspiration"}/>
                <CategoryTag category={"Libraries"}/>
                <CategoryTag category={"Inspiration"}/>
                <CategoryTag category={"Youtubers"}/>
            </div>
            <div className={"grid grid-col-1 md:grid-cols-4 mt-8"}>
                <GalleryComponent/>
            </div>
        </>
    )
}