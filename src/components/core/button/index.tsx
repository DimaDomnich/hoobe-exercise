import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Button = ({ className, children, ...rest }: Props) => {
  return (
    <button className={clsx(styles.btn, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
