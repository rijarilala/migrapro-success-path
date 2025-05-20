
import type { SearchResult } from "@/types/search";
import { useTranslation } from "react-i18next";

// Définition des données recherchables
export const getSearchDatabase = (): SearchResult[] => {
  // Services
  const services: SearchResult[] = [
    {
      id: "service-orientation",
      title: "Orientation Professionnelle",
      category: "service",
      description: "Service d'accompagnement pour votre orientation professionnelle et votre carrière",
      url: "/services/orientation"
    },
    {
      id: "service-formation",
      title: "Formation",
      category: "service",
      description: "Nos formations professionnelles pour réussir votre carrière",
      url: "/services/formation"
    },
    {
      id: "service-coaching",
      title: "Coaching",
      category: "service",
      description: "Service de coaching personnalisé pour atteindre vos objectifs professionnels",
      url: "/services/coaching"
    },
    {
      id: "service-etudes",
      title: "Études au Canada",
      category: "service",
      description: "Accompagnement pour vos études au Canada",
      url: "/services/etudes-canada"
    },
    {
      id: "service-immigration",
      title: "Immigration",
      category: "service",
      description: "Services d'accompagnement pour votre projet d'immigration",
      url: "/services/immigration"
    },
    {
      id: "service-eligibility",
      title: "Éligibilité",
      category: "service",
      description: "Évaluation de votre éligibilité à l'immigration",
      url: "/services/eligibility"
    },
    {
      id: "service-recrutement",
      title: "Recrutement",
      category: "service",
      description: "Services de recrutement et mise en relation avec les employeurs",
      url: "/services/recrutement"
    },
    {
      id: "service-pack-reussite",
      title: "Pack Réussite Pro",
      category: "service",
      description: "Solution complète pour réussir votre projet professionnel",
      url: "/services/pack-reussite"
    }
  ];

  // Formations
  const formations: SearchResult[] = [
    {
      id: "formation-cv",
      title: "Rédaction de CV professionnel",
      category: "formation",
      description: "Apprenez à créer un CV efficace et percutant",
      url: "/services/formation"
    },
    {
      id: "formation-lettre",
      title: "Lettre de motivation convaincante",
      category: "formation",
      description: "Techniques pour rédiger une lettre de motivation qui vous démarque",
      url: "/services/formation"
    },
    {
      id: "formation-linkedin",
      title: "Créer et optimiser son profil LinkedIn",
      category: "formation",
      description: "Développez une présence professionnelle en ligne percutante",
      url: "/services/formation"
    },
    {
      id: "formation-recherche",
      title: "Préparation à la recherche d'emploi",
      category: "formation",
      description: "Stratégies efficaces pour votre recherche d'emploi",
      url: "/services/formation"
    },
    {
      id: "formation-entretien",
      title: "Préparation aux entretiens",
      category: "formation",
      description: "Maîtrisez les techniques d'entretien d'embauche",
      url: "/services/formation"
    },
    {
      id: "formation-integration",
      title: "Intégration professionnelle",
      category: "formation",
      description: "Réussir son intégration dans un nouvel environnement professionnel",
      url: "/services/formation"
    },
    {
      id: "formation-communication",
      title: "Communication professionnelle",
      category: "formation",
      description: "Optimisez votre communication en milieu professionnel",
      url: "/services/formation"
    },
    {
      id: "formation-marque",
      title: "Développer sa marque personnelle",
      category: "formation",
      description: "Construisez votre identité professionnelle distinctive",
      url: "/services/formation"
    }
  ];

  // Pages principales
  const pages: SearchResult[] = [
    {
      id: "page-accueil",
      title: "Accueil",
      category: "page",
      description: "Page d'accueil de MigraPro",
      url: "/"
    },
    {
      id: "page-services",
      title: "Nos Services",
      category: "page",
      description: "Découvrez tous nos services d'accompagnement",
      url: "/services"
    },
    {
      id: "page-about",
      title: "À Propos",
      category: "page",
      description: "Découvrez MigraPro, notre histoire et notre équipe",
      url: "/a-propos"
    },
    {
      id: "page-temoignages",
      title: "Témoignages",
      category: "page",
      description: "Témoignages de nos clients satisfaits",
      url: "/temoignages"
    },
    {
      id: "page-blog",
      title: "Blog",
      category: "page",
      description: "Articles et actualités sur l'immigration et l'emploi",
      url: "/blog"
    },
    {
      id: "page-contact",
      title: "Contact",
      category: "page",
      description: "Contactez notre équipe d'experts",
      url: "/contact"
    }
  ];

  // FAQ
  const faq: SearchResult[] = [
    {
      id: "faq-1",
      title: "Comment évaluer mon éligibilité à l'immigration?",
      category: "faq",
      description: "Découvrez les étapes pour évaluer votre éligibilité à l'immigration au Canada",
      url: "/services/eligibility"
    },
    {
      id: "faq-2",
      title: "Quels sont les documents nécessaires pour immigrer?",
      category: "faq",
      description: "Liste des documents requis pour votre dossier d'immigration",
      url: "/services/immigration"
    },
    {
      id: "faq-3",
      title: "Comment choisir la bonne formation?",
      category: "faq",
      description: "Conseils pour sélectionner la formation adaptée à votre projet professionnel",
      url: "/services/formation"
    },
    {
      id: "faq-4",
      title: "Combien coûte un accompagnement en immigration?",
      category: "faq",
      description: "Informations sur les tarifs de nos services d'accompagnement",
      url: "/contact"
    },
    {
      id: "faq-5",
      title: "Comment préparer un entretien d'embauche?",
      category: "faq",
      description: "Conseils pratiques pour réussir vos entretiens d'embauche",
      url: "/services/coaching"
    },
    {
      id: "faq-6",
      title: "Quelles sont les étapes du processus d'immigration?",
      category: "faq",
      description: "Explication des différentes étapes du processus d'immigration",
      url: "/services/immigration"
    }
  ];

  // Combiner toutes les données
  return [...services, ...formations, ...pages, ...faq];
};

// Fonction de recherche avec algorithme de pertinence amélioré
export function searchData(query: string, categoryFilter: string | null = null): SearchResult[] {
  if (!query || query.length < 1) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  const searchDatabase = getSearchDatabase();
  
  // Préfiltrage par catégorie si spécifié
  const filteredByCategory = categoryFilter 
    ? searchDatabase.filter(item => item.category === categoryFilter)
    : searchDatabase;
  
  // Fonction pour calculer la pertinence d'une correspondance
  const getRelevanceScore = (item: SearchResult): number => {
    let score = 0;
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();
    
    // Correspondance exacte dans le titre (priorité maximale)
    if (title === normalizedQuery) {
      score += 120;
    }
    
    // Le titre commence par la recherche
    if (title.startsWith(normalizedQuery)) {
      score += 80;
    }
    
    // Le titre contient des mots qui commencent par la recherche
    const titleWords = title.split(' ');
    const matchingTitleWords = titleWords.filter(word => word.startsWith(normalizedQuery));
    score += matchingTitleWords.length * 50;
    
    // Le titre contient la recherche comme sous-chaîne
    if (title.includes(normalizedQuery)) {
      score += 40;
    }
    
    // La description contient des mots qui commencent par la recherche
    const descriptionWords = description.split(' ');
    const matchingDescWords = descriptionWords.filter(word => word.startsWith(normalizedQuery));
    score += matchingDescWords.length * 20;
    
    // La description contient la recherche comme sous-chaîne
    if (description.includes(normalizedQuery)) {
      score += 15;
    }
    
    // Bonus pour les correspondances exactes de mots entiers
    const queryWords = normalizedQuery.split(' ');
    for (const word of queryWords) {
      if (word.length > 2) { // Ignorer les mots trop courts
        // Correspondance exacte de mot dans le titre
        if (titleWords.includes(word)) {
          score += 30;
        }
        // Correspondance exacte de mot dans la description
        if (descriptionWords.includes(word)) {
          score += 10;
        }
      }
    }
    
    // Bonus par catégorie pour affiner les résultats
    const categoryBonus = {
      "formation": 15,  // Priorité aux formations puisque c'est ce qu'on recherche
      "service": 10,
      "page": 5,
      "faq": 3
    };
    
    score += categoryBonus[item.category as keyof typeof categoryBonus] || 0;
    
    // Bonus pour les correspondances plus courtes (précision)
    score += (100 - Math.min(item.title.length, 100)) * 0.1;
    
    return score;
  };
  
  // Filtrage et calcul du score de pertinence
  const searchResults = filteredByCategory
    .filter(item => {
      const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
      const descMatch = item.description.toLowerCase().includes(normalizedQuery);
      
      // Correspondance de début de mot dans le titre ou la description
      const titleWords = item.title.toLowerCase().split(' ');
      const descWords = item.description.toLowerCase().split(' ');
      const titleStartMatch = titleWords.some(word => word.startsWith(normalizedQuery));
      const descStartMatch = descWords.some(word => word.startsWith(normalizedQuery));
      
      return titleMatch || descMatch || titleStartMatch || descStartMatch;
    })
    .map(item => ({
      ...item,
      score: getRelevanceScore(item)
    }))
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    // Supprimer le score du résultat final
    .map(({ score, ...item }) => item);
  
  return searchResults;
}
