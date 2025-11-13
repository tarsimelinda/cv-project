export default function SkillIcon({ Logo, link, alt, className }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt ? `${alt} (opens in new tab)` : "Skill link (opens in new tab)"}
            title={alt || "Skill"}
            className={className}
        >
            <Logo className="skill-logo" aria-hidden="true" title={alt} />
        </a>
    );
}
