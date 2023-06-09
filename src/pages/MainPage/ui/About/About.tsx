import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './About.module.scss';
import { Section } from '../../../../shared/ui/Section';
import { AppImage } from '../../../../shared/ui/AppImage';
import userImg from '../../../../shared/assets/images/kamil-kuchaev.jpg';
import { Avatar } from '../../../../shared/ui/Avatar';
import { Text } from '../../../../shared/ui/Text';
import { HStack, VStack } from '../../../../shared/ui/Stack';

export const About = () => {
    return (
        <Section className={classNames(cls.About, {}, [])}>
            <VStack gap="16">
                <div className={classNames(cls.container, {}, [])}>
                    <Avatar src={userImg} alt="Kamil Kuchaev" size={200} />

                    <VStack gap="16">
                        <Text title="Кучаев Камиль" bold />
                        <Text text="Место проживания: г. Уфа" />
                        <a href="tel:89033510154" type="tel">
                            Телефон: 89033510154
                        </a>
                        <a href="https://t.me/kamilkuchaev">
                            Телеграм: @kamilkuchaev
                        </a>
                    </VStack>
                </div>
            </VStack>
        </Section>
    );
};
