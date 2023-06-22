import { ProjectSchema } from '../../../../entities/Project';

interface SourceI {
    label: string;
    value: string;
}

interface ProjectI {
    name: string;
    source: string;
}

export interface SkillSchema {
    name: string;
    class: string;
    icon?: string;
}
export interface AboutSchema {
    name: string;
    vocation: string;
    image?: string;
    place?: SourceI;
    phone?: SourceI;
    telegram?: SourceI;
    github?: SourceI;
}
export interface ExperienceSchema {
    id: string;
    dateStart: string;
    dateEnd: string;
    company: string;
    visit: string;
    description?: string;
    projects?: ProjectI[];
}

export interface ProfileSchema {
    about: AboutSchema;
    skills: SkillSchema[];
    projects: ProjectSchema[];
    experiences: ExperienceSchema[];
}
