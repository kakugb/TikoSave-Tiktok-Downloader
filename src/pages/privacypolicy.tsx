import { Metadata } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const metadata: Metadata = {
  title: 'Privacy Policy | YourSiteName',
  description: 'Read our Privacy Policy to understand how YourSiteName handles your personal information, cookies, and data usage.',
  robots: 'index, follow',
};

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation('privacypolicy');

  return (
    <>
      <section className="bg-white text-gray-900   py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-500 mb-8">
            {t('title')}
          </h1>

          <p className="text-lg text-center mb-2">
            {t('last_revised')}: <span className="font-medium">{t('revision_date')}</span>
          </p>

          <article className="mt-8 space-y-6 text-lg leading-relaxed">
            <p>{t('intro')}</p>
            <p>{t('age_restriction')}</p>

            <h2 className="text-2xl font-semibold mt-8 text-teal-400">{t('data_collected_title')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{t('data_collected_using_service_title')}:</strong> {t('data_collected_using_service')}</li>
              <li><strong>{t('data_collected_usage_info_title')}:</strong> {t('data_collected_usage_info')}</li>
              <li><strong>{t('data_collected_uploaded_content_title')}:</strong> {t('data_collected_uploaded_content')}</li>
              <li><strong>{t('data_collected_correspondence_title')}:</strong> {t('data_collected_correspondence')}</li>
              <li><strong>{t('data_collected_cookies_title')}:</strong> {t('data_collected_cookies')}</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 text-teal-400">{t('data_usage_title')}</h2>
            <p>{t('data_usage_purpose')}</p>
            <p>{t('data_usage_sharing')}</p>

            <h2 className="text-2xl font-semibold mt-8 text-teal-400">{t('disclosures_title')}</h2>
            <p>{t('disclosures_purpose')}</p>

            <h2 className="text-2xl font-semibold mt-8 text-teal-400">{t('security_title')}</h2>
            <p>{t('security_notice')}</p>
          </article>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'privacypolicy'])),
    },
  };
}

export default PrivacyPolicy;