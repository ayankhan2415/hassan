import { projects } from "@/utils";
import ProjectCard from "@/views/Works/ProjectCard";

const ProjectsListing = () => {
  return (
    <div className="relative p-24">
      <p className={`sectionSubText mb-2`}>My work</p>
      <h2 className={`sectionHeadText`}>Projects.</h2>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};
export default ProjectsListing;
