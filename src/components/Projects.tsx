
import { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import D20Animation from './D20Animation';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce solution with payment processing, inventory management, and responsive design.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22400%22%20height%3D%22250%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22400%22%20height%3D%22250%22%20fill%3D%22%231A365D%22%2F%3E%3Ctext%20x%3D%22200%22%20y%3D%22125%22%20font-family%3D%22Arial%22%20font-size%3D%2220%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%3EE-commerce%20Project%3C%2Ftext%3E%3C%2Fsvg%3E',
      githubUrl: 'https://github.com/pedrotakahashi',
      liveUrl: 'https://example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22400%22%20height%3D%22250%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22400%22%20height%3D%22250%22%20fill%3D%22%230A1929%22%2F%3E%3Ctext%20x%3D%22200%22%20y%3D%22125%22%20font-family%3D%22Arial%22%20font-size%3D%2220%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%3ETask%20Management%20App%3C%2Ftext%3E%3C%2Fsvg%3E',
      githubUrl: 'https://github.com/pedrotakahashi',
      liveUrl: 'https://example.com'
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      description: 'An interactive dashboard for financial data visualization with real-time updates, customizable widgets, and data export features.',
      tags: ['React', 'Express', 'SQL', 'Chart.js'],
      image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22400%22%20height%3D%22250%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22400%22%20height%3D%22250%22%20fill%3D%22%233182CE%22%2F%3E%3Ctext%20x%3D%22200%22%20y%3D%22125%22%20font-family%3D%22Arial%22%20font-size%3D%2220%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%3EFinancial%20Dashboard%3C%2Ftext%3E%3C%2Fsvg%3E',
      githubUrl: 'https://github.com/pedrotakahashi',
      liveUrl: 'https://example.com'
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-rpg-deep-blue/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Quest Log</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Project List */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="font-display text-xl text-rpg-deep-blue">Quest Log</h3>
                </div>
                
                <div className="p-4">
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className={`quest-item cursor-pointer ${
                        activeProject === project.id 
                          ? 'border-l-4 border-rpg-light-blue bg-rpg-light-blue/5'
                          : 'border-l-4 border-gray-200 hover:border-rpg-light-blue/50 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveProject(project.id)}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="quest-title">
                          {project.title}
                        </h4>
                        <ChevronRight size={16} className="text-rpg-light-blue" />
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                {activeProject ? (
                  <div className="h-full flex flex-col">
                    {projects
                      .filter(project => project.id === activeProject)
                      .map(project => (
                        <div key={project.id} className="animate-fade-in flex-1 flex flex-col">
                          <div className="relative h-48 md:h-64 w-full bg-rpg-deep-blue overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 flex space-x-2">
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors duration-300"
                                >
                                  <Github size={20} className="text-rpg-deep-blue" />
                                </a>
                              )}
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors duration-300"
                                >
                                  <ExternalLink size={20} className="text-rpg-deep-blue" />
                                </a>
                              )}
                            </div>
                          </div>
                          
                          <div className="p-6 flex-1">
                            <div className="flex items-center mb-4">
                              <D20Animation size={"3x"} color="#1A365D" className="mr-2" />
                              <h3 className="font-display text-2xl text-rpg-deep-blue">
                                {project.title}
                              </h3>
                            </div>
                            
                            <p className="text-gray-600 mb-6">
                              {project.description}
                            </p>
                            
                            <div className="mt-auto">
                              <h4 className="text-sm font-medium text-rpg-royal-blue mb-2">
                                Technologies Used:
                              </h4>
                              <div className="flex flex-wrap">
                                {project.tags.map(tag => (
                                  <span key={tag} className="skill-tag">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full p-8 text-center">
                    <div>
                      <D20Animation size={"3x"} color="#1A365D" className="mx-auto mb-4" />
                      <h3 className="font-display text-xl text-rpg-deep-blue mb-2">
                        Select a quest to view details
                      </h3>
                      <p className="text-gray-500">
                        Choose a project from the quest log to see more information
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
