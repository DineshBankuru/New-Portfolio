// import chromeIcon from "../../../assets/chromeIcon.webp";
import asyncImage from "../../../assets/asyncImage.webp";
import hoisting from "../../../assets/hoisting.png";
import promise from "../../../assets/promise.jpeg";
// import flexiple from "../../../assets/blog/flexiple.jpg";
import BlogCard from "../blogCard/BlogCard";
import styles from "./BlogComponent.module.css";

const BlogComponent = () => {
  const projects = [
    {
      name: "Asynchronocity in JavaScript",
      description: (
        <>
          You might have heard JS is asynchronous, non-blocking, single threaded
          language. Well that is not entirely true, in reality, core Js is
          synchronous blocking single threaded language. <br /> <br />
          Read the blog to find out more.
        </>
      ),
      link: "https://cooing-individual-969.notion.site/Asynchronocity-in-JavaScript-f14f3f749bc84894b953be7778166135",
      image: asyncImage,
      tech: ["Chrome Extension", "React"],
    },
    {
      name: "Hoisting in JavaScript",
      description: (
        <>
          Hoisting is the process in which interpreter moves all the declaration
          to the top of the scope before execution. This means that we can
          access functions, variables before they have been declared in the
          source code.
          <br /> <br />
          In JavaScript Variable declrattion, initialization and usage has a
          fixed sequence.
          <br />
          <br />
          Declaration → Initialization/assignment → Usage
        </>
      ),
      link: "https://cooing-individual-969.notion.site/Hoisting-in-JavaScript-122c13ed6c1d461dbd42d2afdd2fcdaf",
      image: hoisting,
      tech: ["Chrome Extension", "React"],
    },
    // {
    //   name: "Promise in JavaScript",
    //   description: (
    //     <>
    //       Earlier before promise was introduced in JS asynchronous operations
    //       were handled using callback functions. Promises are special objects in
    //       JS which are used to represent the state of an asynchronous operation.
    //       <br />
    //       <br />
    //       Promises have three states:
    //       <br />
    //       1. Pending <br /> 2. Fulfilled <br /> 3. Rejected
    //     </>
    //   ),
    //   link: "https://blog.sudhanshusoni.tech/Promise-in-JS-0e1c9a8c11b54190b82616d73fabb26f",
    //   image: promise,
    //   tech: ["Chrome Extension", "React"],
    // },
  ];

  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Heading} id="blog">
        Blogs
      </h1>
      <div className={styles.CardWrapper}>
        {projects.map((props) => (
          <BlogCard
            // name={name}
            // description={description}
            // link={link}
            // eslint-disable-next-line react/prop-types
            key={props.name}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
//
//
//
