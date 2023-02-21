import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavbarProps {
  className?: string,
}

export const NavBar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        /
      </div>
    </div>
  );
};
