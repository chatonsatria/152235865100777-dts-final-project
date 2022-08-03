import { useEffect, useState } from "react";
import useGet from "../../../hooks/useGet";

const PlatformFilter = (props) => {
  const { data, get } = useGet("platforms/lists/parents");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [platformText, setPlatformText] = useState("Platform:");
  const [platformId, setPlatformId] = useState(null);

  const platformChangeHandler = (id, text) => {
    setDropdownOpen(false);
    setPlatformId(id);
    setPlatformText(text);
    props.platformId(id);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="relative inline-flex w-full md:max-w-[200px] gap-x-4">
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={`inline-flex justify-between px-4 py-1.5 w-full rounded-md border-2 items-center transition-all ${
          platformId === null ? "text-white" : "text-black bg-white"
        }`}
      >
        <p className="text-sm font-semibold">{platformText}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* dropdown */}
      {dropdownOpen && (
        <div className="absolute z-[102] flex flex-col gap-y-3 bg-white p-4 w-full text-black rounded-md">
          {data.feedback ? (
            <>
              {data.feedback.results.map((data) => (
                <button
                  onClick={() => platformChangeHandler(data.id, data.name)}
                  className="text-left font-medium text-sm"
                >
                  {data.name}
                </button>
              ))}
            </>
          ) : (
            <button>-</button>
          )}
        </div>
      )}
    </div>
  );
};

export default PlatformFilter;
