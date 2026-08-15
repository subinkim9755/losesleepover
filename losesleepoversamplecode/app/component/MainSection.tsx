import React from "react";

function MainSection(props: { children: React.ReactNode }) {
  return (
    <div className="flex h-[500px] w-40 flex-col items-center justify-center border-2 border-black bg-white py-2">
      {props.children}
    </div>
  );
}

export default MainSection;
