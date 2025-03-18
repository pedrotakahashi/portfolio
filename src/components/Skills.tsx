import { useEffect, useState } from "react";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "other";
  proficiency: number;
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "other">("all");
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Após a montagem do componente, ativa a animação das barras
    const timer = setTimeout(() => {
      setAnimatedSkills((prev) =>
        skills.reduce((acc, skill) => {
          acc[skill.name] = true;
          return acc;
        }, {} as { [key: string]: boolean })
      );
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const skills: Skill[] = [
    { name: "JavaScript", category: "frontend", proficiency: 90 },
    { name: "HTML", category: "frontend", proficiency: 90 },
    { name: "CSS", category: "frontend", proficiency: 90 },
    { name: "React", category: "frontend", proficiency: 90 },
    { name: "Next.js", category: "frontend", proficiency: 70 },
    { name: "Node.js", category: "backend", proficiency: 80 },
    { name: "Nest.js", category: "backend", proficiency: 60 },
    { name: "SQL", category: "backend", proficiency: 90 },
    { name: "Spring Boot", category: "backend", proficiency: 50 },
    { name: "Git", category: "other", proficiency: 90 },
    { name: "Docker", category: "other", proficiency: 50 },
    { name: "TypeScript", category: "frontend", proficiency: 80 },
  ];

  const filteredSkills =
    activeTab === "all" ? skills : skills.filter((skill) => skill.category === activeTab);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-blue-500 text-white"; // Azul para Frontend
      case "backend":
        return "bg-green-500 text-white"; // Verde para Backend
      case "other":
        return "bg-purple-500 text-white"; // Roxo para Outros
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section id="skills" className="bg-white/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skill Tree</h2>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-lg bg-gray-100">
              {["all", "frontend", "backend", "other"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${activeTab === tab
                      ? "bg-white text-rpg-deep-blue shadow-sm"
                      : "text-gray-500 hover:text-rpg-royal-blue"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="rpg-card opacity-0"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                  animation: "fade-in 0.5s ease-out forwards",
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-display text-lg text-rpg-deep-blue">{skill.name}</h3>
                  <div
                    className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(
                      skill.category
                    )}`}
                  >
                    {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                  <div
                    className="bg-rpg-light-blue h-2.5 rounded-full transition-all duration-1000"
                    style={{
                      width: animatedSkills[skill.name] ? `${skill.proficiency}%` : "0%",
                    }}
                  ></div>
                </div>

                <div className="flex justify-between text-xs text-gray-500">
                  <span>Novice</span>
                  <span className="font-medium text-rpg-royal-blue">{skill.proficiency}%</span>
                  <span>Master</span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills tagcloud */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-delay-2">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-rpg-royal-blue/10 text-rpg-royal-blue text-sm font-medium mb-4">
              <img
                src="/assets/images/adventurer.png"
                alt="Adventurer Icon"
                className="w-10 h-10 mr-2"
              />
              <span>Other Technologies</span>
            </div>

            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {[
                "Redux",
                "Material UI",
                "Tailwind CSS",
                "GraphQL",
                "MongoDB",
                "Firebase",
                "AWS",
                "CI/CD",
                "Jest",
                "Webpack",
                "Responsive Design",
                "REST APIs",
                "Agile",
                "SCRUM",
                "Git Flow",
              ].map((tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
