import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Briefcase, FileText, GraduationCap, Mail, Users, Clock, Info, X, Package, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define formation type
type Formation = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  objective: string;
  targetAudience: string;
  duration: string;
  format: string[];
  category: 'professional' | 'hr';
  icon: JSX.Element;
  includedInPacks: string[];
  image: string;
};

const FormationCategories = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const formations: Formation[] = [{
    id: 'cv',
    title: "Rédaction de CV",
    subtitle: "Local & Canadien",
    description: "Apprenez à rédiger un CV impactant et adapté aux standards malgaches et canadiens pour maximiser vos chances auprès des recruteurs.",
    objective: "Maîtriser la structure, le contenu et le format d'un CV efficace pour le marché local et international. Apprendre à valoriser ses compétences et expériences de manière stratégique.",
    targetAudience: "Jeunes diplômés, personnes en reconversion, candidats à l'immigration, chercheurs d'emploi",
    duration: "4h",
    format: ["Présentiel"],
    category: 'professional',
    icon: <FileText className="h-12 w-12 text-migrapro-terre-cuite" />,
    includedInPacks: ['pack-insertion-pro'],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
  }, {
    id: 'lm',
    title: "Lettres de Motivation",
    subtitle: "Techniques & Exemples",
    description: "Maîtrisez l'art de la lettre de motivation convaincante avec des techniques concrètes et des modèles adaptés à chaque situation.",
    objective: "Rédiger des lettres de motivation percutantes qui suscitent l'intérêt des recruteurs et valorisent votre candidature en lien avec le poste visé.",
    targetAudience: "Jeunes diplômés, personnes en reconversion, candidats à l'immigration, chercheurs d'emploi",
    duration: "3h",
    format: ["Présentiel"],
    category: 'professional',
    icon: <Mail className="h-12 w-12 text-migrapro-terre-cuite" />,
    includedInPacks: ['pack-insertion-pro'],
    image: "/lovable-uploads/e3b8f6e0-84bd-41c2-b3f3-d515446dc1fc.png"
  }, {
    id: 'linkedin',
    title: "Créer et optimiser son profil LinkedIn",
    subtitle: "Visibilité professionnelle",
    description: "Développez une présence professionnelle en ligne percutante et apprenez à utiliser LinkedIn comme un outil efficace de réseautage et de recherche d'emploi.",
    objective: "Créer un profil LinkedIn attractif, optimiser votre visibilité auprès des recruteurs et développer votre réseau professionnel de manière stratégique.",
    targetAudience: "Professionnels en activité, chercheurs d'emploi, entrepreneurs, jeunes diplômés",
    duration: "3h",
    format: ["Présentiel"],
    category: 'professional',
    icon: <Linkedin className="h-12 w-12 text-migrapro-terre-cuite" />,
    includedInPacks: ['pack-insertion-pro'],
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=800&auto=format&fit=crop"
  }, {
    id: 'recherche-emploi',
    title: "Préparation à la recherche d'emploi",
    subtitle: "Démarches & outils",
    description: "Découvrez les stratégies, méthodes de prospection, et outils indispensables pour décrocher rapidement votre premier ou nouveau poste.",
    objective: "Élaborer une stratégie de recherche d'emploi efficace et acquérir les outils nécessaires pour prospecter, postuler et suivre vos candidatures.",
    targetAudience: "Jeunes diplômés, personnes en reconversion, candidats à l'immigration, chercheurs d'emploi",
    duration: "5h",
    format: ["Présentiel"],
    category: 'professional',
    icon: <Briefcase className="h-12 w-12 text-migrapro-terre-cuite" />,
    includedInPacks: ['pack-insertion-pro'],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
  }, {
    id: 'transition',
    title: "Transition vie étudiante - vie professionnelle",
    subtitle: "Accompagnement personnalisé",
    description: "Facilitez votre passage des études au marché du travail grâce à un accompagnement ciblé pour valoriser vos compétences et bien démarrer.",
    objective: "Comprendre les exigences du monde professionnel, adapter son comportement et développer les compétences transversales attendues par les employeurs.",
    targetAudience: "Étudiants en fin d'études, jeunes diplômés",
    duration: "4h",
    format: ["Présentiel"],
    category: 'professional',
    icon: <GraduationCap className="h-12 w-12 text-migrapro-terre-cuite" />,
    includedInPacks: ['pack-insertion-pro'],
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop"
  }, {
    id: 'grh',
    title: "Gestion des Ressources Humaines",
    subtitle: "Fondamentaux, stratégie & pratique",
    description: "Maîtrisez les bases et les stratégies RH, tout en découvrant leur mise en œuvre concrète à travers des exercices pratiques adaptés à votre secteur d'activité.",
    objective: "Acquérir les connaissances fondamentales en GRH et savoir les appliquer dans différents contextes organisationnels pour optimiser la gestion du capital humain.",
    targetAudience: "Managers, assistants RH, entrepreneurs, responsables d'équipe",
    duration: "6h",
    format: ["Présentiel"],
    category: 'hr',
    icon: <Users className="h-12 w-12 text-migrapro-terre-cuite" />,
    includedInPacks: ['pack-rh-starter'],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  }];

  const getCurrentFormation = () => {
    return formations.find(formation => formation.id === openDialog);
  };

  const getColorForCategory = (category: 'professional' | 'hr') => {
    return category === 'professional' ? 'migrapro-terre-cuite' : 'migrapro-bleu-ciel';
  };

  return (
    <div className="space-y-12">
      <div className="space-y-8">
        <div className="flex flex-col items-center text-center mb-8">
          <Badge className="mb-4 bg-migrapro-terre-cuite/10 text-migrapro-terre-cuite border-migrapro-terre-cuite/20 hover:bg-migrapro-terre-cuite/20">
            Insertion professionnelle
          </Badge>
          <h2 className="text-2xl font-bold">Développez vos compétences pour l'emploi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Des formations adaptées pour préparer votre insertion, transition ou évolution professionnelle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {formations.filter(f => f.category === 'professional').map(formation => (
            <Card 
              key={formation.id} 
              id={formation.id}
              data-formation-id={formation.id} // Ajout d'un attribut data-formation-id pour faciliter la sélection
              className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative" // Ajout de position relative pour surbrillance
            >
              <CardHeader className="pb-2 flex flex-col items-center text-center">
                <div className="w-full h-40 overflow-hidden mb-4 rounded-t-lg relative">
                  <img 
                    src={formation.image} 
                    alt={formation.title} 
                    className="w-full h-full object-cover" 
                    onError={e => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }} 
                  />
                  <div className="absolute top-2 right-2 bg-white/80 p-1 rounded-full">
                    {formation.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{formation.title}</CardTitle>
                <p className="text-migrapro-terre-cuite font-medium text-sm">{formation.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center line-clamp-3">{formation.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{formation.duration}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex gap-1" 
                    onClick={() => setOpenDialog(formation.id)}
                  >
                    <Info className="h-4 w-4" />
                    <span>Détails</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col items-center text-center mb-8">
          <Badge className="mb-4 bg-migrapro-bleu-ciel/10 text-migrapro-bleu-ciel border-migrapro-bleu-ciel/20 hover:bg-migrapro-bleu-ciel/20">
            Compétences RH
          </Badge>
          <h2 className="text-2xl font-bold">Maîtrisez les fondamentaux RH</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Développez vos compétences en gestion des ressources humaines
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {formations.filter(f => f.category === 'hr').map(formation => (
            <Card 
              key={formation.id} 
              id={formation.id}
              data-formation-id={formation.id} // Ajout d'un attribut data-formation-id pour faciliter la sélection
              className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative" // Ajout de position relative pour surbrillance
            >
              <CardHeader className="pb-2 flex flex-col items-center text-center">
                <div className="w-full h-40 overflow-hidden mb-4 rounded-t-lg relative">
                  <img 
                    src={formation.image} 
                    alt={formation.title} 
                    className="w-full h-full object-cover" 
                    onError={e => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }} 
                  />
                  <div className="absolute top-2 right-2 bg-white/80 p-1 rounded-full">
                    {formation.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{formation.title}</CardTitle>
                <p className="text-migrapro-bleu-ciel font-medium text-sm">{formation.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center line-clamp-3">{formation.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{formation.duration}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex gap-1" 
                    onClick={() => setOpenDialog(formation.id)}
                  >
                    <Info className="h-4 w-4" />
                    <span>Détails</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Dialog pour le détail des formations - Centré au milieu de l'écran */}
      <Dialog open={!!openDialog} onOpenChange={open => setOpenDialog(open ? openDialog : null)}>
        <DialogContent className="sm:max-w-[600px] p-0 max-h-[85vh] overflow-hidden flex flex-col">
          {getCurrentFormation() && (
            <>
              <div className={`bg-${getColorForCategory(getCurrentFormation()?.category || 'professional')}/10 py-4 px-6 flex justify-between items-center`}>
                <div className="flex flex-col">
                  <DialogTitle className="text-2xl">{getCurrentFormation()?.title}</DialogTitle>
                  <p className={`text-${getColorForCategory(getCurrentFormation()?.category || 'professional')} text-sm font-medium`}>
                    {getCurrentFormation()?.subtitle}
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-200" onClick={() => setOpenDialog(null)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <ScrollArea className="flex-1 overflow-auto px-6 py-4">
                <div className="space-y-5">
                  <div className="w-full h-48 overflow-hidden rounded-md mb-6">
                    <img 
                      src={getCurrentFormation()?.image} 
                      alt={getCurrentFormation()?.title} 
                      className="w-full h-full object-cover" 
                      onError={e => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }} 
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-gray-500 mb-1">Description</h4>
                    <p>{getCurrentFormation()?.description}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-gray-500 mb-1">Objectif</h4>
                    <p>{getCurrentFormation()?.objective}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-gray-500 mb-1">Public cible</h4>
                    <p>{getCurrentFormation()?.targetAudience}</p>
                  </div>

                  <div className="flex flex-wrap justify-between items-center p-4 bg-gray-50 rounded-md">
                    <div>
                      <h4 className="font-medium text-sm text-gray-500 mb-1">Durée</h4>
                      <div className="flex items-center gap-1">
                        <Clock className={`h-4 w-4 text-${getColorForCategory(getCurrentFormation()?.category || 'professional')}`} />
                        <span>{getCurrentFormation()?.duration}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-gray-500 mb-1">Format</h4>
                      <div className="flex gap-2">
                        {getCurrentFormation()?.format.map(fmt => (
                          <Badge key={fmt} variant="outline" className="bg-gray-50">
                            {fmt}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {getCurrentFormation()?.includedInPacks && getCurrentFormation()?.includedInPacks.length > 0 && (
                    <div className="border-t pt-4 mt-4">
                      <p className="font-medium mb-2">
                        Cette formation est incluse dans :
                      </p>
                      <div className="flex gap-2 mt-2">
                        {getCurrentFormation()?.includedInPacks.includes('pack-insertion-pro') && <Button variant="outline" className="bg-migrapro-terre-cuite/10 border border-migrapro-terre-cuite/20 hover:bg-migrapro-terre-cuite/20 rounded-md p-3 flex items-center gap-2 h-auto" onClick={() => {
                          setOpenDialog(null);
                          // Navigate to packs tab and scroll to the pack
                          const tabsElement = document.querySelector('[value="packs"]');
                          if (tabsElement) {
                            (tabsElement as HTMLElement).click();
                            setTimeout(() => {
                              const packElement = document.getElementById('pack-insertion-pro');
                              if (packElement) {
                                packElement.scrollIntoView({
                                  behavior: 'smooth',
                                  block: 'center'
                                });
                              }
                            }, 300);
                          }
                        }}>
                          <Package className="h-5 w-5 text-migrapro-terre-cuite" />
                          <span className="font-medium">Pack Insertion Pro</span>
                        </Button>}
                        {getCurrentFormation()?.includedInPacks.includes('pack-rh-starter') && <Button variant="outline" className="bg-migrapro-bleu-ciel/10 border border-migrapro-bleu-ciel/20 hover:bg-migrapro-bleu-ciel/20 rounded-md p-3 flex items-center gap-2 h-auto" onClick={() => {
                          setOpenDialog(null);
                          // Navigate to packs tab and scroll to the pack
                          const tabsElement = document.querySelector('[value="packs"]');
                          if (tabsElement) {
                            (tabsElement as HTMLElement).click();
                            setTimeout(() => {
                              const packElement = document.getElementById('pack-rh-starter');
                              if (packElement) {
                                packElement.scrollIntoView({
                                  behavior: 'smooth',
                                  block: 'center'
                                });
                              }
                            }, 300);
                          }
                        }}>
                          <Package className="h-5 w-5 text-migrapro-bleu-ciel" />
                          <span className="font-medium">Pack RH Starter</span>
                        </Button>}
                      </div>
                    </div>
                  )}
                  
                  <div className="h-20"></div> {/* Espace pour éviter que le contenu soit caché derrière le footer */}
                </div>
              </ScrollArea>

              <DialogFooter className="px-6 py-4 border-t flex flex-col sm:flex-row gap-2 bg-white">
                <Button variant="outline" onClick={() => setOpenDialog(null)} className="w-full sm:w-auto mx-0 my-0 py-[16px] px-0">
                  Retour aux formations
                </Button>
                <Button asChild className="w-full sm:w-auto">
                  <Link to={`/contact?service=formation&course=${openDialog}`}>
                    Demander plus d'infos
                  </Link>
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormationCategories;
