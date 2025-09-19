import React from "react";

function Modal({ setOpen, children }: { setOpen: any; children: any }) {
  return (
    <div className="absolute z-10 inset-0 flex items-center justify-center">
      <div
        className="inset-0 bg-black absolute opacity-60"
        onClick={() => setOpen(false)}
      ></div>
      <div className="bg-white text-black z-20 min-w-80 min-h-60 rounded-xl shadow-xl p-8 flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default Modal;
