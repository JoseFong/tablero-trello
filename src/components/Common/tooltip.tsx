"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";

function ToolTip({ children, message }: { children: any; message: string }) {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  function handleMouseEnter(e: React.MouseEvent) {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setCoords({
      x: rect.left + rect.width / 2,
      y: rect.bottom,
    });
    setShow(true);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={() => setShow(false)}>
      {children}
      {show &&
        coords &&
        createPortal(
          <div
            className="absolute bg-black text-white text-sm px-2 py-1 rounded whitespace-nowrap z-[9999]"
            style={{
              position: "fixed",
              top: coords.y + 8,
              left: coords.x,
              transform: "translateX(-50%)",
            }}
          >
            {message}
          </div>,
          document.body
        )}
    </div>
  );
}

export default ToolTip;
