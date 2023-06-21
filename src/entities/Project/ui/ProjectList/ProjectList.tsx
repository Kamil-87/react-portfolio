import { memo } from 'react';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './ProjectList.module.scss';
import { Project } from '../../model/types/Project';
import { Text } from '../../../../shared/ui/Text';
import { ProjectCard } from '../ProjectCard/ProjectCard';

interface ProjectListProps {
    projects?: Project[];
}

export const ProjectList = memo((props: ProjectListProps) => {
    const { projects } = props;

    if (!projects?.length) {
        return (
            <div className={classNames('', {}, [])}>
                <Text size="m" title="Проектов нет" />
            </div>
        );
    }

    return (
        <div className={cls.ProjectList}>
            {projects.map((project) => {
                return <ProjectCard key={project.id} project={project} />;
            })}
        </div>
    );
});
