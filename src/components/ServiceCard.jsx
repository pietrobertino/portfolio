import { useRef } from 'react';

export default function ServiceCard({ serviceObj }) {
    const videoRef = useRef(null);

    const play = () => videoRef.current?.play()?.catch(() => { });
    const stop = () => {
        const v = videoRef.current;
        if (!v) return;
        v.pause();
        v.currentTime = 0;
    };

    return (
        <div className="project-card service-card" onMouseEnter={play} onMouseLeave={stop}>
            <div className="project-thumb">
                <video
                    ref={videoRef}
                    src={`/videos/${serviceObj.video}`}
                    aria-label={serviceObj.title}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                />
            </div>
            <div className="card-body">
                <h3>{serviceObj.title}</h3>
                <p className="desc">{serviceObj.p}</p>
            </div>
        </div>
    );
}