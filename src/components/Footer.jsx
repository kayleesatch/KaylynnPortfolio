import {FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className='bg-[#0d0d0d] text-white py-6 text-center text-sm'>
            <div className='flex flex-col items-center gap-3'>

                <img 
                    src="/images/1.png" 
                    alt="K S Logo"
                    className='w-10 h-10 opacity-80'
                />

                <p className='text-white/60'>
                    Made with <span className='text-orange-500'>🧡</span> by Kaylynn Satchell 
                </p>

                <div className='flex gap-4 mt-2 text-lg'>
                    <a 
                        href="mailto:kayleesatch@gmail.com"
                        className='text-white hover:text-orange-500 transition'
                    >
                        <FaEnvelope />
                    </a>

                    <a 
                        href="https://github.com/kayleesatch"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='text-white hover:text-red-500 transition'
                    >
                        <FaGithub />
                    </a>

                    <a 
                        href="https://linkin.com/in/kaylynn-satchell-04a79a315"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='text-white hover:text-yellow-500 transition'    
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
}