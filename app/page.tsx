"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import MidPopUp from "@/components/Common/popup";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setShowModal(true);
      }, 5000);
    }, []);
    
    return (
      <>
        {showModal && <MidPopUp closeModal={() => setShowModal(false)} />}
        <ScrollUp />
        <Hero showRegisterModal={() => setShowModal(true)} />
        <Features />
        <Brands />
        <AboutSectionOne />
        <Testimonials />
        <Blog />
        <Contact />
      </>
    );
}
