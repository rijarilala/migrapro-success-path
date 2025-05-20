import Fuse from 'fuse.js';

// Interfaces pour les différents types de résultats
export interface SearchableFormation {
  id: string;
  title: string;
  slug: string;
  category: string;
  type: 'formation';
  formationId: string; // Pour cibler directement la formation dans la page
}

export interface SearchablePage {
  title: string;
  path: string;
  type: 'page';
}

export interface SearchableFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  type: 'faq';
  faqCategory: string; // Pour sélectionner la bonne catégorie
}

export type SearchResult = SearchableFormation | SearchablePage | SearchableFAQ;

// Données de recherche mock - À remplacer par des données réelles
const formations: SearchableFormation[] = [
  { id: '1', title: 'Formation en Orientation Professionnelle', slug: 'orientation', category: 'Orientation', type: 'formation', formationId: 'orientation-pro' },
  { id: '2', title: 'Formation en Leadership', slug: 'leadership', category: 'Compétences', type: 'formation', formationId: 'leadership' },
  { id: '3', title: 'Cours de français professionnel', slug: 'francais', category: 'Langues', type: 'formation', formationId: 'francais-pro' },
  { id: '4', title: 'Préparation à l\'entretien d\'embauche', slug: 'entretien', category: 'Emploi', type: 'formation', formationId: 'entretien' },
  { id: '5', title: 'Rédaction de CV (4h)', slug: 'redaction-cv', category: 'Documentation', type: 'formation', formationId: 'cv' },
  { id: '6', title: 'Lettre de motivation (3h)', slug: 'lettre-motivation', category: 'Documentation', type: 'formation', formationId: 'lm' },
  { id: '7', title: 'Créer et optimiser son profil LinkedIn (3h)', slug: 'linkedin', category: 'Emploi', type: 'formation', formationId: 'linkedin' },
  { id: '8', title: 'Préparation à la recherche du premier emploi / nouveau emploi', slug: 'recherche-emploi', category: 'Insertion Professionnelle', type: 'formation', formationId: 'recherche-emploi' },
  { id: '9', title: 'Transition vie étudiante – vie professionnelle (4h)', slug: 'transition', category: 'Orientation', type: 'formation', formationId: 'transition' },
  { id: '10', title: 'Gestion des Ressources Humaines – Fondamentaux, stratégie & pratique (6h)', slug: 'grh', category: 'Compétences RH', type: 'formation', formationId: 'grh' },
  { id: '11', title: 'Pack Insertion Pro', slug: 'pack-insertion-pro', category: 'Pack', type: 'formation', formationId: 'pack-insertion-pro' },
  { id: '12', title: 'Pack RH Starter', slug: 'pack-rh-starter', category: 'Pack', type: 'formation', formationId: 'pack-rh-starter' },
];

const pages: SearchablePage[] = [
  { title: 'Accueil', path: '/', type: 'page' },
  { title: 'À propos', path: '/a-propos', type: 'page' },
  { title: 'Services', path: '/services', type: 'page' },
  { title: 'Contact', path: '/contact', type: 'page' },
  { title: 'FAQ', path: '/blog', type: 'page' },
  { title: 'Témoignages', path: '/temoignages', type: 'page' },
  { title: 'Orientation Professionnelle', path: '/services/orientation', type: 'page' },
  { title: 'Formation', path: '/services/formation', type: 'page' },
  { title: 'Coaching', path: '/services/coaching', type: 'page' },
  { title: 'Études au Canada', path: '/services/etudes-canada', type: 'page' },
  { title: 'Pack Réussite', path: '/services/pack-reussite', type: 'page' },
  { title: 'Immigration', path: '/services/immigration', type: 'page' },
  { title: 'Recrutement', path: '/services/recrutement', type: 'page' },
  { title: 'Test d\'éligibilité à l\'immigration', path: '/services/eligibility', type: 'page' },
];

const faqs: SearchableFAQ[] = [
  { 
    id: '1', 
    question: 'Comment évaluer mon éligibilité pour l\'immigration au Canada?', 
    answer: 'Vous pouvez utiliser notre outil d\'évaluation d\'éligibilité gratuit ou prendre rendez-vous pour une consultation personnalisée.',
    category: 'Immigration',
    type: 'faq',
    faqCategory: 'immigration'
  },
  { 
    id: '2', 
    question: 'Quels sont les documents nécessaires pour une demande de visa d\'études?', 
    answer: 'Pour un visa d\'études, vous aurez besoin de votre lettre d\'acceptation, preuve de fonds suffisants, passeport valide et autres documents spécifiques.',
    category: 'Études',
    type: 'faq',
    faqCategory: 'etudes'
  },
  { 
    id: '3', 
    question: 'Comment fonctionne le Pack Réussite Professionnelle?', 
    answer: 'Le Pack Réussite comprend la rédaction de CV, lettre de motivation et coaching d\'entretien, spécifiquement adaptés au marché canadien.',
    category: 'Services',
    type: 'faq',
    faqCategory: 'general'
  },
  { 
    id: '4', 
    question: 'Quelles sont les différences entre l\'Express Entry et le PEQ?', 
    answer: 'L\'Express Entry est un système fédéral tandis que le PEQ est un programme provincial québécois, chacun avec des critères d\'admissibilité différents.',
    category: 'Immigration',
    type: 'faq',
    faqCategory: 'immigration'
  },
  { 
    id: '5', 
    question: 'Comment se préparer pour une entrevue d\'embauche au Canada?', 
    answer: 'Notre service de coaching vous prépare avec des simulations d\'entretien, des conseils culturels et des techniques de présentation adaptées.',
    category: 'Emploi',
    type: 'faq',
    faqCategory: 'coaching'
  },
];

// Configuration de Fuse.js pour la recherche floue
const fuseOptions = {
  includeScore: true,
  threshold: 0.3,
  keys: [
    'title',
    'question',
    'path',
    'category',
    'answer'
  ]
};

// Création de l'instance de Fuse avec toutes les données
const allData: SearchResult[] = [...formations, ...pages, ...faqs];
const fuse = new Fuse(allData, fuseOptions);

// Fonction pour effectuer une recherche
export function searchAll(query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  console.log(`searchService: Recherche pour la requête "${query}"`);
  const results = fuse.search(query);
  const items = results.map(result => {
    console.log(`searchService: Résultat trouvé - type: ${result.item.type}, id: ${(result.item as any).formationId || result.item.id || 'N/A'}`);
    return result.item;
  });
  return items;
}

// Fonction pour regrouper les résultats par type
export function groupSearchResults(results: SearchResult[]): Record<string, SearchResult[]> {
  const grouped: Record<string, SearchResult[]> = {
    formation: [],
    page: [],
    faq: []
  };

  results.forEach(result => {
    grouped[result.type].push(result);
  });

  return grouped;
}

// Fonction pour mettre en surbrillance le texte correspondant
export function highlightMatch(text: string, query: string): string {
  if (!query.trim()) return text;
  
  // Échapper les caractères spéciaux pour éviter les problèmes de regex
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Créer une expression régulière pour trouver toutes les occurrences, insensible à la casse
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  
  // Remplacer les correspondances par le même texte mais entouré de balises de surbrillance
  return text.replace(regex, '<mark>$1</mark>');
}

// Function to obtain the correct link with appropriate parameters
export function getResultUrl(result: SearchResult): string {
  switch (result.type) {
    case 'formation':
      // Add fromSearch=true parameter to indicate an active search
      const formationId = (result as SearchableFormation).formationId;
      console.log(`searchService: Generating URL for formation with ID=${formationId}`);
      return `/services/formation?fromSearch=true#${formationId}`;
    case 'page':
      return (result as SearchablePage).path;
    case 'faq':
      // For FAQs, add the category and ID as parameters
      const faq = result as SearchableFAQ;
      return `/blog?category=${faq.faqCategory}&question=${faq.id}`;
    default:
      return '/';
  }
}

// Renvoie les catégories de résultats disponibles (pour l'affichage des filtres)
export function getAvailableCategories(results: SearchResult[]): string[] {
  const categories = new Set<string>();
  
  results.forEach(result => {
    if (result.type === 'formation' || result.type === 'faq') {
      categories.add((result as SearchableFormation | SearchableFAQ).category);
    }
  });
  
  return Array.from(categories);
}
