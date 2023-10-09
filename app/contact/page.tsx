"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Our support team will get in touch with you."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
