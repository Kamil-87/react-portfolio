import { classNames } from '../../../../shared/lib/classNames/classNames'
import cls from './Experience.module.scss'
import { Section } from '../../../../shared/ui/Section'

export const Experience = () => {
    return <Section className={classNames(cls.Experience, {}, [])}>Experience</Section>
}
