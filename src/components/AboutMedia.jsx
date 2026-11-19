export default function AboutMedia({ src, alt = '', icon: Icon, label, tag }) {
    return (
        <div className="about-media">
            {src ? (
                <img src={src} alt={alt} loading="lazy" />
            ) : (
                <div className="about-media__placeholder">
                    {Icon && <Icon size={72} />}
                    <span>{label}</span>
                </div>
            )}
            {tag && <span className="about-media__tag">{tag}</span>}
        </div>
    );
}