
import { motion } from "framer-motion";
import { Building, Users, Globe } from "lucide-react";

const AboutHistory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Notre Histoire</h2>
          <div className="prose max-w-none">
            <p className="mb-6 text-gray-600">
              Fondée à Moramanga, MigraPro est née de la volonté d'accompagner les talents malgaches dans leur développement professionnel, que ce soit localement ou à l'international, particulièrement au Canada.
            </p>
            <p className="mb-6 text-gray-600">
              Notre mission est de créer des ponts entre Madagascar et le Canada, en offrant des services d'orientation professionnelle, de formation et d'accompagnement à l'immigration de haute qualité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
