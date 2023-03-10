import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import jordanai from "../../public/jordan-rose-ai.jpg";

export default function Introductions() {
    return (
        <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons dark:text-white">Developed By: Jordan Rose</h1>
              <ul className="flex items-center">
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:text-white" /></li>
                <li>
                  <a className="bg-gradient-to-r from-blue-500 to-blue-300 text-white px-4 py-2 rounded-md ml-8" href="https://www.linkedin.com/in/jordan-rose-589a3166/" target="_blank">Resume</a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-blue-400 font-medium md:text-6xl">Jordan Rose</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Software Founder | Software Engineer</h3>
              <p className="text-lg py-5 leading-8 text-gray-800 md:text-2xl max-w-xl mx-auto dark:text-white">
                As a highly motivated and detail-oriented individual, I have a proven track record of success in both my business and technical pursuits. I pride myself on solid communication and problem-solving skills, and I strive to continuously improving.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-32 py-3 text-gray-600 dark:text-white">
                <a href="https://www.linkedin.com/in/jordan-rose-589a3166/" target="_blank">
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/jrose8775" target="_blank">
                  <AiFillGithub />
                </a>
            </div>
            <div className="relative mx-auto w-80 h-80 mt-20 mb-20 overflow-hidden md:h-96 md:w-96">
              <Image className="rounded-full" src={jordanai} alt="" />
            </div>
            <div className="text-center p-10">
                <h3 className="text-xl py-2 md:text-xl dark:text-white max-w-2xl mx-auto"><u>Professional &amp; Personal Interests:</u></h3>
                <h3 className="text-xl py-2 md:text-xl dark:text-white max-w-2xl mx-auto">Product Management, Tech Sales, Sales Engineering, Cloud, Data, QA &amp; Technical Consulting</h3>
                <h3 className="text-lg py-2 md:text-lg dark:text-white">Personal Interests: Hiking, Kayaking, Swimming, Biking &amp; Personal Finance/Real Estate</h3>
            </div>
        </section>
    );
}