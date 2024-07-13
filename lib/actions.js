"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMealForm(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  console.log(meal); //see your submitted data on the terminal
  await saveMeal(meal); //function that we created in lib/meals.js file

  redirect("/meals");
}
