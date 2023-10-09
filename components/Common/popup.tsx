"use client";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
const MidPopUp = ({ closeModal }: { closeModal: () => void }) => {
  const idReference = collection(db, "form");
  const formId = sessionStorage.getItem("formId");
  useEffect(() => {
    if (formId) return;
    const fetchFormId = async () => {
      const response = await getDocs(idReference);
      const formLinksArray = response?.docs?.map((doc) => doc?.data()?.formLink)
      sessionStorage.setItem("formId",formLinksArray?.[0]);
    };
    fetchFormId();
  }, []);

  return (
    <section
      className={
        "fixed inset-0 z-50 flex w-full flex-col items-center justify-center bg-black bg-opacity-70"
      }
    >
      <div
        style={{ backgroundColor: "" }}
        className={`m-auto my-2 mr-12 flex w-96`}
      ></div>
      <div className="md:w-128 min-h-80 mx-4 flex max-h-[80%] flex-col justify-between overflow-y-scroll rounded-lg bg-white">
        <div className="flex pt-3 pr-3">
          <p
            onClick={closeModal}
            className="ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded-full p-1 text-xl text-black"
          >
            x
          </p>
        </div>
        <iframe src={formId ?? ""} width="400" height="733">
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default MidPopUp;
