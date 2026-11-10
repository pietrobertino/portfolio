import skills from '../data/skills';

export default function AboutStack() {

    return (

        <div>
            <h5 className=" pt-5">Le tecnologie che uso: </h5>
            {skills.map(skill => (
                <span key={skill}>{skill} </span>
            ))}
        </div>


    )
}