"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddCountryMutation } from "@/redux/features/baseApi";
import { IAddCountryFormProps } from "@/types/types";
import { FormEvent } from "react";
import Swal from "sweetalert2";

export function AddCountryForm({ country }: IAddCountryFormProps) {
  const [addCountry, { data, isError }] = useAddCountryMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = form.country.value;
    const code = form.code.value;

    addCountry({ name, code }).then((result) => {
      if ((result as any)?.data?.message) {
        Swal.fire({
          title: "Created!",
          text: "Country Added Successfully!",
          icon: "success",
        });
        form.reset();
      } else if ((result as any)?.error) {
        Swal.fire({
          title: "Error",
          text: "Failed to create country.",
          icon: "error",
        });
      }
    });
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Country</CardTitle>
        <CardDescription>Add a new country in one-click.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                defaultValue={country ? country.name : ""}
                name="country"
                id="name"
                placeholder="Enter country name here"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Code</Label>
              <Input
                defaultValue={country ? country.code : ""}
                name="code"
                id="name"
                placeholder="Enter country code"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit" variant="outline">
            Save
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
