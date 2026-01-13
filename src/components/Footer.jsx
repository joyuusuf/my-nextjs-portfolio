import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between gap-3">
        <span className="text-left">NOVA<b className="text-zinc-600">GLIDE</b></span>

        <p className="text-center text-slate-600">Jawad Olamide Yuusuf </p>

        <p className="text-slate-600 text-right ">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;