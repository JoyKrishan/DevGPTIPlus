  const [hoveredNumber, setHoveredNumber] = useState(-1);
                onMouseOver={() => setHoveredNumber(number)}
                onMouseLeave={() => setHoveredNumber(-1)}
                  "bg-survey-bg text-heading relative h-10 flex-1 cursor-pointer border text-center text-sm leading-10 first:rounded-l-md last:rounded-r-md focus:outline-none",
                  hoveredNumber === number ? "bg-accent-bg" : ""