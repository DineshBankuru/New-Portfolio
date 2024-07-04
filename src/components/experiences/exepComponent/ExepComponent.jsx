import ProjectCard from "../exepCard/ExepCard";
import Natwest from "../../../assets/projects/natwest.png";
// import image from "../../../assets/projects/image.png";
// import streamyard from "../../../assets/projects/streamyard.png";
// import covid from "../../../assets/projects/covid.png";
import styles from "./ProjectComponent.module.css";

const ProjectComponent = () => {
  const projects = [
    {
      name: "Natwest Group, Software Developer Engineer Intern",
      description:
        " As an intern, I have worked on creating a production-grade backend application for processing and enriching a text file with all the transactions of the users in a month, the text is then processed, and enriched and the updated data is pushed into a Postgresql database. Integrated automated testing like Karate Framework for API and K6 for performance Testing to this application to Prove the ability of the application to handle different API endpoint exceptions and handle load balancing. The application is now being used by the Billing section to automate the process of generating invoices.",

      image: Natwest,
      tech: ["Java", "SpringBoot", "Karate", "K6"],
    },
  ];

  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading}>Experiences</h1>
      <div className={styles.CardWrapper}>
        {projects.map((item) => (
          <ProjectCard
            name={item.name}
            description={item.description}
            // link={item.link}
            image={item.image}
            tech={item.tech}
            key={item.name}
            // {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
//
//
//
