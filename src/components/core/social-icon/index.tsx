import { useContext, useMemo } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { ThemeContext } from '@/hooks/useTheme';
import styles from './styles.module.scss';
import { getSocialsImagePath } from './utils';

type Props = {
  className?: string;
  alt: string;
  src: string;
  link: string;
};

const SocialIcon = ({ className, link, alt, src, ...rest }: Props) => {
  const resultSrc = useMemo(() => getSocialsImagePath(src), [src]);
  const theme = useContext(ThemeContext);

  return (
    <a
      className={clsx(styles.wrapper, className)}
      href={link}
      target='_blank'
      {...rest}
    >
      <Image
        src={resultSrc}
        alt={alt}
        width={24}
        height={24}
        style={{
          filter: theme === 'dark' ? 'invert(100%)' : 'invert(0)',
        }}
      />
    </a>
  );
};

export default SocialIcon;
