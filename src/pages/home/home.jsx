import { useEffect } from "react";
import { useRef } from "react";
import styles from "./home.module.css";
import Starback from "starback";
import ContactSection from "../../components/contact/contactSection/ContactSection";
// import TestimonialsSection from "../../components/testimonials/testimonialsSection/TestimonialsSection";
import ShootingStars from "../../components/shootingStars/ShootingStars";
// import AboutSection from "../../components/about/AboutSection/AboutSection";
import ExepComponent from "../../components/experiences/exepComponent/ExepComponent";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ProjectComponent from "../../components/projects/projectComponent/ProjectComponent";
import BlogComponent from "../../components/blogs/blogComponent/BlogComponent";
import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import AboutMe from "@components/about/AboutMe";

const Home = () => {
  const { width } = useWindowDimensions();
  const CanvasComponent = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;

        new Starback(canvas, {
          type: "dot",
          quantity: 70,
          direction: 180,
          backgroundColor: "#161618",
          randomOpacity: true,
          starSize: [0, 1],
          speed: [0, 0.3],
          // -17 just to get rid of x scrollbar
          width: width > 480 ? width - 17 : width,
          height: document.body.scrollHeight + 200,
          starColor: "white",
        });
      }
    }, []);

    return <canvas className={styles.Canvas} ref={canvasRef} />;
  };

  return (
    <>
      <CanvasComponent />
      <div>
        <ShootingStars />
        <div className={styles.Wrapper}>
          <div className={styles.Navbar}>
            <a href="https://cooing-individual-969.notion.site/235ccaa5149e42c3b281faae7e10c4d0?v=01ae8a5847504b99a1a21b0d9d0a466c">
              <span className={styles.NavbarText}>Blog</span>
            </a>
            <a href="#contact">
              <span className={styles.NavbarText}>Contact</span>
            </a>
          </div>
          <h1 className={styles.NameHeading}>Dinesh Bankuru</h1>

          <p className={styles.Note}>
            Hi, I am Dinesh,B.Tech Final year student at VNIT Nagpur
          </p>
          <div className={styles.SocialsWrapper}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://x.com/Dinesh_Bankuru"
            >
              <FaSquareXTwitter
                fontSize={"3.2rem"}
                style={{ cursor: "pointer" }}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/DineshBankuru"
            >
              <FaSquareGithub
                fontSize={"3.2rem"}
                style={{ cursor: "pointer" }}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/dinesh_bankuru/"
            >
              <FaInstagramSquare
                fontSize={"3.2rem"}
                style={{ cursor: "pointer" }}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/dinesh-bankuru-401602233/"
            >
              <FaLinkedin fontSize={"3.2rem"} style={{ cursor: "pointer" }} />
            </a>
          </div>
        </div>
        <AboutMe />
        <ProjectComponent />

        <BlogComponent />
        {/* <AboutSection /> */}

        <ExepComponent />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
