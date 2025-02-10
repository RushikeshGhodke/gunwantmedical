"use client";

import clsx from "clsx"
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
    rating: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={clsx(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "mask-image: linear-gradient(to_right, transparent, white 20%, white 80%, transparent)",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={clsx(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="border-2 border-[#9CDBA6] rounded-3xl flex flex-col gap-5 p-10 w-80 bg-white shadow-md flex-shrink-0"
            key={idx}
          >
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full"
              />
            </div>
            <div className="text-center">
              <h1 className="text-[#024444] text-2xl lg:text-3xl">
                {item.name}
              </h1>
              <p className="text-[#949494] text-md lg:text-lg font-[300]">
                {item.title}
              </p>
            </div>
            <p className="text-[#474747] text-lg font-[400] text-center">
              “{item.quote}”
            </p>
            <div className="flex justify-center gap-2">
              {[...Array(item.rating)].map((_, i) => (
                <img key={i} src="./star-vector.png" alt="star" className="w-5 h-5" />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
