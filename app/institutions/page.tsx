"use client";
import { List } from "@/components/About/AboutSectionOne";
import Image from "next/image";
import Link from "next/link";

const TestimonialsPage = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-start">
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
            <div className="mb-8 md:mb-0 lg:mb-12">
              <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Welcome to Unify Global Education - Bridging Education Globally!
              </h1>
              <p className="text-base font-medium leading-relaxed text-body-color text-justify">
                Unify Global Education is your gateway to fostering meaningful
                partnerships between Indian educational institutions and
                renowned international boards and universities. We specialize in
                facilitating collaborations that enrich educational experiences,
                foster global learning environments, and open doors to limitless
                opportunities.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-4/12 lg:w-5/12">
            <div className="text-end">
              <ul className="flex items-center md:justify-end">
                <li className="flex items-center">
                  <Link
                    href="/"
                    className="pr-1 text-base font-medium text-body-color hover:text-primary"
                  >
                    Home
                  </Link>
                  <span className="mr-3 block h-2 w-2 rotate-45 border-t-2 border-r-2 border-body-color"></span>
                </li>
                <li className="text-base font-medium text-primary">
                  institutions
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="bg-cover bg-center bg-no-repeat">
          <div className="float-right ml-6 my-3">
            <Image
              src="/images/backgrounds/insthree.jpg"
              alt="uge"
              width={600}
              height={600}
              className="mx-auto max-w-full lg:mr-0"
            />
          </div>
          <p className="text-base  font-medium leading-relaxed text-body-color text-justify pt-12 pb-32">
            <span className="font-bold text-2xl text-black opacity-80 dark:text-white dark:opacity-100">
              Services We Offer:
            </span>
            <br />
            <br />
            <ol className="list-disc list-inside text-start">
              <List text="Collaborative Programs Development" />
              <List text="Partner Identification and Engagement" />
              <List text="Curriculum Alignment and Integration" />
              <List text="Regulatory Compliance Assistance" />
              <List text="Faculty and Student Exchange Programs" />
              <List text="Support for Accreditation Processes" />
            </ol>
            <br />
            <br />
            <div className="my-4">
              <div className="float-left mr-6 my-3">
                <Image
                  src="/images/backgrounds/instwo.jpg"
                  alt="uge"
                  width={600}
                  height={600}
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
              <span className="font-bold text-2xl text-black opacity-80 dark:text-white dark:opacity-100">
                About Us:
              </span>
              <br />
              Our Mission At UGE, our mission is to create a bridge between
              Indian educational institutions and global educational entities.
              We're committed to shaping a world where students and educators
              benefit from diverse perspectives, innovative teaching methods,
              and collaborative initiatives that transcend borders.
              <br />
              <br />
              <span className="font-bold text-2xl text-black opacity-80 dark:text-white dark:opacity-100">
                Our Expertise
              </span>
              <br />
              With years of experience and a deep understanding of the education
              landscape, our team navigates the complexities of international
              collaborations. We foster partnerships that enhance academic
              excellence, cultural exchange, and institutional growth.
              <br />
              <br />
              <span className="font-bold text-2xl text-black opacity-80 dark:text-white dark:opacity-100">
                The Team
              </span>
              <br /> Meet the dedicated professionals behind UGE, each
              passionate about revolutionizing education through cross-cultural
              collaboration. Our team brings expertise in education,
              international relations, and strategic partnership development.
              <br />
              <br />
            </div>
            <br />
            <br />
            <div>
              <div className="float-right ml-6 my-3">
                <Image
                  src="/images/backgrounds/insone.jpg"
                  alt="uge"
                  width={600}
                  height={600}
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
              <span className="font-bold text-2xl text-black opacity-80 dark:text-white dark:opacity-100">
                Services:
              </span>
              <br />
              <br />
              <ol className="list-disc list-inside">
                <li>
                  <span className="font-semibold text-lg text-dark-gray dark:text-white brightness-90">
                    Collaborative Programs Development
                  </span>{" "}
                  We assist in crafting tailor-made collaborative programs that
                  align with the objectives and strengths of both Indian
                  institutions and international boards/universities. These
                  programs enrich the academic landscape and provide students
                  with a global perspective.
                </li>
                <li>
                  <span className="font-semibold text-lg text-dark-gray dark:text-white brightness-90">
                    Partner Identification and Engagement
                  </span>{" "}
                  Utilizing our extensive network, we identify and engage with
                  international boards and universities that complement the
                  vision and values of Indian educational institutions. We
                  facilitate dialogue and establish mutually beneficial
                  partnerships.
                </li>
                <li>
                  <span className="font-semibold text-lg text-dark-gray dark:text-white brightness-90">
                    Curriculum Alignment and Integration
                  </span>{" "}
                  Our experts aid in aligning and integrating curricula to meet
                  global standards while preserving the essence of local
                  educational values. This ensures a seamless transition and
                  enhances the quality of education.
                </li>
                <li>
                  <span className="font-semibold text-lg text-dark-gray dark:text-white brightness-90">
                    Regulatory Compliance Assistance
                  </span>{" "}
                  Navigating regulatory requirements can be challenging. We
                  provide guidance and support to ensure compliance with
                  regulations, fostering smooth collaboration between Indian and
                  international educational entities.
                </li>
                <li>
                  <span className="font-semibold text-lg text-dark-gray dark:text-white brightness-90">
                    Faculty and Student Exchange Programs
                  </span>{" "}
                  Promoting cultural exchange and academic enrichment, we
                  facilitate exchange programs for faculty and students,
                  fostering a diverse learning environment that transcends
                  boundaries.
                </li>
                <li>
                  <span className="font-semibold text-lg text-dark-gray dark:text-white brightness-90">
                    Support for Accreditation Processes
                  </span>{" "}
                  We provide assistance throughout the accreditation process,
                  ensuring that collaborative programs meet established quality
                  benchmarks and receive accreditation from relevant bodies.
                </li>
              </ol>
            </div>
          </p>
        </section>
      </div>
    </section>
  );
};

export default TestimonialsPage;
