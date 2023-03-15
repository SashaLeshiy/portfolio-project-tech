import React from 'react';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about_icon.svg';
import Homeicon from 'shared/assets/icons/home_icon.svg';
import ProfileIcon from 'shared/assets/icons/profile_icon.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RouterPath.main,
    Icon: Homeicon,
    text: 'Главная',
  },
  {
    path: RouterPath.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },
  {
    path: RouterPath.profile,
    Icon: ProfileIcon,
    text: 'Профайл',
    authOnly: true,
  },
];
