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

export function AddCountryForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Country</CardTitle>
        <CardDescription>Add a new country in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter country name here" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Code</Label>
              <Input id="name" placeholder="Enter country code" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Save</Button>
      </CardFooter>
    </Card>
  );
}
