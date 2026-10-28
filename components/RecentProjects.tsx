
"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            className="sm:w-96 w-[80vw] lg:min-h-[32.5rem] h-[25rem]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            {/* Card wrapper */}
            <div
              className="group h-full w-full"
              style={{ perspective: "1200px" }}
            >
              {/* Flip container */}
              <motion.div
                className="relative h-full w-full cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ rotateY: 180 }}
                whileFocus={{ rotateY: 180 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                tabIndex={0}
                role="button"
                aria-label={`Flip project card: ${item.title}`}
              >
                {/* Front face */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-[#13162D] p-4 shadow-lg"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Shine effect */}
                  <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl">
                    <div
                      className="absolute -left-full top-0 h-full w-1/2 -skew-x-12
                      bg-gradient-to-r from-transparent via-white/15 to-transparent
                      transition-transform duration-1000
                      group-hover:translate-x-[300%]"
                    />
                  </div>

                  {/* Project image */}
                  <div className="relative mb-6 flex h-[20vh] items-center justify-center overflow-hidden rounded-xl lg:h-[30vh]">
                    <img
                      src="/bg.png"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <img
                      src={item.img}
                      alt={`${item.title} preview`}
                      className="relative z-10 h-full w-full object-contain"
                    />
                  </div>

                  {/* Project details */}
                  <h2 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                    {item.title}
                  </h2>

                  <p
                    className="my-[1vh] line-clamp-3 text-sm font-light lg:text-base"
                    style={{ color: "#BEC1DD" }}
                  >
                    {item.des}
                  </p>

                  {/* Technology icons and link hint */}
                  <div className="mb-3 mt-7 flex items-center justify-between">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black lg:h-10 lg:w-10"
                          style={{
                            transform: `translateX(-${5 * iconIndex + 2}px)`,
                          }}
                        >
                          <img
                            src={icon}
                            alt="Technology"
                            className="p-2"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center">
                      <span className="text-sm text-purple lg:text-base">
                        View Project
                      </span>
                      <FaLocationArrow
                        className="ml-3"
                        color="#CBACF9"
                      />
                    </div>
                  </div>

                  <p className="mt-3 text-center text-xs text-white/40">
                    Hover to flip
                  </p>
                </div>

                {/* Back face */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-purple/30 bg-[#0d0d20] p-6 text-center shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Back-face shine */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                    <div
                      className="absolute -left-full top-0 h-full w-1/2 -skew-x-12
                      bg-gradient-to-r from-transparent via-purple/20 to-transparent
                      transition-transform duration-1000
                      group-hover:translate-x-[300%]"
                    />
                  </div>

                  <h2 className="relative z-10 mb-4 text-2xl font-bold text-purple">
                    {item.title}
                  </h2>

                  <p className="relative z-10 mb-8 text-sm leading-7 text-[#BEC1DD]">
                    {item.des}
                  </p>

                  <div className="relative z-10 flex flex-wrap justify-center gap-3">
                    {item.iconLists.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black"
                      >
                        <img
                          src={icon}
                          alt="Technology"
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 mt-8 inline-flex items-center gap-3 rounded-full border border-purple/40 px-5 py-3 text-sm text-purple transition-colors hover:bg-purple/10"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Check Live Site
                      <FaLocationArrow />
                    </a>
                  )}

                  <p className="relative z-10 mt-6 text-xs text-white/40">
                    Hover to return
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
