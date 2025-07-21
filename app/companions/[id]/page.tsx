import CompanionComponent from "@/components/CompanionComponent";
import { getCompanion } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

interface CompanionSessionPageProps {
  params: Promise<{ id: string }>;
}

const CompanionsSession = async ({ params }: CompanionSessionPageProps) => {
  const { id } = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();

  const { name, subject, title, topic, duration } = companion;

  if (!user) redirect("/sign-in");
  if (!companion) redirect("/companions");

  return (
    <main>
      <article className="flex justify-between items-center rounded-border p-6 max-md:p-4 max-md:flex-col max-md:gap-4">
        <div className="flex items-center gap-4 max-md:w-full">
          <div
            className="size-[72px] flex items-center justify-center rounded-lg max-md:size-[50px]"
            style={{ backgroundColor: getSubjectColor(subject) }}
          >
            <Image
              src={`/icons/${subject}.svg`}
              alt={subject}
              width={35}
              height={35}
              className="max-md:w-6 max-md:h-6"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-bold text-2xl max-md:text-xl">{name}</p>
              <div className="subject-badge">{subject}</div>
            </div>
            <p className="text-lg max-md:text-base">{topic}</p>
          </div>
        </div>
        <div className="text-2xl max-md:text-lg max-md:w-full max-md:text-left max-md:border-t max-md:pt-2 max-md:border-black/10">
          {duration} minutes
        </div>
      </article>
      <CompanionComponent
        {...companion}
        companionId={id}
        userName={user.firstName}
        userImage={user.imageUrl}
      />
    </main>
  );
};

export default CompanionsSession;
