import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './Skills.module.scss';
import { Section } from '../../../../shared/ui/Section';
import { VStack } from '../../../../shared/ui/Stack';
import { Text } from '../../../../shared/ui/Text';
import { SkillSchema } from '../../model/types/MainPageShema';
import { SectionDivider } from '../../../../shared/ui/SectionDivider';
import { SkillIcon } from '../../../../entities/Skill/SkillIcon';

export const Skills = (props: { skills: SkillSchema[] }) => {
    const skills = props.skills.map((skill, i) => {
        const icon = <SkillIcon icon={skill.class} />;
        return (
            <div className={cls.skill} key={skill.class}>
                <span className={cls.icon}>{icon}</span>
                <span>{skill.name}</span>
            </div>
        );
    });

    return (
        <Section className={classNames(cls.Skills, {}, [])}>
            <VStack max gap="32" align={'center'}>
                <SectionDivider />
                <Text title="Технологии" bold />

                <div className={cls.list}>{skills}</div>
            </VStack>
        </Section>
    );
};
