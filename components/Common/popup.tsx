"use client";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
const MidPopUp = ({ closeModal }: { closeModal: () => void }) => {
  const idReference = collection(db, "form");
  const formIdIndividual = sessionStorage?.getItem("formIdIndividual");
  const formIdInstitution = sessionStorage?.getItem("formIdInstitution");
  const isFormIdIndividualPresent =
    formIdIndividual &&
    formIdIndividual !== "undefined" &&
    formIdIndividual !== "null";
  const isFormIdInstitutionPresent =
    formIdInstitution &&
    formIdInstitution !== "undefined" &&
    formIdInstitution !== "null";

  useEffect(() => {
    if (isFormIdIndividualPresent && isFormIdInstitutionPresent) return;
    const fetchFormId = async () => {
      const response = await getDocs(idReference);
      const formLinksArray = response?.docs?.map(
        (doc) => doc?.data()?.formLink
      );
      sessionStorage.setItem("formIdIndividual", formLinksArray?.[1]);
      sessionStorage.setItem("formIdInstitution", formLinksArray?.[0]);
    };
    fetchFormId();
  }, []);
  const [personality, setPersonality] = useState("Individual/Student");
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
      <div
        style={{ minHeight: "320px", width: "375px" }}
        className="md:w-128 mx-4 flex max-h-[80%] flex-col overflow-y-scroll rounded-lg bg-white"
      >
        <div className="flex pt-3 pr-3">
          <button
            onClick={closeModal}
            className="ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded-full p-1 text-xl text-black"
          >
            x
          </button>
        </div>
        <p className="text-xl font-semibold mx-6 text-black opacity-90">
          &quot;Are you a student or an Institution? Fill out this form to get
          started&quot;
        </p>
        <div className="flex justify-around shadow-lg mb-0.5">
          {["Individual/Student", "Institution"].map((item) => (
            <button
              key={item}
              onClick={() => setPersonality(item)}
              className="flex gap-2 mx-6 my-4 items-center cursor-pointer"
            >
              <input
                className="text-blue border border-blue bg-blue"
                type="radio"
                value={item}
                checked={personality === item}
              />
              <label className="text-dark">{item}</label>
            </button>
          ))}
        </div>
        {personality === "Individual/Student" && isFormIdIndividualPresent && (
          <iframe
            title="formIdIndividual"
            src={formIdIndividual}
            width="375"
            height="733"
          >
            Loading…
          </iframe>
        )}
        {personality === "Institution" && isFormIdInstitutionPresent && (
          <iframe
            title="formIdInstitution"
            src={formIdInstitution}
            width="375"
            height="733"
          >
            Loading…
          </iframe>
        )}
      </div>
    </section>
  );
};

export default MidPopUp;
