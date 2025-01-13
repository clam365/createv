import CategoryTag from "@/components/CategoryTag";
import GalleryComponent from "@/components/GalleryComponent";
import resources from "@/components/resources";
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {resources.map((resource, index) => (
                    <GalleryComponent
                        key={index} // Use a unique identifier if available, like `resource.link`.
                        image={resource.image}
                        link={resource.link}
                        title={resource.title}
                        description={resource.description}
                        tag={resource.tag}
                    />
                ))}
            </div>
        </>
    )
}