import CategoryTag from "@/components/CategoryTag";

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
        </>
    )
}