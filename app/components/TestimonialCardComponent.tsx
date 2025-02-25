import React from "react";

interface TestimonialCardProps {
    imageUrl: string;
    name: string;
    role: string;
    testimonial: string;
    stars: number;
}

const TestimonialCardComponent: React.FC<TestimonialCardProps> = ({
                                                                      imageUrl,
                                                                      name,
                                                                      role,
                                                                      testimonial,
                                                                      stars,
                                                                  }) => {
    const renderStars = () => {
        return Array.from({ length: stars }, (_, index) => (
            <img key={index} src="./star-vector.png" alt="star" />
        ));
    };

    return (
        <div className="border-2 border-[#9CDBA6] rounded-3xl flex flex-col gap-5 p-10 w-72 lg:w-80 bg-background">
            <div>
                <img src={imageUrl} alt={name} className="w-16 h-16 rounded-full" />
            </div>
            <div>
                <h1 className="text-[#024444] text-2xl lg:text-2xl">{name}</h1>
                <p className="text-[#949494] text-md lg:text-lg font-[300]">{role}</p>
            </div>
            <p className="text-[#474747] text-lg font-[400] mb-4">“{testimonial}”</p>
            <div className="flex flex-row gap-3">{renderStars()}</div>
        </div>
    );
};

export default TestimonialCardComponent;