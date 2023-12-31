import { useContext } from "react";
import { GlobalStateContext } from "../../context/globalStateContext";

export function Exit({}) {

  const { mostrar, setMostrar } = useContext(GlobalStateContext)

  const handleClick = () => {
    setMostrar(!mostrar)
  };
  
  return (
    <button onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
