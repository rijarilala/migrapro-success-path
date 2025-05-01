
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels sont les documents nécessaires pour une demande de visa d'études au Canada?",
    answer: "Pour une demande de visa d'études au Canada, vous aurez besoin de: la lettre d'acceptation d'un établissement canadien, un passeport valide, une preuve de moyens financiers, une lettre d'intention expliquant votre parcours, des photos conformes aux normes, et selon votre pays d'origine, un certificat médical et des données biométriques. Il est important de vérifier les exigences spécifiques sur le site d'Immigration Canada, car elles peuvent varier."
  },
  {
    question: "Comment préparer un CV adapté aux normes canadiennes?",
    answer: "Un CV canadien efficace doit être concis (1-2 pages), sans photo ni informations personnelles comme l'âge ou l'état civil. Mettez l'accent sur vos compétences en début de CV, utilisez des puces pour lister vos réalisations avec des verbes d'action et des résultats quantifiables. Incluez votre formation, expérience professionnelle, compétences techniques, et réalisations pertinentes. Adaptez votre CV à chaque poste en utilisant des mots-clés de l'offre d'emploi."
  },
  {
    question: "Quelles sont les étapes pour obtenir une équivalence de diplôme au Canada?",
    answer: "Pour obtenir une équivalence de diplôme au Canada: 1) Identifiez l'organisme d'évaluation approprié (WES, ICAS, etc.). 2) Rassemblez les documents requis (diplômes originaux, relevés de notes). 3) Faites traduire vos documents par un traducteur agréé si nécessaire. 4) Soumettez votre demande et payez les frais. 5) Attendez l'évaluation (généralement 4-6 semaines). 6) Recevez votre certificat d'équivalence que vous pourrez présenter aux employeurs ou établissements d'enseignement."
  },
  {
    question: "Quels sont les programmes d'immigration les plus accessibles pour les travailleurs qualifiés?",
    answer: "Les programmes les plus accessibles pour les travailleurs qualifiés sont: Entrée Express (système fédéral basé sur des points), Programme des candidats des provinces (nominations provinciales basées sur les besoins locaux), Programme des travailleurs qualifiés du Québec (système de points distinct), et les programmes pilotes comme l'Immigration rurale et du Nord ou le Programme pilote d'immigration dans l'Atlantique. Chaque programme a ses propres critères d'admissibilité concernant l'éducation, l'expérience professionnelle, les compétences linguistiques et l'adaptabilité."
  },
  {
    question: "Comment trouver un logement abordable pour les étudiants internationaux au Canada?",
    answer: "Pour trouver un logement abordable en tant qu'étudiant international: 1) Contactez le bureau de logement de votre établissement. 2) Recherchez des résidences universitaires. 3) Explorez les options de colocation sur des plateformes comme Kijiji, Facebook Marketplace ou PadMapper. 4) Rejoignez des groupes d'étudiants de votre pays sur les réseaux sociaux. 5) Arrivez quelques semaines avant la rentrée pour avoir plus de choix. 6) Vérifiez les quartiers autour de votre campus desservis par les transports en commun. Le budget mensuel moyen varie entre 500$ et 1000$ selon la ville."
  }
];

const FAQList = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Questions fréquemment posées</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
            <AccordionTrigger className="px-4 py-3 font-medium text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-600">
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQList;
