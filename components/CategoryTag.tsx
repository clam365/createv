import React from "react";

interface CategoryProps {
    category: string
}

const CategoryTag: React.FC<CategoryProps> = ({category}) => {
    return (
        <div className={"px-3 py-1 bg-outlineGray hover:bg-hoverOutline transition rounded-md cursor-pointer"}>
            <h1 className={""}>{category}</h1>
        </div>
    )
}

export default CategoryTag;