"use client";
import React, { useEffect, useRef, useState } from "react";

function ContextMenu({ children, content }: { children: any; content: any }) {
  const initialContextMenu = {
    show: false,
    x: 0,
    y: 0,
  };

  const contextMenuRef = useRef<any>(null);

  const [contextMenu, setContextMenu] = useState(initialContextMenu);

  function handleContextMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    setContextMenu({ show: true, x: e.pageX, y: e.pageY });
  }

  function closeContextMenu() {
    setContextMenu(initialContextMenu);
  }

  function handleClickOutside(e: MouseEvent) {
    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
      closeContextMenu();
    }
  }

  useEffect(() => {
    if (contextMenu.show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contextMenu.show]);

  return (
    <div>
      <div onContextMenu={handleContextMenu}>{children}</div>
      {contextMenu.show && (
        <div
          ref={contextMenuRef}
          className="absolute bg-black text-white rounded-xl py-1 px-2"
          style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default ContextMenu;
