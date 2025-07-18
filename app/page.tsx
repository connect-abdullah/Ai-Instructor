import CTA from "@/components/CTA";
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
          <CompanionCard 
          id="123" 
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6a"/>
           <CompanionCard 
          id="456" 
          name="Verba The vocabolury builder"
          topic="Verbal Communication"
          subject="science"
          duration={45}
          color="#fda234"/>
           <CompanionCard 
          id="654" 
          name="Neura the Brainy Fucker"
          topic="Neural Network of the Testicles"
          subject="science"
          duration={45}
          color="#fd3a2b"/>
      </section>
      
      <section className="home-section">
        <CompanionList 
        title="Recently Completed Sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page