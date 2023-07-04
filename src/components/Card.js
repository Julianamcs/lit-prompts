import React from "react";
import {
  BsWhatsapp,
  BsClipboard,
  BsBookmarkHeart,
  BsLink45Deg,
} from "react-icons/bs";

export default function Card({ act, prompt }) {
  const colorClass = `grad${Math.floor(Math.random() * 14) + 1}`;
  return (
    <div className="flex flex-col gap-1 justify-center items-center w-max relative z-10 m-6 self-center">
      <div className="w-80 bg-zinc-800/90 border-2 border-zinc-800 backdrop-blur-lg rounded-lg p-4 text-white text-justify">
        {act}
      </div>
      <span className="w-4 h-4 bg-zinc-800 rounded-full" />
      <span className="w-2 h-2 bg-zinc-800 rounded-full" />
      <div
        className={`relative w-80 ${colorClass} p-4 rounded-lg text-justify z-10 font-semibold`}
      >
        {prompt}
      </div>
      <div className="relative w-[21rem] bg-zinc-800/90 backdrop-blur-lg h-16 -mt-8 rounded-lg p-4 pt-5 text-fuchsia-900 rotate-12"></div>
      <div
        className={`relative w-[21rem] ${colorClass} py-4 px-8 h-16 rounded-lg -mt-4 text-justify z-10 font-semibold -rotate-6 flex gap-2 justify-between`}
      >
        <BsClipboard
          title="Copy to Clipboard"
          className="w-6 h-6 opacity-90 hover:opacity-100 ease-in-out transition-all active:scale-90 cursor-pointer duration-100 stroke-[0.2]"
        />
        <BsLink45Deg
          title="Copy Link"
          className="w-7 h-7 opacity-90 hover:opacity-100 ease-in-out transition-all active:scale-90 cursor-pointer duration-100 stroke-[0.2]"
        />
        <BsWhatsapp
          title="Share on WhatsApp"
          className="w-6 h-6 opacity-90 hover:opacity-100 ease-in-out transition-all active:scale-90 cursor-pointer duration-100 stroke-[0.1]"
        />
        <BsBookmarkHeart
          title="Bookmark it"
          className="w-6 h-6 opacity-90 hover:opacity-100 ease-in-out transition-all active:scale-90 cursor-pointer duration-100 stroke-[0.2]"
        />
      </div>
    </div>
  );
}