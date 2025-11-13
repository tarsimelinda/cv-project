import React from "react";
import "../css/aboutSection.css";

const workExperience = [
    { company: "MBH Bank", role: "Bank Teller", years: "2023 – 2024" },
    { company: "Mediaworks", role: "Receptionist", years: "2021 – 2024" },
    { company: "Juhász Szalon", role: "Hairdresser", years: "2020 – 2021" },
];

export default function AboutSection() {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">About Me</h2>

            <p className="about-description">
                Hi, I’m Társi Melinda, a Full Stack Developer who loves turning ideas into
                interactive, user-friendly web applications.
            </p>

            <div className="timeline-container">
                <div className="timeline-line"></div>

                <div className="timeline-item left">
                    <div className="timeline-card">
                        <p className="title">Codecool</p>
                        <p className="subtitle">Full Stack Developer, 2024 – 2025</p>
                    </div>
                </div>

                {workExperience.map((job, i) => (
                    <div className="timeline-item right" key={`job-${i}`}>
                        <div className="timeline-card">
                            <p className="title">{job.company}</p>
                            <p className="subtitle">
                                {job.role}, {job.years}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="timeline-item left">
                    <div className="timeline-card">
                        <p className="title">BKSZC Erzsébet Királyné Szépészeti Technikum</p>
                        <p className="subtitle">High School Diploma, 2016 – 2020</p>
                    </div>
                </div>
            </div>

            <ul className="timeline-mobile" aria-label="Experience">
                <li className="timeline-card">
                    <p className="title">Codecool</p>
                    <p className="subtitle">Full Stack Developer, 2024 – 2025</p>
                </li>

                {workExperience.map((job, i) => (
                    <li className="timeline-card" key={`mjob-${i}`}>
                        <p className="title">{job.company}</p>
                        <p className="subtitle">{job.role}, {job.years}</p>
                    </li>
                ))}

                <li className="timeline-card">
                    <p className="title">BKSZC Erzsébet Királyné Szépészeti Technikum</p>
                    <p className="subtitle">High School Diploma, 2016 – 2020</p>
                </li>
            </ul>

            <p className="about-description mt">
                I am a quick learner, detail-oriented, and passionate about writing clean,
                maintainable code. I enjoy tackling challenges and continuously improving
                my skills.
            </p>
        </section>
    );
}
