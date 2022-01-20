import * as React from "react";
interface Props {
  children: string;
}

export const Button = ({ children }: Props) => {
  return (
    <button className="px-6 py-3 bg-emerald-600 text-white">{children}</button>
  );
};
