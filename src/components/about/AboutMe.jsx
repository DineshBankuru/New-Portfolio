/* eslint-disable react/no-unescaped-entities */
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.Wrapper}>
      <h1
        className={`Heading ${styles.AboutMeHeading}`}
        style={{ marginBottom: 40 }}
      >
        About me
      </h1>
      <div className={styles.DescriptionCard}>
        <p className={styles.Description}>
          Hi i am Dinesh Bankuru, a Final year student at VNIT Nagpur.
          <br /> <br />
          I'm a passionate full stack developer with a deep love for coding,
          problem solving, and creating efficient and scalable solutions. My
          journey in the world of programming started with a single "Hello
          World" and has led me to explore the realms of web development,
          algorithms, and data structures. I'm Currently pursuing B.Tech in
          Computer Science and Engineering from Visvesvaraya National Institute
          of Technology.
          <br /> <br />
          <h1>My Skills</h1>
          <ul>
            <li>C, C++, Python</li>
            <li>Java Spring Boot</li>
            <li>NextJS, ReactJS, Redux, NodeJS</li>
            <li>SQL, PostgreSql</li>
            <li>Automated Testing like Karate, Cucumber, Junit</li>
          </ul>{" "}
          <br /> <br />
          After that i moved on to working with a very early stage startup koinx
          as Frontend Engineer and worked there for a year, and now i am here.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
