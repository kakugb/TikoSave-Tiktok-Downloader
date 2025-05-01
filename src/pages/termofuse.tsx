import { Metadata } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const metadata: Metadata = {
  title: 'Terms of Use | YourSiteName',
  description: 'Read the Terms of Use for YourSiteName. Understand your rights, responsibilities, and our legal disclaimers when using our website.',
  robots: 'index, follow',
};

const TermOfUse: React.FC = () => {
  const { t } = useTranslation('termofuse');

  return (
    <section className="bg-white text-gray-900  py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-500 mb-10">
          {t('title')}
        </h1>

        <article className="space-y-10 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-teal-400">{t('agreement_title')}</h2>
            <p>{t('agreement_description')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">{t('jurisdiction_title')}</h2>
            <p>{t('jurisdiction_description')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">{t('license_title')}</h2>
            <p>{t('license_description')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('license_restriction_1')}</li>
              <li>{t('license_restriction_2')}</li>
              <li>{t('license_restriction_3')}</li>
              <li>{t('license_restriction_4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">{t('termination_title')}</h2>
            <p>{t('termination_description')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">{t('advertisers_title')}</h2>
            <p>{t('advertisers_description')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">{t('disclaimer_title')}</h2>
            <p>{t('disclaimer_description')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">{t('liability_title')}</h2>
            <p>{t('liability_description')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">{t('indemnification_title')}</h2>
            <p>{t('indemnification_description')}</p>
          </section>
        </article>
      </div>
    </section>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'termofuse'])),
    },
  };
}

export default TermOfUse;