import React from "react";

function MainSection(props: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-1/2 flex-col items-center justify-center bg-white">
      {props.children}
    </div>
  );
}

export default MainSection;
