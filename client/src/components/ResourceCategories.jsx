import React, { useState } from "react";
import styles from "../styles/resourceCategories.module.scss";
import img1 from "../assets/NatureBG.jpg";
import img2 from "../assets/NatureBG2.jpg";

const resources = [
  {
    id: 1,
    title: "Caring for Loved Ones at Home",
    type: "Guide",
    description:
      "Step-by-step guide on creating a safe and supportive home environment for elderly care.",
    image: img1,
  },
  {
    id: 2,
    title: "The Future of Homecare",
    type: "Case Study",
    description:
      "Exploring innovative approaches to modern caregiving through real-world success stories.",
    image: img2,
  },
  {
    id: 3,
    title: "Daily Care Tips Video",
    type: "Video",
    description:
      "Watch practical demonstrations of essential daily routines and caregiving techniques.",
    image: img1,
  },
  {
    id: 4,
    title: "Nutrition for Seniors",
    type: "Guide",
    description:
      "Essential dietary advice and meal planning strategies for elderly health and wellness.",
    image: img2,
  },
];

const categories = ["All", "Guide", "Case Study", "Video"];

const ResourceCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources =
    selectedCategory === "All"
      ? resources
      : resources.filter((item) => item.type === selectedCategory);

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Explore Resources by Category</h2>

        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredResources.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className={styles.tag}>{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCategories;
