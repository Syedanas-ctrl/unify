"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Collaboration Partner for Indian Institutions"
        description="We at Unify Global Education (UGE) believe in transforming
        Institutions globally through collaboration model. With 14+
        years of experience in International student recruitment across
        the globe we understand every student and institutions needs of
        be recognized globally. Unify Global Education is your gateway
        to fostering meaningful partnerships between Indian educational
        institutions and renowned international boards and universities.
        We specialize in facilitating collaborations that enrich
        educational experiences, foster global learning environments,
        and open doors to limitless opportunities."
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
