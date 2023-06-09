// import { Promo } from './Promo/Promo';
import { About } from './About/About';
import { Experience } from './Experience/Experience';
import { Skills } from './Skills/Skills';
import { Projects } from './Project/Projects';
import { memo, useEffect, useState } from 'react';
import { AboutSchema, ProfileSchema } from '../model/types/MainPageShema';

const initAbout: AboutSchema = {
    name: '',
    title: '',
    description: '',
    image: '',
};

export const MainPage = memo(() => {
    const [profile, setProfile] = useState<ProfileSchema>({
        about: initAbout,
        skills: [],
    });

    const fetchProfile = () => {
        fetch('/portfolio.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProfile(data);
            });
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    console.log('profile', profile);

    return (
        <main className="main">
            {/*<Promo />*/}
            <About />
            <Projects />
            <Skills skills={profile.skills} />
            <Experience />
        </main>
    );
});
