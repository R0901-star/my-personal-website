import Navbar from "@/components/navbar";
import NavigationButtons from "@/components/NavigationButtons";
import ContactBackground from "@/components/Background/ContactBackground";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <ContactBackground />
      <Navbar />
      <div className="relative z-10">
        <h1 className="text-center text-5xl font-bold mb-8 text-red-200">
          Contact Me
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto my-6">
          <div className="bg-white/20 max-w-4xl w-full p-10 rounded-xl shadow-lg hover:scale-105 transform transition">
            <div className="flex items-center gap-3">
              <MdEmail className="text-3xl" />
              <h2 className="font-semibold text-2xl">Email Address</h2>
            </div>
            <p className="text-pink-800 text-lg pt-2">tao.chen.dev@gmail.com</p>
          </div>
          <div className="bg-white/20 max-w-6xl w-full p-10 rounded-xl shadow-lg hover:scale-105 transform transition">
            <div className="flex items-center gap-3">
              <MdPhone className="text-3xl " />
              <h2 className="font-semibold text-2xl">Phone Number</h2>
            </div>
            <p className="text-pink-800 text-lg pt-2">(+1) 909 259 3010</p>
          </div>
          <div className="bg-white/20 max-w-6xl w-full p-10 rounded-xl shadow-lg hover:scale-105 transform transition">
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-3xl " />
              <h2 className="font-semibold text-2xl">LinkedIn</h2>
            </div>
            <p className="text-pink-800 text-lg pt-2">
              https://www.linkedin.com/in/terrytaochen
            </p>
          </div>
          <div className="bg-white/20 max-w-6xl w-full p-10 rounded-xl shadow-lg hover:scale-105 transform transition">
            <div className="flex items-center gap-3">
              <FaGithub className="text-3xl " />
              <h2 className="font-semibold text-2xl">Github</h2>
            </div>
            <p className="text-pink-800 text-lg pt-2">
              https://github.com/0xvgd
            </p>
          </div>
        </div>
      </div>
      <NavigationButtons currentPage="contact" />
    </main>
  );
}
