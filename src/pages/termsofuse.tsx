import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const TermsOfUse: React.FC = () => {
  const { t } = useTranslation('termofuse');

  return (
    <div>
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'termofuse'])),
    },
  };
}

export default TermsOfUse;