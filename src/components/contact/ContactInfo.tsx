
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();
  
  return <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">{t('contact.ourCoordinates')}</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <MapPin className="w-5 h-5 text-migrapro-terre-cuite mt-1" />
          <div>
            <h3 className="font-semibold">{t('contact.address')}</h3>
            <p className="text-gray-600">Lot A351, Moramanga Ville 514</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Phone className="w-5 h-5 text-migrapro-terre-cuite mt-1" />
          <div>
          <h3 className="font-medium text-gray-900">{t('contact.phone')}</h3>
              <a href="tel:+261340535068" className="text-gray-600">
                +261 34 05 350 68
              </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Mail className="w-5 h-5 text-migrapro-terre-cuite mt-1" />
          <div>
          <h3 className="font-medium text-gray-900">{t('contact.email')}</h3>
              <a href="mailto:contact@umegreatpro.com" className="text-gray-600">
                contact@umegreatpro.com
              </a>
          </div>
        </div>
      </div>
    </div>;
};

export default ContactInfo;
