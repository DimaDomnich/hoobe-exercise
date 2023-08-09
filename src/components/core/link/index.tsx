import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
} & HTMLAnchorElement &
  any;

const Link = ({ className, children, ...rest }: Props) => {
  return (
    <a className={clsx(styles.a, className)} {...rest}>
      {children}
    </a>
  );
};

export default Link;
