import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 px-24 bg-dark-bg text-white text-center overflow-hidden">

            <div
                className="absolute top-80 left-0 w-full h-36 opacity-30 z-0 animate-pulseGlow"
                style={{
                    backgroundImage: 'url("/images/circuitBoardBg.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    clipPath: 'polygon(0% 0%, 100% 85%, 0% 100%)',
                }}
            ></div>

            <div className="relative z-10 max-w-xl mx-auto p-8 rounded-3xl border border-white/40 drop-shadow-blue bg-[#0d0d0d] backdrop-blur-md shadow-2xl">
                <h2 className="text-4xl font-bold mb-6 drop-shadow-blue">Let's Connect</h2>

                <p className="text-lg text-white mb-6">
                    Got a project, idea, or opportunity? I'd love to hear from you.
                </p>

                <a 
                    href="mailto:kayleesatch@gmail.com"
                    className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 drop-shadow-md"
                >
                    kayleesatch@gmail.com
                </a>

                <div className="flex justify-center gap-6 mt-8 text-3xl">
                    <a 
                        href="https://github.com/kayleesatch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-500 transition drop-shadow-red"
                    >
                        <FaGithub />
                    </a>

                    <a 
                        href="https://linkedin.com/in/kaylynn-satchell-04a79a315"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500 transition drop-shadow-blue"    
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    )
}