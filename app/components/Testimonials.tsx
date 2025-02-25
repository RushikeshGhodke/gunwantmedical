import React from "react";
import InfiniteTestimonialScroll from "@/app/components/InfiniteTestimonialScroll";

const Testimonials = () => {
    interface Testimonial {
        id: number;
        imageUrl: string;
        name: string;
        role: string;
        testimonial: string;
        stars: number;
    }

    const testimonials: Testimonial[] = [
        {
            id: 1,
            imageUrl: "./anand.png",
            name: "Anand",
            role: "Regular customer",
            testimonial:
                "Great medical store in Nashik. My personal experience with Gunwant Store was fabulous and awesome.",
            stars: 5,
        },
        {
            id: 2,
            imageUrl: "./pradeep.png",
            name: "Paul",
            role: "New customer",
            testimonial:
                "Came from Pune to Nashik...staying in a hotel...wanted medicine delivered to the hotel...the Gentleman at Gunwant Medical so well and ensured the delivery....great response and all the best wishes",
            stars: 4,
        },
        {
            id: 3,
            imageUrl: "./chetan.png",
            name: "Chetan",
            role: "Frequent buyer",
            testimonial:
                "Best to best service..very polit and cooperative owner and staff..wonderful staff deliver consistently great customer service! Specialy Owner Very professional and friendly.. Thanks for helping...best luck for your future growth...........",
            stars: 5,
        },
        {
            id: 4,
            imageUrl: "./rahul.png",
            name: "Rahul",
            role: "Frequent buyer",
            testimonial:
                "Great chemist with all the medicines made available as they commit. Can say best medical in my Nasik city. Would 100 % recommend this pharmacy to everyone. Thanks Mayur bhai for home delivery service as well…!",
            stars: 5,
        },
        {
            id: 5,
            imageUrl: "./pradeep.png",
            name: "Pradeep",
            role: "Frequent buyer",
            testimonial:
                "We are dealing with this chemist since 40 years. A very well managed store with knowledgeable pharmacist Mayur. He guides us so very well. Hence this is the best medical in the  city. We also use the home delivery facility sometimes. Thanks for the best service Team.",
            stars: 5,
        },
    ];

    return (
        <div className="bg-[#FFF] flex flex-col items-center gap-16 px-6 pb-24 sm:px-12 md:px-16">
            <h1 className="text-[#252525] text-[32px] sm:text-[40px] mt-16 text-center">
                What our <span className="text-[#468585]">customers</span> say
            </h1>
            <p className="text-[#7A7676] text-center text-md md:text-xl px-6 font-light mb-10 lg:w-[45%]">
                Trusted by thousands for our quality products, reliable service, and
                exceptional customer experience.
            </p>

            <InfiniteTestimonialScroll testimonials={testimonials} speed={30} />
        </div>
    );
};

export default Testimonials;