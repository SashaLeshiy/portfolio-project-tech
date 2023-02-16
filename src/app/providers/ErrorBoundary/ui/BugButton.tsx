import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string,
}

export const BugButton = ({ className }: BugButtonProps) => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow} className={classNames('', {}, [className])}>
      {t('выкинуть ошибку')}
    </Button>
  );
};