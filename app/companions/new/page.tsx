import CompanionForm from "@/components/CompanionForm";


const NewCompanionPage = () => {
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className="w-full flex flex-col gap-5">
        <h1>Companion Builder</h1>

        <CompanionForm />
      </article>
    </main>
  )
}

export default NewCompanionPage;