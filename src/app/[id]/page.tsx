import { AddCountryForm } from "@/components/custom/AddCountryForm";
import { CountryTable } from "@/components/custom/CountryTable";

export default async function UpdatePage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `http://localhost:5000/api/country/${params.id}`
  );
  const country = await response.json();

  console.log(country);

  return (
    <main className="p-10 flex gap-16">
      <div>
        <AddCountryForm />
      </div>
      <div className="flex-1">
        <CountryTable />
      </div>
    </main>
  );
}
