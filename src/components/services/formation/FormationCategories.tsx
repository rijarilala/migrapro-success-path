
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Briefcase, FileText, GraduationCap, Mail, Users, Clock, Info } from 'lucide-react';
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
};

const FormationCategories = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const formations: Formation[] = [
    {
      id: 'cv',
      title: "Rédaction de CV",
      subtitle: "Local & Canadien",
      description: "Apprenez à rédiger un CV pertinent et adapté aux standards malgaches et canadiens pour maximiser vos chances auprès des recruteurs.",
      objective: "Maîtriser la structure, le contenu et le format d'un CV efficace pour le marché local et international. Apprendre à valoriser ses compétences et expériences de manière stratégique.",
      targetAudience: "Jeunes diplômés, personnes en reconversion, candidats à l'immigration, chercheurs d'emploi",
      duration: "4h",
      format: ["En ligne", "Présentiel"],
      category: 'professional',
      icon: <FileText className="h-12 w-12 text-migrapro-terre-cuite" />,
      includedInPacks: ['insertion-pro']
    },
    {
      id: 'lm',
      title: "Lettres de Motivation",
      subtitle: "Techniques & Exemples",
      description: "Maîtrisez l'art de la lettre de motivation efficace avec des techniques concrètes et des modèles adaptés à chaque situation.",
      objective: "Rédiger des lettres de motivation percutantes qui suscitent l'intérêt des recruteurs et valorisent votre candidature en lien avec le poste visé.",
      targetAudience: "Jeunes diplômés, personnes en reconversion, candidats à l'immigration, chercheurs d'emploi",
      duration: "3h",
      format: ["En ligne", "Présentiel"],
      category: 'professional',
      icon: <Mail className="h-12 w-12 text-migrapro-terre-cuite" />,
      includedInPacks: ['insertion-pro']
    },
    {
      id: 'recherche-emploi',
      title: "Préparation à la recherche d'emploi",
      subtitle: "Démarches & outils",
      description: "Découvrez les stratégies, méthodes de prospection, et outils indispensables pour décrocher rapidement votre premier ou nouveau poste.",
      objective: "Élaborer une stratégie de recherche d'emploi efficace et acquérir les outils nécessaires pour prospecter, postuler et suivre vos candidatures.",
      targetAudience: "Jeunes diplômés, personnes en reconversion, candidats à l'immigration, chercheurs d'emploi",
      duration: "5h",
      format: ["En ligne", "Présentiel"],
      category: 'professional',
      icon: <Briefcase className="h-12 w-12 text-migrapro-terre-cuite" />,
      includedInPacks: ['insertion-pro']
    },
    {
      id: 'transition',
      title: "Transition vie étudiante - vie professionnelle",
      subtitle: "Accompagnement personnalisé",
      description: "Facilitez votre passage des études au marché du travail grâce à un accompagnement ciblé pour valoriser vos compétences et bien démarrer.",
      objective: "Comprendre les exigences du monde professionnel, adapter son comportement et développer les compétences transversales attendues par les employeurs.",
      targetAudience: "Étudiants en fin d'études, jeunes diplômés",
      duration: "4h",
      format: ["En ligne", "Présentiel"],
      category: 'professional',
      icon: <GraduationCap className="h-12 w-12 text-migrapro-terre-cuite" />,
      includedInPacks: ['insertion-pro']
    },
    {
      id: 'grh',
      title: "Gestion des Ressources Humaines",
      subtitle: "Fondamentaux, stratégie & pratique",
      description: "Maîtrisez les bases et les stratégies RH, tout en découvrant leur mise en œuvre concrète à travers des exercices pratiques adaptés à votre secteur d'activité.",
      objective: "Acquérir les connaissances fondamentales en GRH et savoir les appliquer dans différents contextes organisationnels pour optimiser la gestion du capital humain.",
      targetAudience: "Managers, assistants RH, entrepreneurs, responsables d'équipe",
      duration: "6h",
      format: ["En ligne", "Présentiel"],
      category: 'hr',
      icon: <Users className="h-12 w-12 text-migrapro-terre-cuite" />,
      includedInPacks: ['rh-starter']
    }
  ];

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
          {formations.filter(f => f.category === 'professional').map((formation) => (
            <Card 
              key={formation.id}
              className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-2 flex flex-col items-center text-center">
                <div className="bg-gray-50 p-4 rounded-full mb-4">
                  {formation.icon}
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
                  <Dialog open={openDialog === formation.id} onOpenChange={(open) => setOpenDialog(open ? formation.id : null)}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex gap-1">
                        <Info className="h-4 w-4" />
                        <span>Détails</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          {formation.title}
                        </DialogTitle>
                        <DialogDescription className="text-migrapro-terre-cuite">
                          {formation.subtitle}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <h4 className="font-medium text-sm text-gray-500 mb-1">Description</h4>
                          <p className="text-sm">{formation.description}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-gray-500 mb-1">Objectif</h4>
                          <p className="text-sm">{formation.objective}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-gray-500 mb-1">Public cible</h4>
                          <p className="text-sm">{formation.targetAudience}</p>
                        </div>
                        <div className="flex flex-wrap justify-between items-center p-3 bg-gray-50 rounded-md">
                          <div>
                            <h4 className="font-medium text-sm text-gray-500 mb-1">Durée</h4>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-migrapro-terre-cuite" />
                              <span className="text-sm">{formation.duration}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm text-gray-500 mb-1">Format</h4>
                            <div className="flex gap-2">
                              {formation.format.map((fmt) => (
                                <Badge key={fmt} variant="outline" className="bg-gray-50">
                                  {fmt}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {formation.includedInPacks.length > 0 && (
                          <div className="border-t pt-4 mt-4">
                            <p className="text-sm font-medium">
                              Cette formation est incluse dans :
                            </p>
                            <div className="flex gap-2 mt-2">
                              {formation.includedInPacks.includes('insertion-pro') && (
                                <Badge className="bg-migrapro-bleu-ciel cursor-pointer hover:bg-migrapro-bleu-ciel/80"
                                  onClick={() => setOpenDialog('pack-insertion-pro')}>
                                  Pack Insertion Pro
                                </Badge>
                              )}
                              {formation.includedInPacks.includes('rh-starter') && (
                                <Badge className="bg-migrapro-bleu-ciel cursor-pointer hover:bg-migrapro-bleu-ciel/80"
                                  onClick={() => setOpenDialog('pack-rh-starter')}>
                                  Pack RH Starter
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <DialogFooter>
                        <Button asChild>
                          <Link to="/contact?service=formation&course=cv">
                            Demander plus d'infos
                          </Link>
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
          {formations.filter(f => f.category === 'hr').map((formation) => (
            <Card 
              key={formation.id}
              className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-2 flex flex-col items-center text-center">
                <div className="bg-gray-50 p-4 rounded-full mb-4">
                  {formation.icon}
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
                  <Dialog open={openDialog === formation.id} onOpenChange={(open) => setOpenDialog(open ? formation.id : null)}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex gap-1">
                        <Info className="h-4 w-4" />
                        <span>Détails</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          {formation.title}
                        </DialogTitle>
                        <DialogDescription className="text-migrapro-bleu-ciel">
                          {formation.subtitle}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <h4 className="font-medium text-sm text-gray-500 mb-1">Description</h4>
                          <p className="text-sm">{formation.description}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-gray-500 mb-1">Objectif</h4>
                          <p className="text-sm">{formation.objective}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-gray-500 mb-1">Public cible</h4>
                          <p className="text-sm">{formation.targetAudience}</p>
                        </div>
                        <div className="flex flex-wrap justify-between items-center p-3 bg-gray-50 rounded-md">
                          <div>
                            <h4 className="font-medium text-sm text-gray-500 mb-1">Durée</h4>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-migrapro-bleu-ciel" />
                              <span className="text-sm">{formation.duration}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm text-gray-500 mb-1">Format</h4>
                            <div className="flex gap-2">
                              {formation.format.map((fmt) => (
                                <Badge key={fmt} variant="outline" className="bg-gray-50">
                                  {fmt}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {formation.includedInPacks.length > 0 && (
                          <div className="border-t pt-4 mt-4">
                            <p className="text-sm font-medium">
                              Cette formation est incluse dans :
                            </p>
                            <div className="flex gap-2 mt-2">
                              {formation.includedInPacks.includes('rh-starter') && (
                                <Badge className="bg-migrapro-bleu-ciel cursor-pointer hover:bg-migrapro-bleu-ciel/80"
                                  onClick={() => setOpenDialog('pack-rh-starter')}>
                                  Pack RH Starter
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <DialogFooter>
                        <Button asChild>
                          <Link to="/contact?service=formation&course=grh">
                            Demander plus d'infos
                          </Link>
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormationCategories;
