"use client";
import { MdCheck } from "react-icons/md";

interface ButtonProps {
  type: "label" | "full" | "default" | "flex";
  title: string;
  value?: boolean;
  onClick: () => void;
}

const Button = ({ type, title, value, onClick }: ButtonProps) => {
  const btnClassType = () => {
    switch (type) {
      case "label":
        return `border-solid border border-border px-3 py-1 rounded-lg ${value ? "bg-semiPrimary border-semiPrimary" : "bg-layOutBg"} w-fit`;
      case "default":
        return "rounded-xl bg-primary p-5 min-w-20";
      case "full":
        return "rounded-xl bg-primary p-5 min-w-20 w-full";
      case "flex":
        return "rounded-xl bg-primary p-5 min-w-20 flex-1";
    }
  };

  const btnTextClassType = () => {
    switch (type) {
      case "label":
        return ``;
      case "default":
        return "text-white text-lg";
      case "full":
        return "text-white text-lg";
      case "flex":
        return "text-white text-lg";
    }
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <button className={btnClassType()} onClick={handleClick}>
      {value ? (
        <div className="flex items-center gap-2">
          <MdCheck />
          <span className={btnTextClassType()}>{title}</span>
        </div>
      ) : (
        <span className={btnTextClassType()}>{title}</span>
      )}
    </button>
  );
};

export default Button;