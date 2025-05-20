
import { useState } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import FAQCategories from "./FAQCategories";

// Extended FAQ data with categories
const faqsData = [
  {
    id: '1',
    question: "Quels services propose Success Cabinet ?",
    answer: "Success Cabinet propose des services d'orientation professionnelle, de formation, de coaching, d'accompagnement à l'immigration au Canada, ainsi que des services de recrutement et d'études au Canada. Notre objectif est de vous aider à développer vos compétences et à réussir vos projets professionnels ou d'expatriation.",
    category: "general"
  },
  {
    id: '2',
    question: "Comment fonctionne l'orientation professionnelle ?",
    answer: "Notre service d'orientation professionnelle comprend une évaluation approfondie de votre profil, de vos compétences et aspirations. Nous vous accompagnons ensuite dans l'élaboration d'un plan de carrière personnalisé avec des objectifs concrets et des ressources adaptées. Ce processus se déroule généralement sur plusieurs séances individuelles avec un conseiller dédié.",
    category: "orientation"
  },
  {
    id: '3',
    question: "Quels sont les tarifs des packs de formation ?",
    answer: "Nos tarifs varient selon le pack de formation choisi. Le Pack Insertion Pro débute à partir de 250€, le Pack RH Starter à partir de 350€. Des remises sont possibles pour les groupes ou lors de nos campagnes promotionnelles. Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins spécifiques.",
    category: "formation"
  },
  {
    id: '4',
    question: "Comment puis-je réserver un coaching ?",
    answer: "Pour réserver une séance de coaching, vous pouvez nous contacter via notre formulaire en ligne, par téléphone ou par email. Après un premier échange pour comprendre vos besoins, nous vous proposerons un créneau avec le coach le plus adapté à votre situation. Le paiement s'effectue en ligne ou par virement avant la séance.",
    category: "coaching"
  },
  {
    id: '5',
    question: "Quelle est la procédure pour immigrer au Canada ?",
    answer: "La procédure d'immigration au Canada comprend plusieurs étapes : évaluation d'éligibilité, sélection du programme d'immigration adapté, constitution du dossier, soumission de la demande, et suivi jusqu'à l'obtention du visa. Notre cabinet vous accompagne à chaque étape avec des conseils personnalisés et une assistance administrative complète pour maximiser vos chances de succès.",
    category: "immigration"
  },
  {
    id: '6',
    question: "Comment tester mon éligibilité ?",
    answer: "Vous pouvez tester votre éligibilité à l'immigration canadienne via notre formulaire d'évaluation en ligne. Ce test gratuit analyse vos qualifications, votre expérience professionnelle et vos compétences linguistiques. Sous 48h, vous recevrez une première analyse et nos recommandations. Pour une évaluation plus approfondie, nous proposons des consultations personnalisées.",
    category: "immigration"
  },
  {
    id: '7',
    question: "Quels sont vos délais de réponse ?",
    answer: "Nous nous engageons à répondre à toutes les demandes sous 48h ouvrées. Pour les questions urgentes, notre service client est disponible par téléphone du lundi au vendredi, de 9h à 18h. Les rapports d'évaluation détaillés sont généralement fournis sous 5 jours ouvrés après la consultation initiale.",
    category: "general"
  },
  {
    id: '8',
    question: "Comment préparer un CV adapté aux normes canadiennes ?",
    answer: "Un CV canadien efficace doit être concis (1-2 pages), sans photo ni informations personnelles comme l'âge ou l'état civil. Mettez l'accent sur vos compétences en début de CV, utilisez des puces pour lister vos réalisations avec des verbes d'action et des résultats quantifiables. Incluez votre formation, expérience professionnelle, compétences techniques, et réalisations pertinentes. Adaptez votre CV à chaque poste en utilisant des mots-clés de l'offre d'emploi.",
    category: "orientation"
  },
  {
    id: '9',
    question: "Proposez-vous des services à distance ?",
    answer: "Oui, tous nos services sont disponibles à distance. Nos consultations, formations et séances de coaching peuvent se dérouler par visioconférence. Nous utilisons des outils performants pour garantir une qualité d'échange optimale. Les documents et ressources pédagogiques vous sont transmis par email ou via notre plateforme en ligne sécurisée.",
    category: "general"
  },
  {
    id: '10',
    question: "Comment se déroule une formation en ligne ?",
    answer: "Nos formations en ligne sont interactives et accessibles sur notre plateforme dédiée. Elles combinent des vidéos, des supports PDF, des exercices pratiques et des quizz. Vous progressez à votre rythme et bénéficiez d'un suivi régulier de votre formateur par email ou visioconférence. Des sessions en direct sont également organisées pour favoriser les échanges avec le formateur et les autres participants.",
    category: "formation"
  },
  {
    id: '11',
    question: "Quelles sont les bourses disponibles pour étudier au Canada ?",
    answer: "Plusieurs types de bourses sont disponibles pour les étudiants internationaux au Canada : bourses d'excellence académique, bourses de recherche, bourses gouvernementales (comme le Programme canadien de bourses de la Francophonie), et bourses spécifiques aux établissements. Chaque bourse a ses propres critères d'admissibilité et délais de candidature. Nous pouvons vous accompagner dans l'identification des bourses adaptées à votre profil et dans la préparation de vos dossiers de candidature.",
    category: "etudes"
  }
];

const FAQList = () => {
  const [activeCategory, setActiveCategory] = useState<string>("general");

  const filteredFaqs = faqsData.filter(faq => 
    activeCategory === "general" || faq.category === activeCategory
  );

  return (
    <div className="space-y-6 md:space-y-8">
      <FAQCategories 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <div className="bg-white shadow-sm rounded-lg">
        {filteredFaqs.length > 0 ? (
          <Accordion type="single" collapsible className="divide-y">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-none"
                id={`faq-${faq.id}`} // Added ID for direct navigation
              >
                <AccordionTrigger 
                  className="px-4 md:px-6 py-3 md:py-4 text-left hover:no-underline text-sm md:text-base"
                >
                  <span className="text-base md:text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-3 md:pb-4 text-gray-700 text-sm md:text-base">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="p-6 md:p-8 text-center">
            <p className="text-gray-500">Aucune question trouvée dans cette catégorie.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQList;
