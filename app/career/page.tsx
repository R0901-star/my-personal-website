import Navbar from "@/components/navbar";
import NavigationButtons from "@/components/NavigationButtons";
import CareerBackground from "@/components/Background/CareerBackground";

export default function Career() {
  const experiences = [
    {
      role: "Senior AI Full Stack Engineer",
      company: "Creatify AI",
      period: "06/2024 - 07/2025",
      description:
        "Built AI-powered tools that made creating video ads much faster by combining microservices, React dashboards, and custom CV/NLP models.",
    },
    {
      role: "Senior Software Engineer",
      company: "HeySam AI",
      period: "08/2023 - 06/2024",
      description:
        "Led major product overhauls and built scalable systems and AI tools that improved performance, automation, and user experience.",
    },
    {
      role: "Founding Engineer",
      company: "WiFrost Inc,",
      period: "07/2021 - 07/2023",
      description:
        "Led the backend and infrastructure work for B2B SaaS platforms, making them faster, more reliable, and easier to maintain.",
    },
    {
      role: "Full Stack Software Engineer",
      company: "Adaptrum Inc,",
      period: "06/2018 - 07/2021",
      description:
        "Built tools and platforms that improved spectrum management and device usability by modernizing backend systems and automating key processes.",
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white">
      <CareerBackground />
      <Navbar />
      <div className="relative z-10 ">
        <h1 className="text-5xl font-bold my-8 text-center text-amber-100">
          Career
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white/20 max-w-4xl w-full p-6 rounded-xl shadow-lg hover:scale-105 transform transition"
            >
              <h2 className="text-2xl font-semibold mb-1 text-fuchsia-200">
                {exp.role}
              </h2>
              <h3 className="text-lg mb-2">{exp.company}</h3>
              <h3 className="text-lg mb-2">{exp.period}</h3>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-5xl font-bold mt-15 text-center text-amber-100">
          Projects
        </h1>
        <div className="mt-10 flex flex-col gap-12 max-w-3xl mx-auto">
          <div className="bg-white/10 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-fuchsia-200 mb-4 text-center">
              At Creatify AI
            </h2>
            <div className="leading-relaxed space-y-2">
              I built a video ad platform that cut production time from hours to
              minutes. The system used Rails and Node microservices, React
              dashboards, and AI models for auto-formatting TikTok, Reels, and
              YouTube videos. I designed the APIs and made reusable React parts,
              which helped 30% of enterprise users adopt the product in the
              first quarter.
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-fuchsia-200 mb-4 text-center">
              At HeySam AI
            </h2>
            <div className="leading-relaxed space-y-2">
              I led the project to create a meeting bot that worked with Zoom,
              Google Meet, and Google Calendar. The bot could join calls, manage
              schedules, and give smart reminders. It became a key feature in
              the platform and reduced manual scheduling for users by a large
              margin.
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-fuchsia-200 mb-4 text-center">
              At WiFrost Inc,
            </h2>
            <div className="leading-relaxed space-y-2">
              I led the build of a cloud SaaS platform with a serverless design
              on AWS. It used API Gateway, EKS, and DynamoDB to scale for
              business clients. I also added “Channel AI,” a tool that picked
              the best channels using RF and geo data, which became a core
              selling point for the company.
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-lg mb-4">
            <h2 className="text-2xl font-bold text-fuchsia-200 mb-4 text-center">
              At Adaptrum Inc,
            </h2>
            <div className="leading-relaxed space-y-2">
              I built a proxy system that connected to more than 20 TVWS
              databases. The system checked spectrum availability in real time
              and improved network speed and stability. This project helped the
              company show that dynamic spectrum use was possible and reliable.
            </div>
          </div>
        </div>
      </div>
      <NavigationButtons currentPage="career" />
    </main>
  );
}
