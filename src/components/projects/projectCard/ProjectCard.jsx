import styles from "./ProjectCard.module.css";
import { Chip } from "@mui/material";

// const ProjectCard = ({ name, description, link, image, tech }) => {
//   return (
//     <a href={link} target="_blank" rel="noreferrer">
//       <div className={styles.Wrapper}>
//         <img src={image} alt={name} className={styles.ProjectImage} />
//         <h1 className={styles.Heading}>{name}</h1>
//         <span className={styles.Description}>{description}</span>
//         <div className={styles.ChipWrapper}>
//           {tech.map((item) => (
//             <Chip label={item} className={styles.Chip} key={item} />
//           ))}
//         </div>
//       </div>
//     </a>
//   );
// };

const ProjectCard = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className={styles.Wrapper}>
        <img
          src={props.image}
          alt={props.name}
          className={styles.ProjectImage}
        />
        <h1 className={styles.Heading}>{props.name}</h1>
        <span className={styles.Description}>{props.description}</span>
        <div className={styles.ChipWrapper}>
          {props.tech.map((item) => (
            <Chip label={item} className={styles.Chip} key={item} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
``;
