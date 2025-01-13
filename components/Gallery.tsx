"use client";
import GalleryComponent from "@/components/GalleryComponent";
import resources from "@/components/resources";
import { useState } from "react";

export default function Gallery() {
    // state to track selected category
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // filter resources based on selected category
    const filteredResources = selectedCategory
        ? resources.filter((resource) => resource.tag === selectedCategory)
        : resources;

    // list of unique categories
    const categories = ["All", "Guidelines", "Brand", "Inspiration", "Libraries", "Youtubers"];

    return (
        <>
            <div className="flex gap-x-2 mt-16">
                {categories.map((category) => (
                    <div
                        key={category}
                        onClick={() => setSelectedCategory(category === "All" ? null : category)}
                        className={`px-3 py-1 bg-outlineGray hover:bg-hoverOutline transition rounded-md cursor-pointer ${
                            selectedCategory === category ? "bg-hoverOutline" : ""
                        }`}
                    >
                        <h1>{category}</h1>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {filteredResources.map((resource, index) => (
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
    );
}
