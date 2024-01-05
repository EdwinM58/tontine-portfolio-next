import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto w-screen px-4 py-2 h-28 flex flex-col bg-[#E7E7E7] ">
      <h1 className="font-bold">Let&apos;s connect!</h1>
      <Link href="https://mail.google.com/">edwin.mongare@gmail.com</Link>
      <p>+1(201)-235-6334</p>
    </div>
  );
};

export default Footer;
