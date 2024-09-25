const Icons: { [key: string]: React.FC<any> } = {
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
  CheckMark: () => (
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
  GreenCheckmark: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  DownloadIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
};

export default Icons;
