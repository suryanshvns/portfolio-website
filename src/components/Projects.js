const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p>A brief description of Project 1.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p>A brief description of Project 2.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Project 3</h3>
            <p>A brief description of Project 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
