"use client";
import { useState } from "react";
const MidPopUp = ({ closeModal }: { closeModal: () => void }) => {
  const formIdIndividual = process.env.NEXT_PUBLIC_STUDENT_FORM;
  const formIdInstitution = process.env.NEXT_PUBLIC_INSTITUTION_FORM;
  const [personality, setPersonality] = useState("Individual/Student");
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };
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
        {personality === "Individual/Student" && (
          <iframe
            title="formIdIndividual"
            src={formIdIndividual}
            width="375"
            height="733"
            onLoad={handleIframeLoad}
          >
            Loading…
          </iframe>
        )}
        {personality === "Institution" && (
          <iframe
            title="formIdInstitution"
            src={formIdInstitution}
            width="375"
            height="733"
            onLoad={handleIframeLoad}
          >
            Loading…
          </iframe>
        )}
        {loading && <div className="bg-primary w-full h-full flex justify-center pt-12 text-2xl">Loading...</div>}
      </div>
    </section>
  );
};

export default MidPopUp;
