
import { useTranslation } from 'react-i18next';

const ContactHero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-20 bg-migrapro-bleu-ciel text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            {t('contact.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
