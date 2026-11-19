import { useEffect } from 'react';
import { usePage } from '../contexts/PageContext';
import { useLanguage } from '../contexts/LanguageContext';
import AboutIntro from '../components/AboutIntro';
import AboutStack from '../components/AboutStack';
import AboutPath from '../components/AboutPath';
import AboutOutsideCode from '../components/AboutOutsideCode';
import AboutLinks from '../components/AboutLinks';

export default function AboutPage() {
    const { setHomePage } = usePage();
    const { t } = useLanguage();

    useEffect(() => {
        setHomePage(false);
    }, []);

    return (
        <>
            <AboutIntro title={t.about.title} />
            <AboutStack />
            <AboutPath />
            <AboutOutsideCode />
            <AboutLinks />
        </>
    );
}