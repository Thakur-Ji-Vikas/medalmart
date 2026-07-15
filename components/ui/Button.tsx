import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        rounded-xl
        bg-amber-600
        px-6
        py-3
        font-semibold
        text-white
        transition
        hover:bg-amber-700
        disabled:cursor-not-allowed
        disabled:bg-gray-300
        disabled:text-gray-500
        ${className}
      `}
    >
      {children}
    </button>
  );
}