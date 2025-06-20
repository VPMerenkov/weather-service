import React from "react";

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14.954 14.946 21 21m-4-11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>
  );
};

export default SearchIcon;
