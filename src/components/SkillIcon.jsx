export default function SkillIcon({ Logo, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Logo className="skill-logo" />
        </a>
    );
}
