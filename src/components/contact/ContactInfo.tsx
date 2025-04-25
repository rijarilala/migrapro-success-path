

import { MapPin, Phone, Mail } from "lucide-react";
const ContactInfo = () => {
  return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-100 relative overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
        
        <h2 className="text-xl font-semibold mb-8 text-primary relative">
          Nos coordonnées
          <span className="absolute -bottom-3 left-0 w-12 h-0.5 bg-accent"></span>
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="feature-icon">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Adresse</h3>
              <p className="text-gray-600">Lot 108T Moramanga 514, Madagascar</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="feature-icon">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <a href="mailto:contact@migrapro.com" className="text-primary hover:underline">
                contact@migrapro.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="feature-icon">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Téléphone</h3>
              <a href="tel:+261340535068" className="text-primary hover:underline">
                +261 34 05 350 68
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact CTA box */}
        <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Besoin d'aide immédiate ?</h3>
              <a href="tel:+261340535068" className="text-accent hover:underline font-bold">
                +261 34 05 350 68
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="rounded-lg overflow-hidden border border-gray-100 shadow-lg relative">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-accent z-10"></div>
        <Map />
      </div>
    </>
  );
};

export default ContactInfo;
