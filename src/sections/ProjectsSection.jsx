import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../css/projectsSection.css";

const projects = [
    {
        title: "Employee Management Application",
        description: "A web-based employee management system built for HR teams to simplify and streamline employee and data management. The app features secure, role-based access — admins can fully manage users and roles, while HR staff can view and update employee details within their permissions. Developed using React, TailwindCSS, and Vite with a RESTful backend, this system delivers an efficient and user-friendly experience for HR operations of any scale.",
        link: "https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-DelczBalazs.git"
    },
    {
        title: "Super Mario Style Game",
        description: "A 2D platformer game inspired by Super Mario, built with React and Spring Boot. It features a RESTful backend with MongoDB and showcases full-stack development skills through reusable frontend components and tested API design.",
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
