export default function TimelineItem({ title, subtitle, isLeft }) {
    return (
        <div className={`timeline-item ${isLeft ? "left" : "right"}`}>
            {isLeft && (
                <div className="timeline-content text-right">
                    <h3 className="title">{title}</h3>
                    <p className="subtitle">{subtitle}</p>
                </div>
            )}

            <div className="timeline-circle"></div>

            {!isLeft && (
                <div className="timeline-content text-left">
                    <h3 className="title">{title}</h3>
                    <p className="subtitle">{subtitle}</p>
                </div>
            )}
        </div>
    );
}
