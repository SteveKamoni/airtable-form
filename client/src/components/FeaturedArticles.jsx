import React from "react";
import styles from "../styles/FeaturedArticles.module.scss";

// replace with actual imports (include file extensions)
import img1 from "../assets/NatureBG.jpg";
import img2 from "../assets/NatureBG2.jpg";
import img3 from "../assets/NatureBG.jpg";
import img4 from "../assets/NatureBG2.jpg";

/**
 * FadeInOnView
 * Small wrapper that handles IntersectionObserver safely per instance.
 * Usage: wrap any element to animate when it appears in viewport.
 */
const FadeInOnView = ({ children, threshold = 0.18, rootMargin = "0px 0px -8% 0px" }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let mounted = true;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && mounted) {
            setVisible(true);
            if (typeof obs.unobserve === "function") obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      mounted = false;
      if (el && observer && typeof observer.unobserve === "function") observer.unobserve(el);
      if (observer && typeof observer.disconnect === "function") observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={`${styles.fadeWrap} ${visible ? styles.inView : ""}`}>
      {children}
    </div>
  );
};

const featured = [
  {
    id: "a1",
    title: "How to Choose the Right Homecare Plan",
    date: "Sep 5, 2025",
    excerpt:
      "A practical guide to evaluating care needs, comparing service types, and selecting the right plan for your family.",
    image: img1,
    href: "/resources/how-to-choose-homecare",
  },
  {
    id: "a2",
    title: "Meal Planning for Seniors: Balanced & Simple",
    date: "Aug 20, 2025",
    excerpt:
      "Nutrition tips and meal ideas tailored to common dietary needs for older adults and those with chronic conditions.",
    image: img2,
    href: "/resources/meal-planning-seniors",
  },
  {
    id: "a3",
    title: "Creating a Safer Home: Quick Accessibility Wins",
    date: "Jul 8, 2025",
    excerpt:
      "Small, cost-effective changes that reduce fall risk and make daily life easier for people with mobility limits.",
    image: img3,
    href: "/resources/safer-home-checklist",
  },
  {
    id: "a4",
    title: "Respite Care: Why Families Choose Short-Term Support",
    date: "Jun 12, 2025",
    excerpt:
      "What respite care offers, how to plan for it, and real-world benefits for caregivers and their families.",
    image: img4,
    href: "/resources/respite-care-explained",
  },
];

const FeaturedArticles = () => {
  return (
    <section className={styles.featured} aria-labelledby="featured-articles-title">
      <div className={styles.header}>
        <h2 id="featured-articles-title">Featured Resources & Insights</h2>
        <p>Actionable guides, compassionate advice, and evidence-based tips for families and caregivers.</p>
      </div>

      <div className={styles.grid}>
        {featured.map((item) => (
          <FadeInOnView key={item.id}>
            <article className={styles.card} aria-labelledby={`title-${item.id}`}>
              <div className={styles.media}>
                <img src={item.image} alt={item.title} />
              </div>

              <div className={styles.body}>
                <div className={styles.meta}>
                  <time dateTime={new Date(item.date).toISOString()}>{item.date}</time>
                </div>

                <h3 id={`title-${item.id}`} className={styles.title}>
                  {item.title}
                </h3>

                <p className={styles.excerpt}>{item.excerpt}</p>

                <a href={item.href} className={styles.readMore} aria-label={`Read more: ${item.title}`}>
                  Read more →
                </a>
              </div>
            </article>
          </FadeInOnView>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
