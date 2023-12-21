"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Collaboration Partner for Indian Institutions"
        description="At Unify Global Education, we serve as a dynamic catalyst for educational transformation, specializing in connecting Indian institutions with esteemed international Institutions. Committed to fostering a global perspective, we facilitate collaborations that transcend borders, enabling the exchange of knowledge, resources, and expertise. Our mission is to empower Indian institutions to thrive on the international stage, forging partnerships that enrich academic experiences and drive innovation.
        GGC creating a platform where institutions converge to create a harmonious tapestry of learning. Join us as we navigate the intersection of Indian and international academia.
        To this end, Unify Global Education places significant emphasis on pairing the right Board with the most suitable Institutions. This strategic matchmaking process ensures that collaborative efforts are not only successful but also synergistic, fostering a harmonious exchange of expertise, resources, and innovation."
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
