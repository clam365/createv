"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
    const words = ["A", "curated", "gallery", "to", "find", "creative", "UI/UX", "resources"];

    const wordAnimation = {
        hidden: { opacity: 0, y: 5 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center gap-x-4 m-auto items-center"
            >
                <Image src="/star2.jpg" alt="northstar" width={35} height={35} className="rounded-md" />
                <h1 className="font-bold text-xl">createv</h1>
            </motion.div>
            <div className="flex mt-4 justify-center m-auto">
                <h1 className="font-semibold flex gap-x-0.5">
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            variants={wordAnimation}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.25,
                                delay: index * 0.05,
                                ease: [0.25, 0.1, 0.25, 1],
                                staggerChildren: 0.12,
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>
            </div>
        </>
    );
}
