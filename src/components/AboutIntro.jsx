export default function AboutIntro({ text }) {

    return (

        <div className=" d-flex gap-5 mb-5">
            <p>{text.p}</p>
            <img className=" w-25" src="/pictures/foto_di_me_2.jpg" alt="Foto Personale" />
        </div>

    )
}