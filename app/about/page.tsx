import Navbar from "@/components/navbar";
import NavigationButtons from "@/components/NavigationButtons";
import {
  FaGraduationCap,
  FaTools,
  FaServer,
  FaCode,
  FaCloud,
  FaDatabase,
  FaCogs,
  FaLanguage,
} from "react-icons/fa";
import AboutBackground from "@/components/Background/AboutBackground";

export default function About() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      <AboutBackground />
      <div className="relative z-10">
        <Navbar />
        <section className="py-16 px-6 md:px-20 text-white">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            About Me
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 mb-10 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-yellow-300 text-2xl" />
              <h3 className="text-2xl font-bold">Summary</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
              <li>
                Full stack engineer with{" "}
                <span className="font-semibold">7+ years of experience</span>{" "}
                building scalable web platforms and microservices for startups.
              </li>
              <li>
                Proven track record in{" "}
                <span className="font-semibold">
                  designing greenfield systems, leading teams, and shipping
                  real-time, data-driven applications
                </span>
                .
              </li>
              <li>
                Strong proficiency in{" "}
                <span className="font-semibold">
                  TypeScript, Node.js, React, and cloud-native architectures
                </span>{" "}
                (AWS, Docker, Kafka).
              </li>
              <li>
                Passionate about{" "}
                <span className="font-semibold">solving complex problems</span>{" "}
                in ambiguous environments with agile and responsible AI
                practices.
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-6">
              <FaTools className="text-green-300 text-2xl" />
              <h3 className="text-2xl font-bold">Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200 text-lg">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaCode className="text-pink-400" />
                  <strong>Languages:</strong>
                </div>
                <p>Typescript, Javascript (ES6+), Python, Go, Ruby, C#, SQL</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaDatabase className="text-purple-400" />
                  <strong>Databases:</strong>
                </div>
                <p>MongoDB, PostgreSQL, BynamoDB, Redis, Cassandra</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaCogs className="text-orange-400" />
                  <strong>Frontend:</strong>
                </div>
                <p>React, React Native, Redux, Tailwind, Next.js</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaCloud className="text-cyan-300" />
                  <strong>Cloud & DevOps:</strong>
                </div>
                <p>
                  AWS(API Gateway, ECS, Dynamo DB, MSK), Azure, Docker,
                  Kubernetes, CI/CD, Terraform, CloudFormation
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaServer className="text-blue-400" />
                  <strong>Backend:</strong>
                </div>
                <p>
                  Node.js (Express, Fastify, Nest.js), Ruby on Rails, Django,
                  FastAPI, Laravel
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaTools className="text-yellow-400" />
                  <strong>Tools:</strong>
                </div>
                <p>
                  Git, Slack API, Zoom SDK, Prometheus, Grafana, ELK Stack,
                  CloudWatch
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 mt-10 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-yellow-300 text-2xl" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <ul className="space-y-2 text-lg text-gray-200">
              <li>
                <strong>Bachelor's Degree</strong> in Computer Science &
                Mathematics - University of Arizona, May 2018
              </li>
              <li>
                <strong>Master's Degree</strong> in Computer Science - San
                Francisco Bay University
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 my-10 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaLanguage className="text-red-300 text-2xl" />
              <h3 className="text-2xl font-bold">Languages</h3>
            </div>
            <ul className="space-y-2 text-lg text-gray-200">
              <li>
                <strong>English</strong> : Native
              </li>
              <li>
                <strong>Mandarin</strong> : Native
              </li>
            </ul>
          </div>
        </section>
        <NavigationButtons currentPage="about" />
      </div>
    </main>
  );
}
