import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Package, FileText, Mail, Briefcase, GraduationCap, Users, Clock, Check, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define pack type
type Pack = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  price: string;
  duration: string;
  format: string;
  targetAudience: string;
  color: string;
  icon: JSX.Element;
  image: string;
  formations: {
    id: string;
    title: string;
    description: string;
    duration: string;
    icon: JSX.Element;
    image: string;
  }[];
};

const FormationPacks = () => {
  const [openSheet, setOpenSheet] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const packs: Pack[] = [
    {
      id: 'pack-insertion-pro',
      title: "Pack Insertion Pro",
      description: "Un parcours complet pour entrer sur le marché du travail avec confiance et succès",
      benefits: [
        "Économie de 15% par rapport aux formations individuelles",
        "Supports de formation personnalisés",
        "Suivi individuel pendant 3 semaines après la formation",
        "Certificat de formation"
      ],
      price: "Contactez-nous",
      duration: "16h",
      format: "Présentiel",
      targetAudience: "Jeunes diplômés, personnes en reconversion, candidats à l'immigration, chercheurs d'emploi",
      color: "migrapro-terre-cuite",
      icon: <Package className="h-12 w-12 text-migrapro-terre-cuite" />,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      formations: [
        {
          id: 'cv',
          title: "Rédaction de CV",
          description: "Apprenez à rédiger un CV impactant et adapté aux standards malgaches et canadiens pour maximiser vos chances auprès des recruteurs.",
          duration: "4h",
          icon: <FileText className="h-6 w-6 text-migrapro-terre-cuite" />,
          image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
        },
        {
          id: 'lm',
          title: "Lettres de Motivation",
          description: "Maîtrisez l'art de la lettre de motivation convaincante avec des techniques concrètes et des modèles adaptés à chaque situation.",
          duration: "3h",
          icon: <Mail className="h-6 w-6 text-migrapro-terre-cuite" />,
          image: "https://images.unsplash.com/photo-1586282391129-76a2df06b8fe?q=80&w=800&auto=format&fit=crop"
        },
        {
          id: 'recherche-emploi',
          title: "Préparation à la recherche d'emploi",
          description: "Découvrez les stratégies, méthodes de prospection, et outils indispensables pour décrocher rapidement votre premier ou nouveau poste.",
          duration: "5h",
          icon: <Briefcase className="h-6 w-6 text-migrapro-terre-cuite" />,
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        },
        {
          id: 'transition',
          title: "Transition vie étudiante - vie professionnelle",
          description: "Facilitez votre passage des études au marché du travail grâce à un accompagnement ciblé pour valoriser vos compétences et bien démarrer.",
          duration: "4h",
          icon: <GraduationCap className="h-6 w-6 text-migrapro-terre-cuite" />,
          image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop"
        }
      ]
    },
    {
      id: 'pack-rh-starter',
      title: "Pack RH Starter",
      description: "Tout ce dont vous avez besoin pour démarrer en ressources humaines",
      benefits: [
        "Ressources documentaires RH complètes",
        "Modèles personnalisables pour votre entreprise",
        "Session de conseils d'1h avec un expert RH",
        "Certificat de formation"
      ],
      price: "Contactez-nous",
      duration: "8h",
      format: "Présentiel",
      targetAudience: "Managers, assistants RH, entrepreneurs, responsables d'équipe",
      color: "migrapro-bleu-ciel",
      icon: <Package className="h-12 w-12 text-migrapro-bleu-ciel" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      formations: [
        {
          id: 'grh',
          title: "Gestion des Ressources Humaines",
          description: "Maîtrisez les bases et les stratégies RH, tout en découvrant leur mise en œuvre concrète à travers des exercices pratiques adaptés à votre secteur d'activité.",
          duration: "6h",
          icon: <Users className="h-6 w-6 text-migrapro-bleu-ciel" />,
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
        },
        {
          id: 'rh-bonus',
          title: "Bonus: Outils et pratiques RH",
          description: "Ressources additionnelles, modèles et conseils pratiques pour mettre en œuvre une gestion RH efficace dans votre organisation.",
          duration: "2h",
          icon: <Briefcase className="h-6 w-6 text-migrapro-bleu-ciel" />,
          image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop"
        }
      ]
    }
  ];

  const handleModuleClick = (packId: string | null, moduleId: string) => {
    setSelectedModule(moduleId);
  };

  const getCurrentPack = () => {
    return packs.find(pack => pack.id === openSheet);
  };

  const getCurrentPackColor = () => {
    const pack = getCurrentPack();
    return pack ? pack.color : 'migrapro-terre-cuite';
  };

  return (
    <div className="space-y-12">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold mb-3">Nos Packs de Formation</h2>
        <p className="text-gray-600">
          Des parcours complets pour acquérir des compétences cohérentes et complémentaires à un tarif avantageux
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {packs.map((pack) => (
          <Card 
            key={pack.id}
            id={pack.id}
            className={`border-2 border-${pack.color}/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
          >
            <div className="w-full h-48 overflow-hidden relative">
              <img 
                src={pack.image} 
                alt={pack.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-${pack.color}/50 to-transparent flex items-center justify-center`}>
                {pack.icon}
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-center">{pack.title}</CardTitle>
              <p className={`text-${pack.color} text-center font-medium`}>
                {pack.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-500">Ce pack comprend :</h4>
                <ul className="space-y-3">
                  {pack.formations.map((formation) => (
                    <li key={formation.id} className="flex items-start gap-3 pb-3 border-b border-gray-100">
                      <div className="mt-0.5">{formation.icon}</div>
                      <div>
                        <h5 className="font-medium">{formation.title}</h5>
                        <p className="text-sm text-gray-600 line-clamp-1">{formation.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex flex-col items-center bg-gray-50 p-3 rounded-md">
                  <span className="text-sm text-gray-500">Durée totale</span>
                  <span className="font-medium flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-600" />
                    {pack.duration}
                  </span>
                </div>
                <div className="flex flex-col items-center bg-gray-50 p-3 rounded-md">
                  <span className="text-sm text-gray-500">Tarif</span>
                  <span className="font-medium">{pack.price}</span>
                </div>
              </div>

              <div className="flex flex-col items-center bg-gray-50 p-3 rounded-md">
                <span className="text-sm text-gray-500">Format</span>
                <span className="font-medium">{pack.format}</span>
              </div>

              <div className="space-y-4 pt-2">
                <h4 className="font-medium text-sm text-gray-500">Avantages du pack :</h4>
                <ul className="space-y-2">
                  {pack.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={() => setOpenSheet(pack.id)} 
                className={`w-full bg-${pack.color} hover:bg-${pack.color}/90 mt-4 flex items-center justify-center gap-1`}
              >
                Voir le détail complet
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sheet pour le détail des packs */}
      <Sheet open={openSheet === 'pack-insertion-pro' || openSheet === 'pack-rh-starter'} onOpenChange={(open) => setOpenSheet(open ? openSheet : null)}>
        <SheetContent 
          side="right" 
          className="w-full sm:w-[540px] max-w-full p-0 overflow-hidden flex flex-col"
        >
          <div className={`bg-${getCurrentPackColor()}/10 py-4 px-6 flex justify-between items-center`}>
            <div className="flex items-center gap-3">
              {getCurrentPack()?.icon}
              <SheetTitle className="text-2xl">{getCurrentPack()?.title}</SheetTitle>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-gray-200" 
              onClick={() => setOpenSheet(null)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <SheetHeader className="px-6 py-3 border-b">
            <SheetDescription className={`text-${getCurrentPackColor()} font-medium`}>
              {getCurrentPack()?.description}
            </SheetDescription>
          </SheetHeader>

          <ScrollArea className="flex-1 overflow-auto px-6 py-4">
            <div className="space-y-6">
              <div className="w-full h-48 overflow-hidden rounded-md mb-6">
                <img 
                  src={getCurrentPack()?.image} 
                  alt={getCurrentPack()?.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-lg">Modules inclus</h4>
                <div className="space-y-4">
                  {getCurrentPack()?.formations.map((formation) => (
                    <Card key={formation.id} className="hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => handleModuleClick(openSheet, formation.id)}>
                      <CardContent className="p-4 flex gap-3 items-start">
                        <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0 relative">
                          <img
                            src={formation.image}
                            alt={formation.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/placeholder.svg";
                            }}
                          />
                        </div>
                        <div>
                          <h5 className="font-medium">{formation.title}</h5>
                          <p className="text-sm text-gray-600">{formation.description}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Clock className="h-3 w-3 text-gray-500" />
                            <span className="text-xs text-gray-500">{formation.duration}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Informations clés</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm text-gray-500">Public cible</h5>
                    <p className="text-sm">{getCurrentPack()?.targetAudience}</p>
                  </div>
                  <div>
                    <h5 className="text-sm text-gray-500">Format</h5>
                    <p className="text-sm font-medium">{getCurrentPack()?.format}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="text-sm text-gray-500">Tarif pack complet</h5>
                  <p className="text-sm font-medium">{getCurrentPack()?.price}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Avantages du pack</h4>
                <ul className="space-y-2">
                  {getCurrentPack()?.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="h-20"></div> {/* Espace pour éviter que le contenu soit caché derrière le footer */}
            </div>
          </ScrollArea>

          <SheetFooter className="px-6 py-4 border-t flex flex-col sm:flex-row gap-2 bg-white">
            <Button variant="outline" onClick={() => setOpenSheet(null)} className="w-full sm:w-auto">
              Retour aux packs
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <Link to={`/contact?service=formation&pack=${openSheet}`}>
                Demander plus d'infos
              </Link>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FormationPacks;
