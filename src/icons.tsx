const Icons = {
  ChevronLeft: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-foreground mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  ),
  CheckMark: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
  ProgressCircle: ({ progress }: { progress: number }) => (
    <svg
      className="w-full h-full transform rotate-[-90deg]"
      viewBox="0 0 130 130"
    >
      <circle
        cx="65"
        cy="65"
        r="60"
        stroke="currentColor"
        strokeWidth="7"
        className="text-foreground"
        fill="none"
      />
      <circle
        cx="65"
        cy="65"
        r="60"
        stroke="currentColor"
        strokeWidth="7"
        className="text-primary transition-all duration-300"
        fill="none"
        strokeDasharray="377"
        strokeDashoffset={377 - (377 * progress) / 100}
        style={{
          transition: "stroke-dashoffset 0.5s ease-out, stroke 0.5s ease-out",
        }}
      />
    </svg>
  ),
};

export default Icons;
