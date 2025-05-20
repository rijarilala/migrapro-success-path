
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ variant = 'default' }: { variant?: 'default' | 'minimal' }) => {
  const { currentLang, switchLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    switchLanguage(currentLang === 'fr' ? 'en' : 'fr');
  };

  if (variant === 'minimal') {
    return (
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={toggleLanguage}
        className="px-2 min-w-[40px] flex items-center justify-center"
        aria-label={`Switch to ${currentLang === 'fr' ? 'English' : 'French'}`}
      >
        {currentLang === 'fr' ? 'EN' : 'FR'}
      </Button>
    );
  }

  return (
    <div className="flex items-center space-x-1">
      <Button 
        variant={currentLang === 'fr' ? 'default' : 'ghost'} 
        size="sm"
        className={`px-2 ${currentLang === 'fr' ? 'bg-migrapro-terre-cuite hover:bg-migrapro-terre-cuite/90' : ''}`}
        onClick={() => switchLanguage('fr')}
        aria-label="Switch to French"
      >
        {t('languageSwitcher.fr')}
      </Button>
      <Button 
        variant={currentLang === 'en' ? 'default' : 'ghost'} 
        size="sm"
        className={`px-2 ${currentLang === 'en' ? 'bg-migrapro-terre-cuite hover:bg-migrapro-terre-cuite/90' : ''}`}
        onClick={() => switchLanguage('en')}
        aria-label="Switch to English"
      >
        {t('languageSwitcher.en')}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
