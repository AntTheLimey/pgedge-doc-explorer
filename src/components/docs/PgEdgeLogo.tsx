export function PgEdgeLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized database/edge logo */}
      <circle cx="16" cy="16" r="14" className="fill-primary" />
      <path
        d="M16 6C10.48 6 6 8.24 6 11V21C6 23.76 10.48 26 16 26C21.52 26 26 23.76 26 21V11C26 8.24 21.52 6 16 6ZM16 8C20.42 8 24 9.79 24 11C24 12.21 20.42 14 16 14C11.58 14 8 12.21 8 11C8 9.79 11.58 8 16 8ZM24 21C24 22.21 20.42 24 16 24C11.58 24 8 22.21 8 21V18.39C10.06 19.4 12.92 20 16 20C19.08 20 21.94 19.4 24 18.39V21ZM24 15.5C21.94 16.61 19.08 17.5 16 17.5C12.92 17.5 10.06 16.61 8 15.5V13.39C10.06 14.4 12.92 15 16 15C19.08 15 21.94 14.4 24 13.39V15.5Z"
        className="fill-primary-foreground"
      />
      {/* pgEdge text */}
      <text
        x="38"
        y="22"
        className="fill-foreground"
        style={{ fontSize: "16px", fontWeight: 600, fontFamily: "IBM Plex Sans" }}
      >
        pgEdge
      </text>
    </svg>
  );
}
