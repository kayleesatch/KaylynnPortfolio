import { useState, useEffect } from 'react';
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const projectData = [
    {
        title: "NFT Marketplace",
        description: "Built with React, Axios, and dynamic API integration",
        url: "https://kaylynn-internship.vercel.app/",
        colors: ["text-red-500", "text-yellow-500", "text-yellow-500"],
    },
    {
        title: "Xora - Interactive Game Site",
        description: "React, Vite, Tailwind, GSAP - multiple dimensions with style",
        url: "https://xora-clone-seven.vercel.app/",
        colors: ["text-blue-500", "text-green-500", "text-green-500"],
    },
    {
        title: "Library App",
        description: "Browse & buy books. React + Js + Cart logic",
        url: "https://library-react-tutorial-ten.vercel.app/",
        colors: ["text-purple-500", "text-orange-500", "text-orange-500"],
    },
];

export default function Projects() {
    return (
        <section className="bg-dark-bg py-16 px-4 drop-shadow-green font-mono">
            <div 
                className="max-w-4xl mx-auto rounded-xl p-6 shadow-lg border border-white/40 animate-pulseGlow"
                style={{
                    backgroundImage: "url('/images/circuitBoardBg.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    backgroundBlendMode: "overlay",
                }}
            >
                <h2 className="text-3xl font-bold mb-6 drop-shadow-yellow text-center">Projects</h2>

                <div className="bg-[#0d0d0d] rounded-md p-6 text-sm space-y-4 shadow-inner">
                    {projectData.map(({ title, description, url, colors }, i) => (
                        <ProjectEntry
                            key={i}
                            title={title}
                            description={description}
                            url={url}
                            colors={colors}
                        />
                    ))}

                    <p className="text-white/40 mt-6">// More projects loading...</p>
                </div>
            </div>
        </section>
    );
}

function ProjectEntry({ title, description, url, colors }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
    const [typed, setTyped] = useState(false);

    useEffect(() => {
        if (inView) {
            const timeout = setTimeout(() => setTyped(true), 1500);
            return () => clearTimeout(timeout);
        }
    }, [inView]);

    return (
        <div ref={ref}>
            <p className={`${colors[0]} font-bold`}>
                {inView ? (
                    <Typewriter
                        words={[`console.log('Project: ${title}')`]}
                        typeSpeed={30}
                        onLoopDone={() => setTyped(true)}
                        cursor
                        cursorStyle="|"
                    />
                ) : (
                    `console.log('Project: ${title}')`
                )}
            </p>
            {typed ? (
                <>
                    <p className={colors[1]}>console.log('{description}')</p>
                    <p className={colors[2]}>
                        console.log(
                            <a 
                                href={url}
                                target="_blank"
                                rel="noonpener noreferrer"
                                className="underline hover:text-white"
                            >
                                'Live: {url}'
                            </a>
                            <span className='ml-2 text-white/60 animate-pulse text-xs'>&larr; CLICK HERE</span>
                        )
                    </p>
                </>
            ) : (
                <>
                    <p className='opacity-0'>console.log('{description}')</p>
                    <p className='opacity-0'>console.log('Live: {url}')</p>
                </>
            )}
        </div>
    );
}
