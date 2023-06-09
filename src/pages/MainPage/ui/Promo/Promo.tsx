import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './Promo.module.scss';
import { Section } from '../../../../shared/ui/Section';

export const Promo = () => {
  return <Section className={classNames(cls.Promo, {}, [])}>Promo</Section>;
};
