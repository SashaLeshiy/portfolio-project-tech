import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Homeicon from 'shared/assets/icons/home_icon.svg';
import { memo } from 'react';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/Items';

interface SidebarItemProps {
  item: SidebarItemType,
  collapsed: boolean,
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});
