import { useEffect, useRef } from "react";
import gsap from "gsap";

const shadows = [
  { name: "red", shadow: "drop-shadow-[0_0_8px_#ff4c4c]" },
  { name: "orange", shadow: "drop-shadow-[0_0_8px_#ff9900]" },   
  { name: "yellow", shadow: "drop-shadow-[0_0_8px_#ffff33]" },   
  { name: "green", shadow: "drop-shadow-[0_0_8px_#33ff99]" },  
  { name: "blue", shadow: "drop-shadow-[0_0_8px_#33ccff]" }, 
  { name: "purple", shadow: "drop-shadow-[0_0_8px_#cc66ff]" },   
];

const Hello = () => {
    const lettersRef = useRef([]);

    useEffect(() => {
        lettersRef.current.forEach((el, i) => {
            gsap.to(el, {
                y: -5,
                repeat: -1,
                yoyo: true,
                ease: "power1,inOut",
                delay: i * 0.1,
                duration: 0.6,
            });
        });
    }, []);

    const letters = "HELLO!".split("");

    return (
        <section className="relative pt-24 text-center transition-colors bg-dark-bg overflow-hidden">
            
            <div
                className="absolute top-0 left-0 w-full h-52 bg-no-repeat bg-cover opacity-30 z-10 animate-pulseGlow"
                style={{
                    backgroundImage: "url('/images/circuitBoardBg.png')",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 90%, 0% 70%)",
                }}
            ></div>

            <div className="relative z-10 text-8xl font-bold space-x-2">
                {letters.map((letter, index) => {
                    const { shadow, name } = shadows[index % shadows.length];
                    return (
                    <span
                    key={index}
                    ref={(el) => (lettersRef.current[index] = el)}
                    className={`inline-block text-white ${shadow}`}
                    data-shadow-color={name}
                    >
                        {letter}
                    </span>
                    );
                })}
            </div>

            <div className="relative z-10 mt-6 max-w-xl mx-auto px-4">
                <p className="text-lg text-white/80 leading-relaxed">
                    <span className="drop-shadow-orange font-semibold text-5xl">
                        Kaylynn Satchell
                    </span>
                </p>
                <p className="mt-4 text-base text-white/60">
                    "People-focused. Detail-driven. Tech-ready."
                </p>
            </div>
        </section>
    );
};

export default Hello;