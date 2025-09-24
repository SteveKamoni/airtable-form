import React from "react";
import styles from "../styles/meetOurTeam.module.scss";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

import member1 from "../assets/NatureBG.webp";
import member2 from "../assets/NatureBG2.webp";
import member3 from "../assets/NatureBG.webp";
import member4 from "../assets/NatureBG2.webp";

const team = [
  {
    id: 1,
    name: "Grace M.",
    role: "Founder & CEO",
    image: member1,
    quote: "Driven by compassion, committed to dignity.",
    linkedin: "#",
    twitter: "#",
    email: "mailto:grace@example.com",
  },
  {
    id: 2,
    name: "Dr. Samuel K.",
    role: "Head of Care Programs",
    image: member2,
    quote: "Empowering independence through tailored support.",
    linkedin: "#",
    twitter: "#",
    email: "mailto:samuel@example.com",
  },
  {
    id: 3,
    name: "Lydia O.",
    role: "Client Relations Manager",
    image: member3,
    quote: "Every client is family. Every story matters.",
    linkedin: "#",
    twitter: "#",
    email: "mailto:lydia@example.com",
  },
  {
    id: 4,
    name: "James T.",
    role: "Operations Director",
    image: member4,
    quote: "Quality care starts with a passionate team.",
    linkedin: "#",
    twitter: "#",
    email: "mailto:james@example.com",
  },
];

const MeetOurTeam = () => {
  return (
    <section className={styles.teamSection} id="team" >
      <div className={styles.container}>
        <div className={styles.header} >
          <h2>Meet Our Team</h2>
          <p>
            Behind every act of care is a dedicated team of professionals. Our compassionate experts
            work tirelessly to deliver personalized support and enrich lives every day.
          </p>
        </div>

        <div className={styles.grid}>
          {team.map((member) => (
            <figure key={member.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={member.image} alt={member.name} />
                <div className={styles.overlay}>
                  <a href={member.linkedin} aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href={member.twitter} aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href={member.email} aria-label="Email">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
              <figcaption className={styles.info}>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <blockquote>{member.quote}</blockquote>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
