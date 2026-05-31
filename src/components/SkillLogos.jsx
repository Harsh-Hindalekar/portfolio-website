import React from "react";

export function SkillLogo({ name, className = "w-10 h-10" }) {
  const normName = name.toLowerCase().replace(/[^a-z0-9+]/g, "");

  switch (normName) {
    case "javascript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M18.8 17.5C18.4 18.5 17.5 19.1 16.2 19.1C14.7 19.1 13.7 18.1 13.7 15.8H15.5C15.5 17 16 17.6 16.8 17.6C17.5 17.6 17.9 17.2 17.9 16.6V10H19.7V16.6C19.7 17 19.6 17.3 18.8 17.5Z" fill="#323330" />
          <path d="M12.9 16.7C12.5 17.9 11.5 19.1 9.4 19.1C7.4 19.1 6.1 17.8 6.1 14.8H7.9C7.9 16.8 8.7 17.6 9.7 17.6C10.7 17.6 11.1 17 11.1 16.1C11.1 13.9 8.2 13.7 8.2 11.2C8.2 9.6 9.4 8.2 11.4 8.2C13.2 8.2 14.3 9.4 14.3 11H12.5C12.5 10.1 11.8 9.6 11 9.6C10.2 9.6 9.9 10.1 9.9 10.6C9.9 12.3 12.9 12.5 12.9 15.1V16.7Z" fill="#323330" />
        </svg>
      );
    
    case "python":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9 2C8.6 2 8.8 3.4 8.8 3.4L8.8 4.9H12.1V5.4H7.3C7.3 5.3 4.9 5.5 4.9 8.8C4.9 12.1 6.8 12 6.8 12H8.3V10.4C8.3 10.4 8.1 8.3 10.2 8.3H15.1V5H11.9V2ZM10.4 3.4C10.8 3.4 11.1 3.7 11.1 4.1C11.1 4.5 10.8 4.8 10.4 4.8C10 4.8 9.7 4.5 9.7 4.1C9.7 3.7 10 3.4 10.4 3.4Z" fill="#3776AB" />
          <path d="M12.1 22C15.4 22 15.2 20.6 15.2 20.6L15.2 19.1H11.9V18.6H16.7C16.7 18.7 19.1 18.5 19.1 15.2C19.1 11.9 17.2 12 17.2 12H15.7V13.6C15.7 13.6 15.9 15.7 13.8 15.7H8.9V19H12.1V22ZM13.6 20.6C13.2 20.6 12.9 20.3 12.9 19.9C12.9 19.5 13.2 19.2 13.6 19.2C14 19.2 14.3 19.5 14.3 19.9C14.3 20.3 14 20.6 13.6 20.6Z" fill="#FFD343" />
        </svg>
      );

    case "java":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 19C7.4 19.6 10.5 19.9 12.3 19.9C15.9 19.9 20.2 19 21.8 17.8C20 18.2 17 18.4 15.3 18.4C13.2 18.4 9.1 18 7.3 17.4C5.1 16.7 3.2 15.6 3.6 14.2C3.9 13.3 5.1 12.2 7 11.5L8.5 12C6.3 12.6 4.9 13.5 4.8 14.4C4.7 15.7 8.3 16.4 11.2 16.7C14.1 17 19.9 16.8 21.7 14.8C22.2 14.3 22.3 13.8 22.2 13.3C21.7 11.1 17.4 10.6 14.7 10C11 9.1 7.4 8.3 8.3 5.4C8.6 4.3 9.7 3.3 11.2 2.5L12.1 3.5C10.5 4.1 9.7 4.8 9.6 5.5C9.3 7 12 7.6 15 8.3C18.2 9 23.3 10.1 23.6 13.5C23.8 15.3 22 17.3 18.6 18.6L18 18.8C14.2 19.8 8.3 20.3 5.5 19Z" fill="#EA2D42" />
          <path d="M12.9 12.8C10.2 12.8 7.5 12.5 5.5 12.1C4.4 11.9 3.9 11.7 3.9 11.5C3.9 11 5.3 10.6 7.6 10.6H8.2L8.5 11.2C6 11.3 4.8 11.6 4.8 11.9C4.8 12.2 6.5 12.5 8.9 12.6M14 6C13.3 4.6 13.5 3 13.8 1.5C13.9 1 14.1 0.5 14.3 0L15.3 0.5C15 1 14.7 1.8 14.6 2.6C14.4 4 14.7 5.1 15.3 6.1L14 6ZM17 5.5C16.4 4.3 16.5 2.9 16.8 1.5C16.9 1 17.2 0.5 17.4 0L18.4 0.5C18.1 1 17.8 1.8 17.7 2.6C17.5 4 17.8 5 18.3 6L17 5.5Z" fill="#306088" />
        </svg>
      );

    case "mysql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9 2C8.3 2 4.4 3.7 4.4 5.9V18.1C4.4 20.3 8.3 22 11.9 22C15.5 22 19.4 20.3 19.4 18.1V5.9C19.4 3.7 15.5 2 11.9 2ZM17.6 5.9C17.6 6.8 15 7.7 11.9 7.7C8.8 7.7 6.2 6.8 6.2 5.9C6.2 5 8.8 4.1 11.9 4.1C15 4.1 17.6 5 17.6 5.9ZM17.6 12C17.6 12.9 15 13.8 11.9 13.8C8.8 13.8 6.2 12.9 6.2 12V8.5C7.7 9.4 9.8 9.9 11.9 9.9C14 9.9 16.1 9.4 17.6 8.5V12ZM17.6 18.1C17.6 19 15 19.9 11.9 19.9C8.8 19.9 6.2 19 6.2 18.1V14.6C7.7 15.5 9.8 16 11.9 16C14 16 16.1 15.5 17.6 14.6V18.1Z" fill="#00758F" />
        </svg>
      );

    case "c":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#A8B9CC" />
          <path d="M15.5 8.5C14.7 7.5 13.4 7 12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17C13.4 17 14.7 16.5 15.5 15.5" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "c++":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#00599C" />
          <path d="M12 9C11.4 8.4 10.5 8 9.5 8C7.6 8 6 9.6 6 11.5C6 13.4 7.6 15 9.5 15C10.5 15 11.4 14.6 12 14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.5 11.5H19.5M17 9V14M16.5 11.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "html":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 2L4.6 19.9L11.9 22L19.4 19.9L21 2H3Z" fill="#E34F26" />
          <path d="M12 3.7V20.2L17.7 18.6L19 4.3H12V3.7Z" fill="#EF652A" />
          <path d="M12 9.2H8.3L8.1 7.2H12V5.2H6L6.5 11.2H12V9.2Z" fill="#EBEBEB" />
          <path d="M12 14.1L9.7 13.5L9.6 11.8H7.6L7.9 15.3L12 16.4V14.1Z" fill="#EBEBEB" />
          <path d="M12 9.2H15.7L15.3 13.5L12 14.4V16.4L17.1 15C17.1 15 17.7 10 17.7 9.2H12V9.2Z" fill="#FFFFFF" />
          <path d="M12 5.2H18V7.2H12V5.2Z" fill="#FFFFFF" />
        </svg>
      );

    case "css":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 2L4.6 19.9L11.9 22L19.4 19.9L21 2H3Z" fill="#1572B6" />
          <path d="M12 3.7V20.2L17.7 18.6L19 4.3H12V3.7Z" fill="#33A9DC" />
          <path d="M12 11.2H7.9L7.7 9.2H12V7.2H5.6L6.1 13.2H12V11.2Z" fill="#EBEBEB" />
          <path d="M12 16.4L7.9 15.3L7.7 13.2H5.7L6.1 17.5L12 19L12.1 16.4" fill="#EBEBEB" />
          <path d="M12 9.2H17.7L17.9 7.2H12V5.2H19.9L19.5 13.2H12V11.2" fill="#FFFFFF" />
          <path d="M12 14.4L15.3 13.5L15.4 12.3H17.5L17.1 15.3L12 16.4V14.4Z" fill="#FFFFFF" />
        </svg>
      );

    case "reactjs":
    case "react":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <path d="M12 7.7C10.1 7.7 8.3 8.3 7 9.3C5.7 10.3 5 11.8 5 13.2C5 14.6 5.7 16.1 7 17.1C8.3 18.1 10.1 18.7 12 18.7C13.9 18.7 15.7 18.1 17 17.1C18.3 16.1 19 14.6 19 13.2C19 11.8 18.3 10.3 17 9.3C15.7 8.3 13.9 7.7 12 7.7ZM12 17.7C10.5 17.7 9 17.2 8.1 16.5C7 15.7 6.4 14.6 6.4 13.2C6.4 11.8 7 10.7 8.1 9.9C9.2 9.2 10.6 8.7 12 8.7C13.4 8.7 14.8 9.2 15.9 9.9C17 10.7 17.6 11.8 17.6 13.2C17.6 14.6 17 15.7 15.9 16.5C14.8 17.2 13.5 17.7 12 17.7Z" fill="#61DAFB" />
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20.4C7.4 20.4 3.6 16.6 3.6 12C3.6 7.4 7.4 3.6 12 3.6C16.6 3.6 20.4 7.4 20.4 12C20.4 16.6 16.6 20.4 12 20.4Z" fill="#1C2022" />
        </svg>
      );

    case "fastapi":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#05998D" />
          <path d="M12 4.5L6 14H10.5L9 20L18 9.5H13L16 4.5H12Z" fill="#FFFFFF" />
        </svg>
      );

    case "flask":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3H7.5V4.5H9V10L5.3 17.4C4.6 18.8 5.6 20.5 7.2 20.5H16.8C18.4 20.5 19.4 18.8 18.7 17.4L15 10V4.5H16.5V3ZM10.5 4.5H13.5V10H10.5V4.5ZM16.8 19H7.2L10 13.4H14L16.8 19Z" fill="#000000" />
        </svg>
      );

    case "tailwindcss":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6C8.5 6 6.5 8 6.5 11.5C6.5 15 8.5 17 12 17C15.5 17 17.5 15 17.5 11.5C17.5 8 15.5 6 12 6Z" fill="#06B6D4" opacity="0.4" />
          <path d="M6 14.5C3.8 14.5 2.5 15.8 2.5 18C2.5 20.2 3.8 21.5 6 21.5C8.2 21.5 9.5 20.2 9.5 18C9.5 15.8 8.2 14.5 6 14.5Z" fill="#06B6D4" />
          <path d="M18 2.5C15.8 2.5 14.5 3.8 14.5 6C14.5 8.2 15.8 9.5 18 9.5C20.2 9.5 21.5 8.2 21.5 6C21.5 3.8 20.2 2.5 18 2.5Z" fill="#06B6D4" />
        </svg>
      );

    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.867 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21.01V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.89 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.41 6.02 9.51 6.65 8.82C6.55 8.57 6.2 7.55 6.75 6.17C6.75 6.17 7.59 5.9 9.5 7.19C10.3 6.97 11.15 6.86 12 6.85C12.85 6.86 13.7 6.97 14.5 7.19C16.41 5.9 17.25 6.17 17.25 6.17C17.8 7.55 17.45 8.57 17.35 8.82C17.98 9.51 18.37 10.41 18.37 11.5C18.37 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21.01C14.5 21.28 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.477 17.522 2 12 2Z" fill="#181717" />
        </svg>
      );

    case "powerbi":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 1H15V23H19V1Z" fill="#F2C811" />
          <path d="M13 7H9V23H13V7Z" fill="#F2A104" opacity="0.85" />
          <path d="M7 13H3V23H7V13Z" fill="#F23005" opacity="0.7" />
        </svg>
      );

    case "excel":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#1D6F42" />
          <text x="12" y="17" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">X</text>
        </svg>
      );

    case "msword":
    case "word":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#2B579A" />
          <text x="12" y="17" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">W</text>
        </svg>
      );

    case "canva":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#00C4CC" />
          <text x="11.5" y="16.5" fill="white" fontSize="14" fontStyle="italic" fontWeight="bold" textAnchor="middle">C</text>
        </svg>
      );

    case "dsa":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="12" r="3" fill="#6366F1" />
          <circle cx="19" cy="6" r="3" fill="#10B981" />
          <circle cx="19" cy="18" r="3" fill="#EC4899" />
          <path d="M8 12L16 7M8 12L16 17" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="2" />
        </svg>
      );

    case "oops":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#3B82F6" strokeWidth="2" fill="none" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#10B981" strokeWidth="2" fill="none" />
          <circle cx="12" cy="17" r="4" stroke="#F59E0B" strokeWidth="2" fill="none" />
          <path d="M10 6.5H14" stroke="#D1D5DB" strokeWidth="2" />
        </svg>
      );

    default:
      // A fallback clean monogram with initials
      const label = name.slice(0, 2).toUpperCase();
      return (
        <div className="flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full font-mono font-bold text-sm tracking-wide shadow-sm" style={{ width: "100%", height: "100%", aspectRatio: "1/1" }}>
          {label}
        </div>
      );
  }
}
