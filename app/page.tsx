export const revalidate = 60;

import Image from "next/image";

import { client } from "../utils/client";

import { Hero, Services, Experience, Work, Explore } from "../app/_components";
import { Suspense } from "react";
import { sectionId } from "@/constants";

export default async function Home() {
  const landingPage = await getData();

  return (
    <main className="flex flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        {/* map sections array & render based on id */}
        {landingPage.sections
          ? landingPage.sections.map((section) => {
              switch (section._id) {
                case sectionId.hero:
                  return (
                    <Hero key={section._id} section={section} {...section} />
                  );
                case sectionId.services:
                  return <Services key={section._id} />;
                case sectionId.experience:
                  return <Experience key={section._id} />;
                case sectionId.work:
                  return <Work key={section._id} />;
                case sectionId.explore:
                  return <Explore key={section._id} />;
                default:
                  return null;
              }
            })
          : ""}
      </Suspense>
    </main>
  );
}

const getData = async () => {
  const response = await client.fetch<LandingPage[]>(
    `*[_type == "landingpage"] {
      ...,
      sections[]->
    }`
  );

  const landingPage = response[0];

  return landingPage;
};
