import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function DeveloperProfile() {
  return (
    <section className="bg-gradient-to-r from-[#00988d] to-[#2c4974] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="https://storage.rxresu.me/clp9ftol70hhi9hunoe1r4lsh/pictures/c6pwiwa0urxiixjxvckfbawh.jpg"
            alt="Developer Profile"
            width={400}
            height={400}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Gabriel Alfau Laracuente</h1>
          <div className="text-xl mb-6">
            <p className="pb-2 text-2xl font-semibold">
              Front End Developer. | 4+ Years of Experience.
            </p>
            <p>
              Experienced in developing scalable, high-performance applications
              using ReactJS, ReactNative, Node.js, and TypeScript. Proficient in
              front-end and essential knowledge in back-end development,
              including state management, API integrations, and database
              interactions. Skilled in version control with Git and GitHub.
            </p>
            <p className="mt-3">Let’s create something amazing! 🚀</p>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <Link
              href="https://github.com/Galfaulara/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gabriel-alfau-4148469a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
          <Link
            href="https://storage.rxresu.me/clp9ftol70hhi9hunoe1r4lsh/resumes/gabriel-alfau-laracuente-copy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
