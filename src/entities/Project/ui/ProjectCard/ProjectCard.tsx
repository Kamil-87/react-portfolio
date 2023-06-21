import { memo } from 'react';
import { Card } from '../../../../shared/ui/Card';
import { AppImage } from '../../../../shared/ui/AppImage';
import { Skeleton } from '../../../../shared/ui/Skeleton';
import portfolioImg from '../../../../shared/assets/images/my-portfolio.jpg';
import cls from './ProjectCard.module.scss';
import { Text } from '../../../../shared/ui/Text';
import { Project } from '../../model/types/Project';

export interface ProjectListItemProps {
    project: Project;
}

export const ProjectCard = memo((props: ProjectListItemProps) => {
    const { project } = props;
    const urlImg = `../../../../shared/assets/images/${project.image}`;

    console.log('urlImg', urlImg);

    return (
        <Card className={cls.ProjectCard} padding="0">
            <div className={cls.imgWrap}>
                <AppImage
                    fallback={<Skeleton width="100%" height="250px" />}
                    src={portfolioImg}
                    className={cls.img}
                    alt={project.title}
                />
            </div>
            <div className={cls.titleContent}>
                <Text
                    size="s"
                    align="center"
                    title={project.title}
                    className={cls.title}
                />
                <hr className={cls.hr} />
            </div>

            <div className={cls.bodyContent}>
                <Text text={project.description} className={cls.description} />
            </div>

            <div className={cls.footerContent}>
                <div>
                    <div className={cls.stackTitle}>СТЕК</div>
                    <ul className={cls.stackList}>
                        {project.tags?.map((tag) => {
                            return (
                                <li key={tag} className={cls.stackItem}>
                                    {tag}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <ul className={cls.utilityList}>
                    {project.source ? (
                        <a href={project.source} className={cls.utilityLink}>
                            Код
                        </a>
                    ) : (
                        ''
                    )}
                    {project.visit ? (
                        <a href={project.visit} className={cls.utilityLink}>
                            Сайт
                        </a>
                    ) : (
                        ''
                    )}
                </ul>
            </div>
        </Card>
    );
});
