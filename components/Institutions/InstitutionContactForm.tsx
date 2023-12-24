"use client";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const InstituionContactForm = () => {
  const idReference = collection(db, "form");
  const [formIdInstitution, setFormInstituion] = useState("");
  useEffect(() => {
    const formIdInstitution =
      sessionStorage?.getItem("formIdInstitution") ?? "";
    setFormInstituion(formIdInstitution);
  }, []);
  const isFormIdInstitutionPresent =
    formIdInstitution &&
    formIdInstitution !== "undefined" &&
    formIdInstitution !== "null";

  useEffect(() => {
    if (isFormIdInstitutionPresent) return;
    const fetchFormId = async () => {
      const response = await getDocs(idReference);
      const formLinksArray = response?.docs?.map(
        (doc) => doc?.data()?.formLink
      );
      sessionStorage.setItem("formIdInstitution", formLinksArray?.[0]);
    };
    fetchFormId();
  }, []);
  return (
    isFormIdInstitutionPresent && (
      <>
        <p className="text-3xl font-bold pb-6 whitespace-nowrap">
          Get in Touch
        </p>
        <div className="w-full h-[1200px]">
          <iframe
            title="formIdInstitution"
            className="w-full h-full"
            src={formIdInstitution}
          >
            Loading…
          </iframe>
        </div>
      </>
    )
  );
};

export default InstituionContactForm;
