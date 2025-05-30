"use client";
import { Button } from "@/components/Button";
import { ToDoListPortfolio } from "@/data/ProjectInfo";
import { ArrowLeftIcon, BroadcastIcon, GitHubIcon } from "@/Icons";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import TechStack from "@/components/TechStack";

export default function ToDoList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div ref={ref} className="max-w-3xl mx-auto p-6 lg:pt-0 space-y-6">
        <Link href="/projects">
          <Button className="flex gap-4 bg-white border border-gray-110 hover:cursor-pointer">
            <ArrowLeftIcon />
            All Projects
          </Button>
        </Link>

        <div className="relative w-full aspect-[325/202] mt-4 border-2 border-gray-110 rounded-3xl overflow-clip">
          <Image
            src={ToDoListPortfolio.projectImage}
            alt={ToDoListPortfolio.projectName}
            width={3000}
            height={2000}
            quality={100}
          />
        </div>

        <h1 className="font-bold text-5xl">{ToDoListPortfolio.projectName}</h1>
        <p className="text-lg text-gray-140">{ToDoListPortfolio.overview}</p>
        <p className="font-bold text-orange-150">
          Note: This project may take a few moments to load as the backend and
          frontend services are hosted on free-tier infrastructure that sleeps
          when inactive. This may also cause delays in initial requests until
          the services are fully awake.
        </p>

        <div className="flex flex-wrap gap-4 py-6 items-center lg:justify-center">
          <Link
            href={ToDoListPortfolio.livehref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex gap-2 bg-white border border-gray-110 hover:cursor-pointer hover:bg-gray-110">
              <BroadcastIcon />
              <div>View Live</div>
            </Button>
          </Link>
          <Link
            href={ToDoListPortfolio.githubhreffe}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex gap-2 bg-white border border-gray-110 hover:cursor-pointer hover:bg-gray-110">
              <GitHubIcon />
              <div>View Code FE - GitHub</div>
            </Button>
          </Link>
          <Link
            href={ToDoListPortfolio.githubhrefbe}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex gap-2 bg-white border border-gray-110 hover:cursor-pointer hover:bg-gray-110">
              <GitHubIcon />
              <div>View Code BE - GitHub</div>
            </Button>
          </Link>
        </div>

        <div>
          <h1 className="font-bold text-2xl">Issues</h1>
          <p className="text-lg text-gray-140 pt-2">
            {ToDoListPortfolio.issues}
          </p>
        </div>

        <div>
          <h1 className="font-bold text-2xl">Solutions</h1>
          <p className="text-lg text-gray-140 py-2">
            {ToDoListPortfolio.solutionsHeader}
          </p>

          {ToDoListPortfolio.solutionsList.map((solution, index) => (
            <li key={index} className="text-gray-140 text-lg">
              {solution}
            </li>
          ))}

          <p className="text-lg text-gray-140 pt-2">
            {ToDoListPortfolio.solutionsConclusion}
          </p>
        </div>

        <TechStack
          title="Tech Stack (Frontend & Backend Stack)"
          techStackTool={ToDoListPortfolio.techstack.fenbe}
        ></TechStack>

        <TechStack
          title="Tech Stack (DevOps)"
          techStackTool={ToDoListPortfolio.techstack.devops}
        ></TechStack>

        <h2 className="font-semibold text-2xl pt-6">
          Key Features and Technical Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ToDoListPortfolio.sections.featurenhighlights.items.map(
            (item, index) => (
              <div
                key={index}
                className="flex  flex-col gap-4 bg-gray-110  rounded-lg p-4"
              >
                <div>
                  <h3 className="text-xl font-semibold pb-4">{item.heading}</h3>
                  {item.details.map((detail, i) => (
                    <li
                      key={i}
                      className="pb-2 leading-tight text-gray-140 text-base"
                    >
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <>{children}</>,
                          strong: ({ children }) => (
                            <strong className="font-bold text-gray-140">
                              {children}
                            </strong>
                          ),
                        }}
                      >
                        {detail}
                      </ReactMarkdown>
                    </li>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <h2 className="font-semibold text-2xl pt-6">Impact and Outcomes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ToDoListPortfolio.sections.impactandoutcomes.items.map(
            (item, index) => (
              <div
                key={index}
                className="flex  flex-col gap-4 bg-gray-110  rounded-lg p-4"
              >
                <div>
                  <h3 className="text-lg font-semibold pb-4">{item.heading}</h3>
                  {item.details.map((detail, i) => (
                    <li
                      key={i}
                      className="pb-2 leading-tight text-gray-140 text-base"
                    >
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <>{children}</>,
                          strong: ({ children }) => (
                            <strong className="font-bold text-gray-140">
                              {children}
                            </strong>
                          ),
                        }}
                      >
                        {detail}
                      </ReactMarkdown>
                    </li>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}
