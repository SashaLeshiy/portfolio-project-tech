import { classNames } from 'shared/lib/classNames/ClassNames';
import './Loader.scss';

interface LoaderProps {
  className?: string,
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('lds-facebook', {}, [className])}>
    <div />
    <div />
    <div />
  </div>
);
