import Divider from "./Divider";
import { projectsData } from "../assets/data";


const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-2">
          <strong>Location:</strong> {project.location}
        </p>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <p className="text-green-600 font-semibold mb-4">
          <strong>Status:</strong> {project.status}
        </p>
        <a
          href="#"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const ProjectsData = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Our Projects
        </h2>
        <Divider />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsData;
