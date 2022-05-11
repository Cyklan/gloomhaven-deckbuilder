import { FC, ReactNode } from "react";

export const CardContainer: FC<{ children: ReactNode; }> = ({ children }) => {
  return <div className="grid w-screen max-h-screen overflow-y-auto grid-cols-2 lg:grid-cols-4 pb-32">
    {children}
  </div>;
};