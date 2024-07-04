import ProjectCard from "../projectCard/ProjectCard";
import image1 from "../../../assets/projects/image1.png";
import image from "../../../assets/projects/image.png";
import streamyard from "../../../assets/projects/streamyard.png";
import covid from "../../../assets/projects/covid.png";
import styles from "./ProjectComponent.module.css";

const ProjectComponent = () => {
  const projects = [
    {
      name: "Video Call Chat App",
      description:
        "This application offers high-quality multi-user video and audio calls using WebRTC for seamless peer-to-peer connections. Integrated real-time messaging allows participants to send text messages, emojis and allows users to share their screen to other users.",
      link: "https://video-chat-application-rose.vercel.app/lobby.html",
      image: image1,
      tech: ["WebRTC", "WebSocket", "UDP", "React", "Redux"],
    },
    {
      name: "Multi threaded Proxy Server with Cache",
      description:
        "Implemented a high-performance multi-threaded proxy server with integrated caching capabilities. This project ensures efficient data retrieval, reduced load times, and improved network performance by handling multiple client requests simultaneously and storing frequently accessed data locally. ",
      link: "https://github.com/DineshBankuru/MultiThreadedProxyWithcache",
      image: image,
      tech: ["Threading", "Cache", "Semaphore", "Locks"],
    },
    {
      name: "StreamYard Clone",
      description:
        "Built a robust StreamYard clone designed for seamless live streaming and broadcasting. This allows users to go live on YouTube with real-time video and audio, with excellent stream health",
      link: "https://streamyard-clone-azure.vercel.app/",
      image: streamyard,
      tech: ["RTMP", "TCP"],
    },
    {
      name: "Covid Vaccination Booking Website",
      description:
        "A Web application that simplifies the process of booking COVID Vaccination appointments.Users can easily log in or sign up and search for vaccination centers nearby, book an appointment, Live Website and securely log out. Administrators have separate login access to add and remove Vaccination centers.",
      link: "https://covid-vaccination-booking-xzoc.onrender.com/",
      image: covid,
      tech: ["NodeJS", "MongoDB", "EJS"],
    },
  ];

  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading}>Projects</h1>
      <div className={styles.CardWrapper}>
        {projects.map((item) => (
          <ProjectCard
            name={item.name}
            description={item.description}
            link={item.link}
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
