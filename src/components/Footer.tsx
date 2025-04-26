'use client';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      {/* Footer Links */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left mt-6">
        <div>
          <h3 className="font-bold mb-2 text-lg text-gray-800">{t('legal', 'Legal')}</h3>
          <ul className="grid grid-cols-1 space-y-1 font-semibold text-gray-600">
            <li>
              <Link href="/privacypolicy">{t('privacyPolicy')}</Link>
            </li>
            <li>
              <Link href="/termofuse">{t('termsOfUse')}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-lg text-gray-800">{t('support', 'Support')}</h3>
          <ul className="space-y-1 font-semibold text-gray-600">
            <li>
              <Link href="/contactus">{t('contactUs')}</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 mb-5 px-4 text-gray-500">
        © 2025 TikoSave.com — {t('poweredBy', 'Powered by TikoSave')}
      </div>
    </>
  );
};

export default Footer;
