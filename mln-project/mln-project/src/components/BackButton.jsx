import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // lightweight icon library

const BackButton = ({ to = -1, className = "" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      aria-label="Go back"
      className={`flex items-center justify-center w-10 h-10 
        rounded-full border border-gray-300 
        hover:bg-gray-100 active:scale-95 
        transition-all duration-200 ${className}`}
    >
      <ArrowLeft className="w-5 h-5 text-gray-700" />
    </button>
  );
};

export default BackButton;