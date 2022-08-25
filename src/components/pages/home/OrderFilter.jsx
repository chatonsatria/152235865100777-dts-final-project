import { useState } from "react";

const OrderFilter = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [platformText, setPlatformText] = useState("Order by:");
  const [platformId, setPlatformId] = useState(null);

  const platformChangeHandler = (id, text, slug) => {
    setDropdownOpen(false);
    setPlatformId(id);
    setPlatformText(text);
    props.orderSlug(slug);
  };

  return (
    <div className="relative inline-flex w-full md:max-w-[200px] gap-x-4">
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={`inline-flex justify-between px-4 py-1.5 w-full rounded-md border-2 items-center transition-all ${
          platformId === null ? "text-white" : "text-black bg-white"
        }`}
      >
        <p className="text-base font-semibold">{platformText}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {/* dropdown */}
      {dropdownOpen && (
        <div className="absolute z-[102] flex flex-col gap-y-3 bg-white p-4 w-full text-black rounded-md">
          <button
            onClick={() => platformChangeHandler(1, "Added", "added")}
            className="text-left font-medium text-sm"
          >
            Date Added
          </button>
          <button
            onClick={() => platformChangeHandler(2, "Name", "name")}
            className="text-left font-medium text-sm"
          >
            Name
          </button>
          <button
            onClick={() => platformChangeHandler(3, "Released", "released")}
            className="text-left font-medium text-sm"
          >
            Released
          </button>
          <button
            onClick={() => platformChangeHandler(4, "Average Rating", "rating")}
            className="text-left font-medium text-sm"
          >
            Average Rating
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderFilter;
