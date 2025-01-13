import Image from "next/image";

export default function Header() {
    return(
        <>
            <div className={"flex justify-center gap-x-4 m-auto items-center"}>
                <Image src={"/star2.jpg"} alt={"northstar"} width={35} height={35} className={"rounded-md"}/>
                <h1 className={"font-bold text-xl"}>createv</h1>
            </div>
            <div className={"flex mt-4 justify-center m-auto"}>
                <h1 className={"font-semibold"}>A curated gallery to find creative UI/UX resources</h1>
            </div>
        </>

    )
}