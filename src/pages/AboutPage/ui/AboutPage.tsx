import { useTranslation } from 'react-i18next';
import { Counter } from 'src/entities/Counter';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('О сайте')}
      <Counter />
    </div>
  );
};

export default AboutPage;
