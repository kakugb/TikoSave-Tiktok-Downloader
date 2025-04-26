"use client";
import React, { useEffect, useState } from "react";
import { reviews, faqData, faqAnswers } from "../utils/data";
import { ClipboardPaste } from "lucide-react";
import Image from "next/image";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {CommonTranslations} from '../types/translations'


const Home: React.FC = () => {
  const { t } = useTranslation("common");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="h-96 flex flex-col items-center justify-center text-center mt-1 py-4 relative bg-teal-400">
        <h2 className="text-3xl font-bold text-white">{t("heroSection.title")}</h2>
        <p className="hidden md:flex text-white text-md mt-2">{t("heroSection.description")}</p>
        <div className="block md:flex mt-4 w-full px-4 md:px-0 max-w-2xl lg:max-w-3xl xl:max-w-5xl transition-all duration-300">
          <div className="flex w-full items-center bg-white px-4 rounded-xl md:rounded-l-xl md:rounded-r-none">
            <input
              type="text"
              placeholder={t("heroSection.inputPlaceholder")}
              className="w-full pl-2 outline-none text-black py-5"
            />
            <button className="flex items-center space-x-2 my-auto rounded-xl text-black font-semibold transition-all mr-2 hover:text-blue-600 border border-gray-300 hover:border-blue-400 px-4 py-2 shadow-sm hover:shadow-md bg-white">
              <ClipboardPaste size={18} />
              <span>{t("heroSection.pasteButton")}</span>
            </button>
          </div>
          <div className="w-full md:w-auto bg-none md:bg-white flex items-center justify-center p-2 rounded-b-xl md:rounded-r-xl md:rounded-l-none">
            <button className="w-full md:w-52 bg-blue-600 py-3 text-white px-6 font-semibold cursor-pointer rounded-xl hover:bg-blue-700 transition-all">
              {t("heroSection.downloadButton")}
            </button>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div>
        <h1 className="w-full mt-9 text-3xl font-semibold text-center text-gray-700">
          {t("appDownloadSection.title")}
        </h1>
        <p className="text-gray-600 text-center mt-4 font-semibold">{t("appDownloadSection.description")}</p>
        <div className="w-full flex justify-center mt-5">
          <Image src="/playstoreImg.webp" alt="playstore image" width={350} height={350} />
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full max-w-7xl bg-gray-50 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-6 text-2xl sm:text-3xl font-semibold text-center text-gray-700 leading-tight">
          {t("introductionSection.title")}
        </h1>
        {(t("introductionSection.paragraphs", { returnObjects: true }) as string[]).map((paragraph, index) => (
          <p key={index} className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      {/* How to Download Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
    {t("howToDownloadSection.title")}
  </h1>
  <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">{t("howToDownloadSection.description")}</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
    {(
      t("howToDownloadSection.steps", { returnObjects: true }) as { title: string; description: string; image: string }[]
    ).map((step, index) => (
      <div key={index} className="p-6 rounded-lg shadow-lg flex flex-col items-center">
        <Image src={step.image} alt={`Step ${index + 1} Icon`} width={52} height={52} className="mb-2" />
        <h3 className="text-xl font-bold mt-2 text-gray-700">{step.title}</h3>
        <p className="mt-2 text-center text-gray-600 font-poppins">{step.description}</p>
      </div>
    ))}
  </div>
</div>

      {/* Why Need Downloader Section */}
      <div className="w-full max-w-7xl bg-gray-100 mx-auto px-4 sm:px-6 lg:px-8 py-8 rounded-xl">
        <h1 className="w-full mt-6 text-3xl sm:text-4xl font-bold text-center text-gray-700 leading-tight">
          {t("whyNeedDownloaderSection.title")}
        </h1>
        {(t("whyNeedDownloaderSection.paragraphs", { returnObjects: true }) as string[]).map((paragraph, index) => (
          <p key={index} className="mt-4 leading-7 text-gray-600 text-base sm:text-md text-center">
            {paragraph}
          </p>
        ))}
        
      </div>

      {/* Download on Android Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          {t("downloadOnAndroidSection.title")}
        </h1>
        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">{t("downloadOnAndroidSection.description")}</p>
        <ul className="mt-4 sm:mt-6 ml-4 sm:ml-6 leading-8 text-gray-600 text-base sm:text-lg list-disc list-inside">
          {(t("downloadOnAndroidSection.steps", { returnObjects: true }) as string[]).map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      {/* Download on PC Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          {t("downloadOnPCSection.title")}
        </h1>
        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">{t("downloadOnPCSection.description")}</p>
      </div>

      {/* Download on iOS Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          {t("downloadOnIOSSection.title")}
        </h1>
        {(t("downloadOnIOSSection.paragraphs", { returnObjects: true }) as string[]).map((paragraph, index) => (
          <p key={index} className="mt-3 leading-7 text-gray-600 text-base sm:text-lg">
            {paragraph}
          </p>
        ))}
        <ul className="mt-4 sm:mt-6 ml-4 sm:ml-6 leading-8 text-gray-600 text-base sm:text-lg list-disc list-inside">
          {(t("downloadOnIOSSection.steps", { returnObjects: true }) as string[]).map((step, index) => (
            <li key={index}>{step}</li>
            
          ))}
          
        </ul>
      
      </div>

      {/* Download MP3 Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          {t("downloadMP3Section.title")}
        </h1>
        {(t("downloadMP3Section.paragraphs", { returnObjects: true }) as string[]).map((paragraph, index) => (
          <p key={index} className="mt-3 leading-7 text-gray-600 text-base sm:text-lg">
            {paragraph}
          </p>
        ))}
        <ul className="mt-4 sm:mt-6 ml-4 sm:ml-6 leading-8 text-gray-600 text-base sm:text-lg list-disc list-inside">
          {(t("downloadMP3Section.steps", { returnObjects: true }) as string[]).map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      {/* Pros & Cons Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-4">{t("prosAndConsSection.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold text-green-500 mb-5">{t("prosAndConsSection.pros.title")}</h3>
            <ul className="text-left text-lg mt-2 space-y-4">
              {(t("prosAndConsSection.pros.items", { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="text-green-500 text-2xl mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold text-red-500 mb-5">{t("prosAndConsSection.cons.title")}</h3>
            <ul className="text-left text-lg mt-2 space-y-4">
              {(t("prosAndConsSection.cons.items", { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaTimesCircle className="text-red-500 text-2xl mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          {t("comparisonSection.title")}
        </h1>
        {(t("comparisonSection.paragraphs", { returnObjects: true }) as string[]).map((paragraph, index) => (
          <p key={index} className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
            {paragraph}
          </p>
        ))}
        <ul className="mt-4 sm:mt-6 ml-4 sm:ml-6 leading-10 text-gray-600 text-base sm:text-lg list-disc list-inside">
          {(t("comparisonSection.benefits", { returnObjects: true }) as string[]).map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* User Reviews Section */}
      <div className="w-full md:max-w-7xl mx-auto rounded-md text-black md:px-4 py-8">
        <div className="w-full text-white p-6 text-center rounded-lg shadow-lg">
          <h2 className="text-md md:text-2xl font-bold bg-teal-500 py-6">{t("userReviewsSection.title")}</h2>
          <div className="bg-white text-black p-6 rounded-lg shadow-md shadow-gray-500 transition-transform duration-500 ease-in-out h-36 flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg flex items-center">
              {reviews[currentIndex].name}
              <img src={reviews[currentIndex].flag} alt="flag" className="w-6 h-4 ml-2" />
            </h3>
            <p className="text-yellow-500 text-xl">{reviews[currentIndex].stars}</p>
            <p className="italic text-sm">"{reviews[currentIndex].comment}"</p>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Other Content Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-bold text-gray-600">{t("otherContentSection.title")}</h1>
        <p className="mt-4 leading-7 text-teal-500 font-bold text-base sm:text-2xl">
          {t("otherContentSection.photoSlideshow.title")}
        </p>
        {(t("otherContentSection.photoSlideshow.paragraphs", { returnObjects: true }) as string[]).map(
          (paragraph, index) => (
            <p key={index} className="mt-2 leading-7 text-gray-600 text-base sm:text-md">
              {paragraph}
            </p>
          )
        )}
        <p className="mt-4 leading-7 text-teal-500 font-bold text-base sm:text-2xl">
          {t("otherContentSection.stories.title")}
        </p>
        {(t("otherContentSection.stories.paragraphs", { returnObjects: true }) as string[]).map((paragraph, index) => (
          <p key={index} className="mt-2 leading-7 text-gray-600 text-base sm:text-md">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Responsible Use Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          {t("responsibleUseSection.title")}
        </h1>
        {(t("responsibleUseSection.paragraphs", { returnObjects: true }) as string[]).map((paragraph, index) => (
          <p key={index} className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
            {paragraph}
          </p>
        ))}
        <ul className="mt-4 sm:mt-6 ml-4 sm:ml-6 leading-7 text-gray-600 text-base sm:text-md text-justify">
          {(t("responsibleUseSection.tips", { returnObjects: true }) as { title: string; description: string }[]).map(
            (tip, index) => (
              <li key={index}>
                <h1 className="text-xl font-semibold text-teal-500 my-4">{tip.title}</h1>
                {tip.description}
              </li>
            )
          )}
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-7xl mx-auto px-4 my-10 pb-10 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-600 py-5 rounded-t-lg mb-5">{t("faqSection.title")}</h2>
        <div>
          {faqData.map((question, index) => (
            <div
              key={index}
              className={`border-b ${openFAQ === index ? "border-purple-700" : "border-gray-300"}`}
            >
              <button
                className={`w-full text-left p-4 flex justify-between items-center transition duration-300 rounded-md 
                  ${openFAQ === index ? "bg-teal-400 text-white" : "bg-gray-50 text-gray-500 hover:bg-gray-200 hover:text-gray-600"}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openFAQ === index ? "rotate-180 text-white" : "rotate-0 text-gray-600"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-transform duration-500 ease-in-out transform origin-top ${
                  openFAQ === index ? "scale-y-100 p-4 bg-white" : "scale-y-0 h-0"
                }`}
              >
                <p className="text-gray-700 pt-3 pl-4">{faqAnswers[index]}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-gray-600 text-base sm:text-md bg-gray-200 px-8 py-6 leading-relaxed">
          <b>{t("general.note")}</b> {t("faqSection.note")}
        </p>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;