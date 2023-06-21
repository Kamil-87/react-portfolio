import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './Promo.module.scss';
import { Section } from '../../../../shared/ui/Section';
import { BackgroundAnimation } from '../../../../shared/assets/iconComponents/BackgroundAnimation';

interface PromoProps {
    onClick?: () => void;
}

export const Promo = ({ onClick }: PromoProps) => {
    return (
        <Section className={classNames(cls.Promo, {}, [])}>
            <div className={cls.grid}>
                <div className={cls.contentWrap}>
                    <div className={cls.content}>
                        <h1 className={cls.title}>
                            Добро Пожаловать <br />
                            Это Мое Портфолио
                        </h1>
                        <p className={cls.description}>
                            Цель приложения - представить мои проекты и навыки
                            разработки
                        </p>
                        <div className={cls.wrapBtn} onClick={onClick}>
                            Узнать больше
                            <button
                                aria-label="Узнать больше"
                                className={cls.button}
                            >
                                Узнать больше
                            </button>
                        </div>
                    </div>
                </div>
                <BackgroundAnimation />
            </div>
        </Section>
    );
};
