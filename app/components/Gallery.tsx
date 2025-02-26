"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const Gallery = () => {
    const scrollerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)
                scrollerRef.current?.appendChild(duplicatedItem)
            })
        }
    }, [])

    return (
        <div className="h-[80vh] flex flex-col lg:flex-row items-center lg:items-center justify-center gap-2 lg:px-48 py-10 lg:gap-10 bg-[#3D3D3D] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 mb-8">
                <h1 className="flex flex-row lg:flex-col text-3xl gap-2 lg:text-6xl lg:gap-3">
                    <span className="text-white">Our</span>
                    <span className="text-[#A4E5AF]">Gallery</span>
                </h1>
                {/*<button className="text-[#3D3D3D] w-max bg-white px-5 py-1 lg:px-7 lg:py-3 rounded-md lg:rounded-full">*/}
                {/*    View all*/}
                {/*</button>*/}
            </div>
            <div className="relative w-full overflow-hidden">
                <div
                    ref={scrollerRef}
                    className="flex animate-scroll"
                    style={{
                        animationDuration: "40s",
                    }}
                >
                    <Image src={`/gunwantgallery1.jpg`} className="rounded-xl mx-2 rounded-xl mx-2 w-[400px] h-[300px] object-cover" alt={"gg1"} width={500} height={350} />
                    <Image src={`/gunwantgallery2.jpg`} className="rounded-xl mx-2 rounded-xl mx-2 w-[400px] h-[300px] object-cover" alt={"gg2"} width={500} height={350} />
                    <Image src={`/gunwantgallery3.jpg`} className="rounded-xl mx-2 rounded-xl mx-2 w-[400px] h-[300px] object-cover" alt={"gg3"} width={500} height={350} />
                    <Image src={`/gunwantgallery4.jpg`} className="rounded-xl mx-2 rounded-xl mx-2 w-[400px] h-[300px] object-cover" alt={"gg4"} width={500} height={350} />
                </div>
            </div>
        </div>
    )
}

export default Gallery