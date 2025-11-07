import SkillIcon from "../components/SkillIcon";
import {
    JavaScriptLogo,
    TypeScriptLogo,
    ReactLogo,
    NodeJsLogo,
    ExpressLogo,
    TailwindLogo,
    HTMLLogo,
    CSSLogo,
    GitHubLogo,
    JavaLogo,
    PostgresqlLogo,
    MongoDBLogo,
    SpringBootLogo,
    DockerLogo
} from "../logos";
import "../css/skillsSection.css";

const skills = [
    { Logo: JavaScriptLogo, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", name: "JavaScript" },
    { Logo: TypeScriptLogo, link: "https://www.typescriptlang.org/docs/", name: "TypeScript" },
    { Logo: ReactLogo, link: "https://react.dev/", name: "React" },
    { Logo: NodeJsLogo, link: "https://nodejs.org/en/docs/", name: "Node.js" },
    { Logo: ExpressLogo, link: "https://expressjs.com/", name: "Express" },
    { Logo: TailwindLogo, link: "https://tailwindcss.com/docs", name: "Tailwind CSS" },
    { Logo: HTMLLogo, link: "https://developer.mozilla.org/en-US/docs/Web/HTML", name: "HTML" },
    { Logo: CSSLogo, link: "https://developer.mozilla.org/en-US/docs/Web/CSS", name: "CSS" },
    { Logo: GitHubLogo, link: "https://docs.github.com/en", name: "GitHub" },
    { Logo: JavaLogo, link: "https://docs.oracle.com/javase/8/docs/", name: "Java" },
    { Logo: PostgresqlLogo, link: "https://www.postgresql.org/docs/", name: "PostgreSQL" },
    { Logo: MongoDBLogo, link: "https://www.mongodb.com/docs/", name: "MongoDB" },
    { Logo: SpringBootLogo, link: "https://spring.io/projects/spring-boot", name: "Spring Boot" },
    { Logo: DockerLogo, link: "https://docs.docker.com/", name: "Docker" },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid" role="list">
                {skills.map(({ Logo, link, name }, i) => (
                    <div className="skill-card" role="listitem" key={i}>
                        <SkillIcon Logo={Logo} link={link} alt={name} className="skill-logo" />
                    </div>
                ))}
            </div>
        </section>
    );
}
