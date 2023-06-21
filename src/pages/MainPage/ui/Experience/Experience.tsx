import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './Experience.module.scss';
import { Card } from '../../../../shared/ui/Card';
import { Section } from '../../../../shared/ui/Section';
import { Text } from '../../../../shared/ui/Text';
import { VStack } from '../../../../shared/ui/Stack';
import { memo } from 'react';
import { ExperienceSchema } from '../../model/types/MainPageShema';
import { SectionDivider } from '../../../../shared/ui/SectionDivider';

export const Experience = memo((props: { experiences: ExperienceSchema[] }) => {
    const { experiences } = props;

    return (
        <Section className={classNames(cls.Experience, {}, [])}>
            <VStack max gap="32" align={'center'}>
                <SectionDivider />
                <Text title="Опыт работы" bold />

                <VStack max gap="16">
                    {experiences.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                variant="outlined"
                                padding="24"
                                fullWidth
                            >
                                <VStack gap="16">
                                    <Text title={item.company} size="s" bold />
                                    <Text
                                        size="s"
                                        text={`${item.dateStart} - ${item.dateEnd}`}
                                    />
                                    <a href={item.site}>{item.site}</a>
                                    <div>{item.description}</div>
                                </VStack>
                            </Card>
                        );
                    })}
                </VStack>
            </VStack>
        </Section>
    );
});
