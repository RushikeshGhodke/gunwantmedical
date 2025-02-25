"use client";

import React from "react";
import TestimonialCardComponent from "@/app/components/TestimonialCardComponent";

interface Testimonial {
    id: number;
    imageUrl: string;
    name: string;
    role: string;
    testimonial: string;
    stars: number;
}

interface InfiniteTestimonialScrollProps {
    testimonials: Testimonial[];
    speed?: number;
}

export default function InfiniteTestimonialScroll({
                                                      testimonials,
                                                      speed = 20,
                                                  }: InfiniteTestimonialScrollProps) {
    const scrollerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const scrollerContent = Array.from(scrollerRef.current?.children || []);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            scrollerRef.current?.appendChild(duplicatedItem);
        });
    }, []);

    return (
        <div
            className="relative m-auto w-full overflow-hidden bg-background before:absolute before:left-0 before:top-0 before:z-[2]
            before:h-full before:w-[50px]
            lg:before:bg-[linear-gradient(to_right,#ffffff_0%,rgba(255,255,255,0.5)_50%,transparent_100%)]
            before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2]
            after:h-full after:w-[50px] after:-scale-x-100
            lg:after:bg-[linear-gradient(to_right,#ffffff_0%,rgba(255,255,255,0.5)_50%,transparent_100%)] after:content-['']">
            <div
                ref={scrollerRef}
                className="flex w-max animate-scroll"
                style={{
                    animationDuration: `${testimonials.length * speed}s`,
                }}
            >
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="max-w-full px-2 lg:px-4">
                        <TestimonialCardComponent
                            imageUrl={testimonial.imageUrl}
                            name={testimonial.name}
                            role={testimonial.role}
                            testimonial={testimonial.testimonial}
                            stars={testimonial.stars}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}