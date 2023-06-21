import { Promo } from './Promo/Promo';
import { About } from './About/About';
import { Experience } from './Experience/Experience';
import { Skills } from './Skills/Skills';
import { Projects } from './Project/Projects';
import { memo, useEffect, useRef, useState } from 'react';
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
        experiences: [],
        projects: [],
    });

    const projectRef = useRef<HTMLDivElement>(null);

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

    const handleScroll = () => {
        projectRef.current?.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    };

    return (
        <main className="main">
            <Promo onClick={handleScroll} />
            <div ref={projectRef}>
                <Projects projects={profile.projects} />
                <Skills skills={profile.skills} />
                <Experience experiences={profile.experiences} />
                <About />
            </div>
        </main>
    );
});
