export default function PathCard({ info }) {

    return (
        <div>
            <h4>{info.title}</h4>
            <h5>{info.year}</h5>
            <h5>{info.type}</h5>
            <p>{info.p}</p>
        </div>
    )
}