import Link from "next/link";
import styles from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/MealsGrid";
import { Suspense } from "react";

function Meals() {
  const meals = getMeals();
  return <MealsGrid meals={meals} />;
}

export default function page() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}> by you</span>
        </h1>
        <p>Choose your favourite recipe and cook it yourself. It is easy</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
