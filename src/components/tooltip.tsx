"use client";
import React, { useState } from "react";

function ToolTip({ children, message }: { children: any; message: string }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      {show && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm px-2 py-1 rounded whitespace-nowrap">
          {message}
        </div>
      )}
    </div>
  );
}

export default ToolTip;
