export interface SkillSchema {
    name: string
    class?: string
}
export interface AboutSchema {
    name: string
    title: string
    description?: string
    image?: string
}

export interface ProfileSchema {
    about: AboutSchema
    skills: SkillSchema[]
}
