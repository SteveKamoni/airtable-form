import React from "react";
import styles from "../styles/ourStory.module.scss";
import imgA from "../assets/story1.webp";      // replace with real files
import imgB from "../assets/story2.webp";
import imgC from "../assets/story3.webp";

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

const milestones = [
  { year: "2015", title: "Humble Beginnings", desc: "Founded by caregivers who wanted better at-home support." },
  { year: "2018", title: "Growing Trust", desc: "Expanded to serve 100+ families with a focus on relationships." },
  { year: "2022", title: "Care, Elevated", desc: "Built formal training, quality processes, and family-first programs." },
];

const stats = [
  { label: "Families Served", value: "1,200+" },
  { label: "Avg. Care Rating", value: "4.9/5" },
  { label: "Years Experience", value: "10+" },
];

const handleScroll = (e) => {
  e.preventDefault();
  const section = document.getElementById("team");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


export default function OurStory() {
  return (
    <section className={styles.ourStory} aria-labelledby="our-story-title">
      <div className={styles.inner}>
        {/* Left: Collage */}
        <FadeInOnView>
          <div className={styles.collage} aria-hidden="true">
            <div className={styles.card + " " + styles.cardA}>
              <img src={imgA} alt="" />
            </div>
            <div className={styles.card + " " + styles.cardB}>
              <img src={imgB} alt="" />
            </div>
            <div className={styles.card + " " + styles.cardC}>
              <img src={imgC} alt="" />
            </div>
            <div className={styles.badge}>
              <span>Founded on compassion</span>
            </div>
          </div>
        </FadeInOnView>

        {/* Right: Story content */}
        <div className={styles.content}>
          <FadeInOnView>
            <p className={styles.kicker}>Our story</p>
            <h2 id="our-story-title" className={styles.title}>
              Built by caregivers. Focused on people.
            </h2>
            <p className={styles.lead}>
              We started small — a handful of caregivers with a shared belief that kindness and competence
              should go hand in hand. Over time that belief turned into a practice, then a process, and
              now a trusted service families rely on.
            </p>
          </FadeInOnView>

          {/* Timeline */}
          <div className={styles.timeline}>
            {milestones.map((m,) => (
              <FadeInOnView key={m.year} >
                <div className={styles.milestone}>
                  <div className={styles.dot} aria-hidden="true"></div>
                  <div className={styles.milestoneContent}>
                    <span className={styles.mYear}>{m.year}</span>
                    <h4 className={styles.mTitle}>{m.title}</h4>
                    <p className={styles.mDesc}>{m.desc}</p>
                  </div>
                </div>
              </FadeInOnView>
            ))}
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {stats.map((s) => (
              <div className={styles.stat} key={s.label}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.ctaRow}>
            <a href="/about#team" className={styles.ctaPrimary} onClick={handleScroll} >Meet Our Team</a>
            <a href="/contact" className={styles.ctaSecondary}>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
