import * as React from "react";
interface Props {
  children: string;
}

export const Button = ({ children }: Props) => {
  return (
    <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-white rounded-md">
      {children}
    </button>
  );
};
