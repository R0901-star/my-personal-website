import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const pageOrder = ["home", "about", "career", "contact", "resume"];

interface Props {
  currentPage: string;
}

const NavigationButtons = ({ currentPage }: Props) => {
  const currentIndex = pageOrder.indexOf(currentPage.toLowerCase());
  const prevPage = pageOrder[currentIndex - 1];
  const nextPage = pageOrder[currentIndex + 1];

  return (
    <div className="fixed bottom-6 right-6 flex gap-4">
      {prevPage && (
        <Link
          href={prevPage === "home" ? "/" : `/${prevPage}`}
          className="w-36 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white 
          bg-gradient-to-r from-indigo-600 to-purple-500 shadow-md hover:shadow-xl hover:scale-105 
          active:scale-95 transition-all duration-300 ease-in-out"
        >
          <FaArrowLeft size={20} />
          Previous
        </Link>
      )}
      {nextPage && (
        <Link
          href={nextPage === "home" ? "/" : `/${nextPage}`}
          className=" w-36 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white 
          bg-gradient-to-r from-indigo-600 to-purple-500 shadow-md hover:shadow-xl hover:scale-105 
          active:scale-95 transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center">
            <span className="mx-5 text-base">Next</span>
            <FaArrowRight size={20} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default NavigationButtons;
