import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delecious Meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Chooseyour favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe.</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Loading meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
