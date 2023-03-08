import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/ClassNames';
import DarkIcon from 'shared/assets/icons/theme-dark-1.svg';
import LightIcon from 'shared/assets/icons/theme-light-1.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string,
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      { theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
    </Button>
  );
});
