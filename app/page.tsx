// ✅ Force dynamic rendering to prevent build error
export const dynamic = 'force-dynamic';

import CTA from "@/components/CTA";
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const Page = async() => {

  const companions = await getAllCompanions({limit:3});
  const recentSessionCompanions = await getRecentSessions(10)
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard 
          key={companion.id}
          {...companion}
          color={getSubjectColor(companion.subject)}
          />
        ))}
          
      </section>
      
      <section className="home-section">
        <CompanionList 
        title="Recent Sessions"
        companions={recentSessionCompanions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page