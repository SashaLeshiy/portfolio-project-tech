import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string,
  short?: boolean,
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleLang}
      className={classNames('', {}, [className])}
    >
      {t(short ? 'короткий язык' : 'Язык')}
    </Button>
  );
};
