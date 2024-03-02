import { AddCountryForm } from "@/components/custom/AddCountryForm";
import { CountryTable } from "@/components/custom/CountryTable";

export default function Home() {
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
