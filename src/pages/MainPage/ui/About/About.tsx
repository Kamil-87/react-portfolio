import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './About.module.scss';
import { Section } from '../../../../shared/ui/Section';
import userImg from '../../../../shared/assets/images/kamil-kuchaev.jpg';
import { Avatar } from '../../../../shared/ui/Avatar';
import { Text } from '../../../../shared/ui/Text';
import { HStack, VStack } from '../../../../shared/ui/Stack';
import { SectionDivider } from '../../../../shared/ui/SectionDivider';

export const About = () => {
    return (
        <Section className={classNames(cls.About, {}, [])}>
            <VStack max gap="32" align={'center'}>
                <SectionDivider />
                <Text title="Обо мне" bold />

                <HStack max gap="32" className={classNames('', {}, [])}>
                    <Avatar src={userImg} alt="Kamil Kuchaev" size={200} />

                    <VStack gap="16">
                        <Text title="Кучаев Камиль" bold />
                        <div className={cls.label}>
                            <Text
                                className={cls.labelText}
                                text="Место проживания:"
                            />
                            <Text text="г. Уфа" />
                        </div>

                        <div className={cls.label}>
                            <Text className={cls.labelText} text="Телефон:" />
                            <a href="tel:89033510154" type="tel">
                                8(982)358-83-78
                            </a>
                        </div>

                        <div className={cls.label}>
                            <Text className={cls.labelText} text="Телеграм:" />
                            <a href="https://t.me/kamilkuchaev">
                                @kamilkuchaev
                            </a>
                        </div>
                    </VStack>
                </HStack>
            </VStack>
        </Section>
    );
};
