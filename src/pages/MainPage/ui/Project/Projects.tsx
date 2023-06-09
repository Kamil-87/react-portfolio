import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './Projects.module.scss';
import { Section } from '../../../../shared/ui/Section';
import { Text } from '../../../../shared/ui/Text';
import { HStack, VStack } from '../../../../shared/ui/Stack';
import { Card } from '../../../../shared/ui/Card';
import { Skeleton } from '../../../../shared/ui/Skeleton';
import { AppImage } from '../../../../shared/ui/AppImage';
import userImg from '../../../../shared/assets/images/kamil-kuchaev.jpg';

export const Projects = () => {
    const article = {
        id: '1',
        title: 'Header',
        description: 'description',
        img: '',
        date: '',
    };

    return (
        <Section className={classNames(cls.Projects, {}, [])}>
            <VStack max gap="32" align={'center'}>
                <Text title="Projects" bold />

                <div className={classNames(cls.list)}>
                    <Card padding="24" border="partial" variant="outlined">
                        <AppImage
                            fallback={<Skeleton width="100%" height={250} />}
                            src={userImg}
                            className={cls.img}
                            alt={article.title}
                        />
                        <div className={cls.header}>
                            <Text text={article.date} className={cls.date} />
                            <Text text={article.title} className={cls.title} />
                            <Text
                                text={article.description}
                                className={cls.description}
                            />
                        </div>
                    </Card>
                    <Card padding="24" border="partial" variant="outlined">
                        <AppImage
                            fallback={<Skeleton width="100%" height={250} />}
                            src={userImg}
                            className={cls.img}
                            alt={article.title}
                        />
                        <div className={cls.header}>
                            <Text text={article.date} className={cls.date} />
                            <Text text={article.title} className={cls.title} />
                            <Text
                                text={article.description}
                                className={cls.description}
                            />
                        </div>
                    </Card>
                    <Card padding="24" border="partial" variant="outlined">
                        <AppImage
                            fallback={<Skeleton width="100%" height={250} />}
                            src={userImg}
                            className={cls.img}
                            alt={article.title}
                        />
                        <div className={cls.header}>
                            <Text text={article.date} className={cls.date} />
                            <Text text={article.title} className={cls.title} />
                            <Text
                                text={article.description}
                                className={cls.description}
                            />
                        </div>
                    </Card>
                    <Card padding="24" border="partial" variant="outlined">
                        <AppImage
                            fallback={<Skeleton width="100%" height={150} />}
                            src={userImg}
                            className={cls.img}
                            alt={article.title}
                        />
                        <div className={cls.header}>
                            <Text text={article.date} className={cls.date} />
                            <Text text={article.title} className={cls.title} />
                            <Text
                                text={article.description}
                                className={cls.description}
                            />
                        </div>
                    </Card>
                </div>
            </VStack>
        </Section>
    );
};
