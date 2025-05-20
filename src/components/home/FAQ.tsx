
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const { t } = useTranslation();

  const faqItems = [
    {
      id: "item-1",
      question: "Qu'est-ce que Success Cabinet ?",
      answer: "Success Cabinet est un cabinet de conseil spécialisé dans l'orientation professionnelle, la formation et l'accompagnement à l'immigration au Canada. Notre mission est d'aider nos clients à développer leurs compétences et à réussir leurs projets professionnels ou d'expatriation."
    },
    {
      id: "item-2",
      question: "Comment fonctionne l'orientation professionnelle ?",
      answer: "Notre service d'orientation professionnelle comprend une évaluation approfondie de votre profil, de vos compétences et aspirations. Nous vous accompagnons ensuite dans l'élaboration d'un plan de carrière personnalisé avec des objectifs concrets et des ressources adaptées. Ce processus se déroule généralement sur plusieurs séances individuelles avec un conseiller dédié."
    },
    {
      id: "item-3",
      question: "Quels sont les tarifs des packs de formation ?",
      answer: "Nos tarifs varient selon le pack de formation choisi. Le Pack Insertion Pro débute à partir de 250€, le Pack RH Starter à partir de 350€. Des remises sont possibles pour les groupes ou lors de nos campagnes promotionnelles. Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins spécifiques."
    },
    {
      id: "item-4",
      question: "Comment puis-je réserver un coaching ?",
      answer: "Pour réserver une séance de coaching, vous pouvez nous contacter via notre formulaire en ligne, par téléphone ou par email. Après un premier échange pour comprendre vos besoins, nous vous proposerons un créneau avec le coach le plus adapté à votre situation. Le paiement s'effectue en ligne ou par virement avant la séance."
    },
    {
      id: "item-5",
      question: "Quelle est la procédure pour immigrer au Canada ?",
      answer: "La procédure d'immigration au Canada comprend plusieurs étapes : évaluation d'éligibilité, sélection du programme d'immigration adapté, constitution du dossier, soumission de la demande, et suivi jusqu'à l'obtention du visa. Notre cabinet vous accompagne à chaque étape avec des conseils personnalisés et une assistance administrative complète pour maximiser vos chances de succès."
    },
    {
      id: "item-6",
      question: "Comment tester mon éligibilité ?",
      answer: "Vous pouvez tester votre éligibilité à l'immigration canadienne via notre formulaire d'évaluation en ligne. Ce test gratuit analyse vos qualifications, votre expérience professionnelle et vos compétences linguistiques. Sous 48h, vous recevrez une première analyse et nos recommandations. Pour une évaluation plus approfondie, nous proposons des consultations personnalisées."
    },
    {
      id: "item-7",
      question: "Quels sont vos délais de réponse ?",
      answer: "Nous nous engageons à répondre à toutes les demandes sous 48h ouvrées. Pour les questions urgentes, notre service client est disponible par téléphone du lundi au vendredi, de 9h à 18h. Les rapports d'évaluation détaillés sont généralement fournis sous 5 jours ouvrés après la consultation initiale."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            {t('faq.yourQuestionsOurAnswers')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in animate-delay-100">
            {t('faq.findAnswers')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id} 
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white animate-fade-in"
                style={{ animationDelay: `${parseInt(item.id.split('-')[1]) * 100}ms` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline [&_svg]:text-migrapro-terre-cuite">
                  <div className="flex justify-between items-center w-full text-left">
                    <h3 className="font-semibold text-lg">{item.question}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-gray-600">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
