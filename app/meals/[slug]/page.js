import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const Meal = getMeal(params.slug);
  if (!Meal) {
    notFound();
  }
  return {
    title: Meal.title,
    description: Meal.summary,
  };
}

export default function MealFucntion({ params }) {
  const Meal = getMeal(params.slug);
  if (!Meal) {
    notFound();
  }
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
            by <a href={`mailto:${Meal.creator_email}`}>{Meal.creator}</a>
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

// export default function Hello({ params }) {
//   return <div>{params}</div>;
// }
