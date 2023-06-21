import { ProjectSchema } from '../../../../entities/Project';

export interface SkillSchema {
    name: string;
    class: string;
    icon?: string;
}
export interface AboutSchema {
    name: string;
    title: string;
    description?: string;
    image?: string;
}
export interface ExperienceSchema {
    id: string;
    dateStart: string;
    dateEnd: string;
    company: string;
    site: string;
    description?: string;
}

export interface ProfileSchema {
    about: AboutSchema;
    skills: SkillSchema[];
    projects: ProjectSchema[];
    experiences: ExperienceSchema[];
}
