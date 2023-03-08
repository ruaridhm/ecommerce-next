import { cva } from "class-variance-authority";
import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

const button = cva("rounded-lg uppercase border-2 m-1 ", {
  variants: {
    variant: {
      primary:
        "bg-indigo-400 border-indigo-400 hover:bg-indigo-500 hover:border-indigo-500 text-white",
      secondary:
        "bg-fuchsia-400 border-fuchsia-400 hover:bg-fuchsia-500 hover:border-fuchsia-500 text-white",
      accent:
        "bg-teal-400 border-teal-400 hover:bg-teal-500 hover:border-teal-500 text-white",

      ghost:
        "bg-transparent border-transparent hover:bg-transparent/10 hover:border-transparent/10 text-slate-600",

      info: "bg-cyan-400 border-cyan-400 hover:bg-cyan-500 hover:border-cyan-500",
      warning:
        "bg-amber-400 border-amber-400 hover:bg-amber-500 hover:border-amber-500",
      success:
        "bg-lime-400 border-lime-400 hover:bg-lime-500 hover:border-lime-500",
      error:
        "bg-rose-400 border-rose-400 hover:bg-rose-500 hover:border-rose-500",
    },
    outlined: {
      true: "bg-transparent text-amber-400 font-semibold hover:bg-amber-400 hover:text-black",
    },
    size: {
      tiny: "h-6 px-2 text-xs min-h-4",
      small: "h-8 px-3 text-sm min-h-8",
      medium: "h-12 px-4 text-base min-h-12",
      large: "h-16 px-6 text-lg min-h-16",
    },
    responsive: {
      true: "",
    },
    wide: {
      true: "",
    },
    disabled: {
      true: "pointer-events-none border-opacity-0 bg-opacity-80 text-opacity-80 select-none",
    },
  },
  compoundVariants: [
    {
      disabled: true,
      variant: "primary",
      className: "",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

interface VariantProps {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "info"
    | "warning"
    | "success"
    | "error";
  outlined?: boolean;
  size?: "tiny" | "small" | "medium" | "large";
  responsive?: boolean;
  wide?: boolean;
  disabled?: boolean;
}

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps {
  children: React.ReactNode;
  loading?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  variant = "primary",
  outlined = false,
  size = "medium",
  responsive = false,
  wide = false,
  disabled = false,
  loading = false,
  onClick,
}: ButtonProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={button({
        variant,
        outlined,
        size,
        responsive,
        wide,
        disabled,
      })}
      disabled={disabled}
      onClick={handleClick}
    >
      <span
        className={classNames(
          "leading-[1.25rem]",
          loading && "text-transparent"
        )}
      >
        {children}
      </span>
      {loading && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-4 h-4">
          <svg
            className="animate-spin"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current"
              d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
            ></path>
          </svg>
          <span className="sr-only">Loading</span>
        </span>
      )}
    </button>
  );
};

export default Button;
