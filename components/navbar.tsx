import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const pages = [
    { name: "About", icon: "/icons/about.png" },
    { name: "Career", icon: "/icons/career.png" },
    { name: "Contact", icon: "/icons/contact.png" },
    { name: "Resume", icon: "/icons/resume.png" },
  ];

  return (
    <nav className="fixed top-4 right-4 bg-white/30 backdrop-blur-md p-3 rounded-lg shadow-lg z-50">
      <ul className="flex space-x-6 items-center">
        <Link
          href="/"
          className="flex flex-col items-center font-semibold hover:text-blue-500 hover:scale-110 transition-colors"
        >
          <div className="flex flex-col items-center">
            <Image src="/icons/home.png" alt="Home icon" className="w-6 h-6" />
            <span>Home</span>
          </div>
        </Link>
        {pages.map((page) => (
          <li key={page.name}>
            <Link
              href={`/${page.name.toLowerCase()}`}
              className="flex flex-col items-center font-semibold hover:text-blue-500 hover:scale-110 transition-colors"
            >
              <Image
                src={page.icon}
                alt={`${page.name}icon`}
                className="w-6 h-6"
              />
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
