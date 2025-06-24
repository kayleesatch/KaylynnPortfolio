import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section 
            id="contact" 
            className="relative py-20 pb-36 px-4 sm:px-6 md:px-12 bg-dark text-white text-center">

            <div
                className="absolute bottom-0 left-0 w-full h-36 opacity-30 z-0 animate-pulseGlow pointer-events-none"
                style={{
                    backgroundImage: 'url("/images/circuitBoardBg.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    clipPath: 'polygon(0% 0%, 100% 85%, 0% 100%)',
                }}
            ></div>

            <div className="relative z-10 max-w-xl mx-auto p-6 sm:p-8 rounded-3xl border border-white/40 drop-shadow-blue bg-[#0d0d0d] backdrop-blur-md shadow-2xl">
                <h2 className="text-4xl font-bold mb-6 drop-shadow-blue">Let's Connect</h2>

                <p className="text-base sm:text-lg text-white mb-6">
                    Got a project, idea, or opportunity? I'd love to hear from you.
                </p>

                <a 
                    href="mailto:kayleesatch@gmail.com"
                    className="inline-block w-full max-w-xs mx-auto px-4 sm:px-6 py-3 rounded-md font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 drop-shadow-md"
                >
                    kayleesatch@gmail.com
                </a>

                <div className="flex justify-center gap-6 mt-8 text-3xl flex-wrap">
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