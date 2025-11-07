import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../css/projectsSection.css";

const projects = [
    {
        title: "Employee Management Application",
        description: "A Java-based project developed as part of Codecool’s full-stack training program.",
        link: "https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-DelczBalazs.git"
    },
    {
        title: "Super Mario Style Game",
        description: "A React / Node.js / Express / MongoDB project created for practice and experimentation with full-stack technologies.",
        link: "https://github.com/tarsimelinda/freestyle-mern-project-react"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projects.map((proj, i) => (
                    <ProjectCard key={i} {...proj} />
                ))}
            </div>
        </section>
    );
}
