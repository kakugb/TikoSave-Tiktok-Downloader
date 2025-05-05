import { Metadata } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tmate.cc',
  description: 'Learn how Tmate.cc handles your personal and non-personal information, cookies, and data usage in our Privacy Policy.',
  keywords: 'privacy policy, Tmate.cc, TikTok video downloader, data protection, cookies, user information',
  robots: 'index, follow',
  openGraph: {
    title: 'Privacy Policy | Tmate.cc',
    description: 'Understand Tmate.cc’s Privacy Policy, including how we handle personal information, cookies, and advertising data.',
    url: 'https://www.tmate.cc/privacy-policy',
    type: 'website',
    siteName: 'Tmate.cc',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Tmate.cc',
    description: 'Review Tmate.cc’s Privacy Policy to learn about data handling, cookies, and user privacy.',
  },
};

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation('privacypolicy');

  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-600 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <p className="text-base text-gray-500 mt-2">
            {t('last_revised')}: <span className="font-medium">{t('revision_date')}</span>
          </p>
        </header>

        <article className="space-y-12 text-base sm:text-lg leading-relaxed bg-white p-8 rounded-lg shadow-lg">
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">
              {t('intro_title')}
            </h2>
            <p>{t('intro')}</p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">
              {t('personal_info_title')}
            </h2>
            <p>{t('personal_info')}</p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">
              {t('non_personal_info_title')}
            </h2>
            <p>{t('non_personal_info')}</p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">
              {t('cookies_title')}
            </h2>
            <p>{t('cookies')}</p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">
              {t('data_usage_title')}
            </h2>
            <p>{t('data_usage')}</p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">
              {t('advertising_title')}
            </h2>
            <p>{t('advertising')}</p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">
              {t('google_adsense_title')}
            </h2>
            <p>{t('google_adsense')}</p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">
              {t('policy_changes_title')}
            </h2>
            <p>{t('policy_changes')}</p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">
              {t('acceptance_title')}
            </h2>
            <p>{t('acceptance')}</p>
          </section>
        </article>
      </div>
    </section>
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