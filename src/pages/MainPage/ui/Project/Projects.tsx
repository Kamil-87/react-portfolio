import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './Projects.module.scss';
import { Section } from '../../../../shared/ui/Section';
import { Text } from '../../../../shared/ui/Text';
import { VStack } from '../../../../shared/ui/Stack';
import { ProjectList, ProjectSchema } from '../../../../entities/Project';
import { SectionDivider } from '../../../../shared/ui/SectionDivider';

export const Projects = (props: { projects: ProjectSchema[] }) => {
    return (
        <Section className={classNames(cls.Projects, {}, [])}>
            <VStack max gap="32" align={'center'}>
                <SectionDivider />
                <Text title="Проекты" bold />

                <ProjectList projects={props.projects} />
            </VStack>
        </Section>
    );
};
