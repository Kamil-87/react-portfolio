import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cls from './Section.module.scss';
import { classNames, Mods } from '../../lib/classNames/classNames';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface SectionProps extends DivProps {
  className?: string;
  children: ReactNode;
  accent?: boolean;
}

export const Section = (props: SectionProps) => {
  const { className, children, accent, ...otherProps } = props;
  const classes = ['container', className];

  const mods: Mods = {
    [cls.accent]: accent,
  };

  return (
    <section className={classNames(cls.Section, mods, classes)} {...otherProps}>
      {children}
    </section>
  );
};
