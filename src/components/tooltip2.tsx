"use ";
import React, { useState } from "react";

function ToolTipDos({ children, message }: { children: any; message: string }) {
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
        <div className="bg-black p-2 rounded-xl shadow-xl text-sm text-white absolute text-nowrap left-1/2 -translate-x-1/2 mt-1">
          {message}
        </div>
      )}
    </div>
  );
}

export default ToolTipDos;
