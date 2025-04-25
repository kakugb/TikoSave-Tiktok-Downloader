'use client';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>{t('footerText')}</p>
        <div className="mt-2">
          <Link href="/contactus" className="mx-2">
            {t('contactUs')}
          </Link>
          <Link href="/termofuse" className="mx-2">
            {t('termsOfUse')}
          </Link>
          <Link href="/privacypolicy" className="mx-2">
            {t('privacyPolicy')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;