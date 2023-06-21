import { memo } from 'react';
import {
    FaHtml5,
    FaReact,
    FaVuejs,
    FaCss3Alt,
    FaGitAlt,
    FaFigma,
} from 'react-icons/fa';
import {
    TbBrandNuxt,
    TbBrandJavascript,
    TbBrandTypescript,
} from 'react-icons/tb';
import { SiNpm, SiWebpack } from 'react-icons/si';

// type SkillIconType = 'scss' | 'react' | 'vue' | 'nuxt';

const IconTag: Record<string, JSX.Element> = {
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    scss: <FaCss3Alt />,
    javascript: <TbBrandJavascript />,
    typescript: <TbBrandTypescript />,
    react: <FaReact />,
    vue: <FaVuejs />,
    nuxt: <TbBrandNuxt />,
    npm: <SiNpm />,
    webpack: <SiWebpack />,
    git: <FaGitAlt />,
    figma: <FaFigma />,
};

export const SkillIcon = memo((props: { icon: string }) => {
    const { icon } = props;
    return IconTag[icon];
});
