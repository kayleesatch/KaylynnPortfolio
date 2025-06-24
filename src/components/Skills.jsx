import { useEffect, useRef } from "react";
import { FaHtml5, FaBolt, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiAxios, SiFirebase, SiAppwrite } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: 'drop-shadow-red', bg: 'hover:bg-red-500' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'drop-shadow-orange', bg: 'hover:bg-blue-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'drop-shadow-yellow', bg: 'hover:bg-yellow-500' },
    { name: 'React', icon: <FaReact />, color: 'drop-shadow-green', bg: 'hover:bg-blue-500' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'drop-shadow-blue', bg: 'hover:bg-blue-500' },
    { name: 'GSAP', icon: <FaBolt />, color: 'drop-shadow-purple', bg: 'hover:bg-green-500' },
    { name: 'Axios', icon: <SiAxios />, color: 'drop-shadow-red', bg: 'hover:bg-purple-500' },
    { name: 'Github', icon: <FaGithub />, color: 'drop-shadow-orange', bg: 'hover:bg-red-500' },
    { name: 'Appwrite', icon: <SiAppwrite />, color: 'drop-shadow-yellow', bg: 'hover:bg-red-500' },
    { name: 'Figma', icon: <FaFigma />, color: 'drop-shadow-green', bg: 'hover:bg-purple-500' },
    { name: 'Firebase', icon: <SiFirebase />, color: 'drop-shadow-blue', bg: 'hover:bg-orange-500' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'drop-shadow-purple', bg: 'hover:bg-green-500' },
];

export default function Skills() {
    const skillsRefs = useRef([]);

    useEffect(() => {
        skillsRefs.current.forEach((el, i) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50, x: i % 2 === 0 ? -50 : 50 },
                    {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <section className="relative py-20 px-4 bg-dark-bg text-white overflow-hidden">
            <div 
                className="absolute bottom-0 right-0 w-[30rem] h-[30rem] opacity-30 z-0 animate-pulseGlow"
                style={{
                    backgroundImage: 'url("/images/circuitBoardBg.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
                }}
            ></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 drop-shadow-red">Skills</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, i) => (
                        <div
                            key={skill.name}
                            ref={(el) => (skillsRefs.current[i] = el)}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl bg-[#0d0d0d] bg-opacity-80 ${skill.color} ${skill.bg} transition-colors duration-300 ease-out cursor-pointer`}
                        >
                            <div className="text-4xl mb-2">{skill.icon}</div>
                            <p className="text-sm font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}