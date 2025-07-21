import CompanionList from "@/components/CompanionList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  getUserCompanions,
  getUserSessions,
} from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const user = await currentUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  const companions = await getUserCompanions(user.id);
  const sessionHistory = await getUserSessions(user.id);

  return (
    <main className="w-full max-w-5xl mx-auto px-4 py-8">
      <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-10 mb-10">
        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 flex-1">
          <div className="flex-shrink-0">
            <Image
              src={user.imageUrl}
              alt={user.id}
              width={110}
              height={110}
              className="rounded-full border-2 border-primary object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 items-center sm:items-start">
            <h1 className="font-bold text-2xl md:text-3xl">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-sm text-muted-foreground break-all">
              <span className="font-medium">username:</span> {user.username}
            </p>
            <p className="text-sm text-muted-foreground break-all">
              {user.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-row gap-4 md:gap-8 mt-4 md:mt-0 flex-shrink-0 justify-center">
          <div className="border border-black/10 bg-white shadow-sm rounded-lg p-4 gap-2 flex flex-col items-center min-w-[120px]">
            <div className="flex gap-2 items-center">
              <Image src='/icons/check.svg' alt="checkmark" width={22} height={22}/>
              <p className="text-2xl md:text-3xl font-bold">{sessionHistory.length}</p>
            </div>
            <div className="text-xs md:text-sm text-muted-foreground text-center">Lessons Completed</div>
          </div>
          <div className="border border-black/10 bg-white shadow-sm rounded-lg p-4 gap-2 flex flex-col items-center min-w-[120px]">
            <div className="flex gap-2 items-center">
              <Image src='/icons/cap.svg' alt="cap" width={22} height={22}/>
              <p className="text-2xl md:text-3xl font-bold">{companions.length}</p>
            </div>
            <div className="text-xs md:text-sm text-muted-foreground text-center">Companions Created</div>
          </div>
        </div>
      </section>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="Recent">
          <AccordionTrigger className="text-2xl md:text-3xl font-bold py-4">
            Recent Sessions {`(${sessionHistory.length})`}
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-2">
              {/* @ts-expect-error -- > companion[]*/}
              <CompanionList title="Recent Sessions" companions={sessionHistory}/>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="companions">
          <AccordionTrigger className="text-2xl md:text-3xl font-bold py-4">
            My Companions {`(${companions.length})`}
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-2">
              <CompanionList title="My Companions" companions={companions}/>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default ProfilePage;
