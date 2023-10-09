"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="With our experience and a deep commitment to excellence, we strive to be your trusted partner in making informed decisions about studying abroad"
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
