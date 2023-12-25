"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Bot = () => {
  const [showBot, setShowBot] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowBot(true);
    }, 15000);
  }, []);
  return (
    showBot && (
      <main className="fixed bottom-32 text-sm text-dark right-8 z-10 cursor-pointer w-80 rounded-lg flex flex-col items-end">
        <button
          onClick={() => setShowBot(false)}
          className="rounded-full text-xs bg-dark px-2 bg-opacity-20 dark:text-white text-dark mb-1 mr-2"
        >
          close x
        </button>
        <section className="rounded-lg overflow-hidden border border-body-color">
          <div className="bg-white flex gap-2 px-4 pt-2 pb-1 text-xs items-center rounded-t-lg">
            <div className="rounded-full p-1 bg-blue w-5 h-5">
              <Image src={"/bot.svg"} height={16} width={16} alt="bot" />
            </div>
            <p>Have doubts?</p>
          </div>
          <div className="bg-white px-4 pt-1 pb-3 text-sm">
            <p>
              Need guidance finding quality education abroad? Chat with us for
              help!
            </p>
          </div>
          <button
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=+919967820015&text=Hi%2C+I+am+interested+in+your+services",
                "_blank"
              );
            }}
            className="bg-primary w-full px-4 py-2 font-semibold text-white text-center rounded-b-lg"
          >
            chat now
          </button>
        </section>
        <div className="w-5 h-5 bg-primary transform rotate-45 -translate-y-3 -translate-x-6" />
      </main>
    )
  );
};
