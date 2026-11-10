import { useEffect } from "react"
import { usePage } from "../contexts/PageContext"
import { useLanguage } from "../contexts/LanguageContext";
import AboutIntro from "../components/AboutIntro";
import AboutLinks from "../components/AboutLinks";
import AboutPath from "../components/AboutPath";
import AboutWhatILike from "../components/AboutWhatILike";
import AboutOutsideCode from "../components/AboutOutsideCode";
import AboutStack from "../components/AboutStack";

export default function AboutPage() {

    const { setHomePage } = usePage();
    const { t } = useLanguage();

    const text = t.about;

    useEffect(() => {
        setHomePage(false);
    }, [])


    return (
        <div className="container">
            <h1 className=" text-center my-5">{text.title}</h1>
            <AboutLinks />
            <AboutIntro text={text.intro} />
            <AboutPath />
            <AboutWhatILike />
            <AboutOutsideCode />
            <AboutStack />
        </div>
    )
}