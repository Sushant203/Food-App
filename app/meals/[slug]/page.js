import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
export default function MealFucntion({ params }) {
  const Meal = getMeal(params.slug);
  Meal.instructions = Meal.instructions.replace(/\n/g, "<br>");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={Meal.image} alt={Meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{Meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${Meal.creator_email}`}>NAME</a>
          </p>
          <p className={classes.summary}>{Meal.summary}</p>
        </div>
      </header>
      <main className>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: Meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
