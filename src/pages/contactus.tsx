import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ContactUs: React.FC = () => {
  const { t } = useTranslation('contactus');

  return (
    <div>
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p>{t('description')}</p>
      <div className="mt-4">
        <p>{t('email')}: support@example.com</p>
        <p>{t('phone')}: +123-456-7890</p>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contactus'])),
    },
  };
}

export default ContactUs;