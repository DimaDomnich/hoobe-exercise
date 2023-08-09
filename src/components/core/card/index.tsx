import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
};

const Card = ({ className, children, title, icon, ...rest }: Props) => {
  return (
    <div className={clsx(styles.wrapper, className)} {...rest}>
      {children}
      <div className={styles.info}>
        {title && <span className={styles.title}>{title}</span>}
        {icon}
      </div>
    </div>
  );
};

export default Card;
