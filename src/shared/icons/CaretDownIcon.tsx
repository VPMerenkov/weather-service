const CaretDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" {...props}>
      <path
        fill="currentColor"
        d="m13.354 6.354-5 5a.5.5 0 0 1-.707 0l-5-5a.5.5 0 1 1 .707-.707L8 10.293l4.646-4.646a.5.5 0 0 1 .708.707Z"
      />
    </svg>
  );
};

export default CaretDownIcon;
