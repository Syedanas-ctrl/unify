"use client";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <Image
      className="fixed bottom-20 right-8 z-[99] cursor-pointer"
      onClick={() => {
        window.open(
          "https://api.whatsapp.com/send?phone=+919967820015&text=Hi%2C+I+am+interested+in+your+services",
          "_blank"
        );
      }}
      src="/images/whatsapp.svg"
      height={44}
      width={44}
      alt="whatsapp"
    />
  );
};

export default Whatsapp;
