import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Articles.module.scss";

import choose from "../assets/ChooseHomeCarePlan.webp";
import mealplanning from "../assets/MealPlanning.webp";
import saferhome from "../assets/SaferHome.webp";
import respitecare from "../assets/RespiteCare.webp";

const articles = [
  {
    id: "a1",
    title: "How to Choose the Right Homecare Plan",
    date: "Sep 5, 2025",
    excerpt:
      "A practical guide to evaluating care needs, comparing service types, and selecting the right plan for your family.",
    image: choose,
    slug: "how-to-choose-homecare",
  },
  {
    id: "a2",
    title: "Meal Planning for Seniors: Balanced & Simple",
    date: "Aug 20, 2025",
    excerpt:
      "Nutrition tips and meal ideas tailored to common dietary needs for older adults and those with chronic conditions.",
    image: mealplanning,
    slug: "meal-planning-seniors",
  },
  {
    id: "a3",
    title: "Creating a Safer Home: Quick Accessibility Wins",
    date: "Jul 8, 2025",
    excerpt:
      "Small, cost-effective changes that reduce fall risk and make daily life easier for people with mobility limits.",
    image: saferhome,
    slug: "safer-home-checklist",
  },
  {
    id: "a4",
    title: "Respite Care: Why Families Choose Short-Term Support",
    date: "Jun 12, 2025",
    excerpt:
      "What respite care offers, how to plan for it, and real-world benefits for caregivers and their families.",
    image: respitecare,
    slug: "respite-care-explained",
  },
];

const Articles = () => {
  return (
    <main className={styles.articles}>
      {/* ✅ Page Header */}
      <header className={styles.hero}>
        <h1>Caregiving Articles & Insights</h1>
        <p>
          Evidence-based tips, compassionate advice, and practical guides to help families and caregivers
          provide the best support possible.
        </p>
      </header>

      {/* ✅ Articles Grid */}
      <section className={styles.grid} aria-labelledby="articles-grid">
        {articles.map((article) => (
          <article key={article.id} className={styles.card} aria-labelledby={`title-${article.id}`}>
            <Link to={`/articles/${article.slug}`} className={styles.media}>
              <img src={article.image} alt={article.title} loading="lazy" />
            </Link>

            <div className={styles.body}>
              <time className={styles.date} dateTime={new Date(article.date).toISOString()}>
                {article.date}
              </time>

              <h2 id={`title-${article.id}`} className={styles.title}>
                <Link to={`/articles/${article.slug}`}>{article.title}</Link>
              </h2>

              <p className={styles.excerpt}>{article.excerpt}</p>

              <Link to={`/articles/${article.slug}`} className={styles.readMore} aria-label={`Read more: ${article.title}`}>
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Articles;
