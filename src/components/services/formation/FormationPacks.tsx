
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Package, FileText, Mail, Briefcase, GraduationCap, Users, Clock, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define pack type
type Pack = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  price: string;
  duration: string;
  targetAudience: string;
  color: string;
  icon: JSX.Element;
  formations: {
    id: string;
    title: string;
    description: string;
    duration: string;
    icon: JSX.Element;
  }[];
};

const FormationPacks = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

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
      targetAudience: "Jeunes diplômés, personnes en reconversion, candidats à l'immigration, chercheurs d'emploi",
      color: "migrapro-terre-cuite",
      icon: <Package className="h-12 w-12 text-migrapro-terre-cuite" />,
      formations: [
        {
          id: 'cv',
          title: "Rédaction de CV",
          description: "Apprenez à rédiger un CV pertinent et adapté aux standards malgaches et canadiens pour maximiser vos chances auprès des recruteurs.",
          duration: "4h",
          icon: <FileText className="h-6 w-6 text-migrapro-terre-cuite" />
        },
        {
          id: 'lm',
          title: "Lettres de Motivation",
          description: "Maîtrisez l'art de la lettre de motivation efficace avec des techniques concrètes et des modèles adaptés à chaque situation.",
          duration: "3h",
          icon: <Mail className="h-6 w-6 text-migrapro-terre-cuite" />
        },
        {
          id: 'recherche-emploi',
          title: "Préparation à la recherche d'emploi",
          description: "Découvrez les stratégies, méthodes de prospection, et outils indispensables pour décrocher rapidement votre premier ou nouveau poste.",
          duration: "5h",
          icon: <Briefcase className="h-6 w-6 text-migrapro-terre-cuite" />
        },
        {
          id: 'transition',
          title: "Transition vie étudiante - vie professionnelle",
          description: "Facilitez votre passage des études au marché du travail grâce à un accompagnement ciblé pour valoriser vos compétences et bien démarrer.",
          duration: "4h",
          icon: <GraduationCap className="h-6 w-6 text-migrapro-terre-cuite" />
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
      targetAudience: "Managers, assistants RH, entrepreneurs, responsables d'équipe",
      color: "migrapro-bleu-ciel",
      icon: <Package className="h-12 w-12 text-migrapro-bleu-ciel" />,
      formations: [
        {
          id: 'grh',
          title: "Gestion des Ressources Humaines",
          description: "Maîtrisez les bases et les stratégies RH, tout en découvrant leur mise en œuvre concrète à travers des exercices pratiques adaptés à votre secteur d'activité.",
          duration: "6h",
          icon: <Users className="h-6 w-6 text-migrapro-bleu-ciel" />
        },
        {
          id: 'rh-bonus',
          title: "Bonus: Outils et pratiques RH",
          description: "Ressources additionnelles, modèles et conseils pratiques pour mettre en œuvre une gestion RH efficace dans votre organisation.",
          duration: "2h",
          icon: <Briefcase className="h-6 w-6 text-migrapro-bleu-ciel" />
        }
      ]
    }
  ];

  const handleModuleClick = (packId: string, moduleId: string) => {
    setOpenDialog(moduleId);
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
            className={`border-2 border-${pack.color}/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
          >
            <div className={`bg-${pack.color}/10 p-4 flex justify-center`}>
              {pack.icon}
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

              <Dialog open={openDialog === pack.id} onOpenChange={(open) => setOpenDialog(open ? pack.id : null)}>
                <Button 
                  onClick={() => setOpenDialog(pack.id)} 
                  className={`w-full bg-${pack.color} hover:bg-${pack.color}/90 mt-4 flex items-center justify-center gap-1`}
                >
                  Voir le détail complet
                  <ArrowRight className="h-4 w-4" />
                </Button>
                
                <DialogContent className="max-w-xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-2xl">
                      {pack.icon}
                      <span>{pack.title}</span>
                    </DialogTitle>
                    <DialogDescription className={`text-${pack.color}`}>
                      {pack.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6 py-4">
                    <div className="space-y-3">
                      <h4 className="font-medium">Modules inclus</h4>
                      <div className="space-y-4">
                        {pack.formations.map((formation) => (
                          <Card key={formation.id} className="hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => handleModuleClick(pack.id, formation.id)}>
                            <CardContent className="p-4 flex gap-3 items-start">
                              {formation.icon}
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
                          <p className="text-sm">{pack.targetAudience}</p>
                        </div>
                        <div>
                          <h5 className="text-sm text-gray-500">Tarif pack complet</h5>
                          <p className="text-sm font-medium">{pack.price}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Avantages du pack</h4>
                      <ul className="space-y-2">
                        {pack.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <DialogFooter className="flex-col sm:flex-row gap-2">
                    <Button variant="outline" onClick={() => setOpenDialog(null)}>
                      Fermer
                    </Button>
                    <Button asChild>
                      <Link to={`/contact?service=formation&pack=${pack.id}`}>
                        Demander plus d'infos
                      </Link>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FormationPacks;
