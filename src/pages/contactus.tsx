import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ContactUs: React.FC = () => {
  const { t } = useTranslation('contactus');

  return (
    <>
      <h1 className="text-5xl text-center text-teal-500 py-4 font-bold">{t('title')}</h1>
      <div className="w-7xl mx-auto">
        <p className="text-xl">{t('description')}</p>
        <p className="text-xl mt-4">{t('faq_instruction')}</p>
        <p className="text-xl mt-4">{t('email_instruction')}: {t('email')}</p>
      </div>
    </>
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