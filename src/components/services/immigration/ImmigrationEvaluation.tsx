
import { useState } from 'react';
import { CheckCircle2, Plane, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from '@/components/ui/label';

const ImmigrationEvaluation = () => {
  const [age, setAge] = useState<number>(30);
  const [education, setEducation] = useState<string>("");
  const [workExperience, setWorkExperience] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };
  
  // Simple scoring logic
  const calculateEligibility = () => {
    let score = 0;
    
    // Age scoring (simplified)
    if (age >= 25 && age <= 35) score += 20;
    else if (age > 35 && age <= 45) score += 15;
    else score += 5;
    
    // Education scoring
    if (education === "master") score += 25;
    else if (education === "bachelor") score += 20;
    else if (education === "diploma") score += 15;
    else score += 5;
    
    // Work experience scoring
    if (workExperience === "5plus") score += 25;
    else if (workExperience === "3to5") score += 20;
    else if (workExperience === "1to3") score += 15;
    else score += 5;
    
    // Language scoring
    if (language === "fluent") score += 30;
    else if (language === "intermediate") score += 20;
    else score += 5;
    
    return score;
  };
  
  const score = calculateEligibility();
  const isEligible = score >= 60;
  
  return (
    <section className="py-16 bg-gray-50" id="evaluation">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Évaluez votre éligibilité
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Répondez à quelques questions pour obtenir une première évaluation de votre admissibilité 
            aux programmes d'immigration canadienne.
          </p>
          
          {!showResult ? (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-center">Questionnaire d'éligibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="age" className="text-lg mb-2 block">
                      Âge: {age} ans
                    </Label>
                    <Slider
                      id="age"
                      value={[age]}
                      min={18}
                      max={65}
                      step={1}
                      onValueChange={([value]) => setAge(value)}
                      className="mb-6"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="education" className="text-lg">
                      Niveau d'études le plus élevé
                    </Label>
                    <Select value={education} onValueChange={setEducation}>
                      <SelectTrigger id="education">
                        <SelectValue placeholder="Sélectionnez votre niveau d'études" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="highSchool">Lycée / Bac</SelectItem>
                        <SelectItem value="diploma">Diplôme technique / BTS / DUT</SelectItem>
                        <SelectItem value="bachelor">Licence / Bachelor</SelectItem>
                        <SelectItem value="master">Master / Ingénieur ou plus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="workExperience" className="text-lg">
                      Expérience professionnelle
                    </Label>
                    <Select value={workExperience} onValueChange={setWorkExperience}>
                      <SelectTrigger id="workExperience">
                        <SelectValue placeholder="Sélectionnez votre expérience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Aucune expérience</SelectItem>
                        <SelectItem value="1to3">1 à 3 ans</SelectItem>
                        <SelectItem value="3to5">3 à 5 ans</SelectItem>
                        <SelectItem value="5plus">Plus de 5 ans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="language" className="text-lg">
                      Niveau en anglais ou français
                    </Label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Sélectionnez votre niveau" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Débutant</SelectItem>
                        <SelectItem value="intermediate">Intermédiaire</SelectItem>
                        <SelectItem value="fluent">Avancé / Bilingue</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-migrapro-bleu-ciel hover:bg-migrapro-bleu-ciel/80 w-full mt-6"
                    disabled={!education || !workExperience || !language}
                  >
                    Évaluer mon profil
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className={`border-2 ${isEligible ? 'border-green-500' : 'border-amber-500'} shadow-lg animate-fade-in`}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {isEligible ? (
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                  ) : (
                    <AlertCircle className="w-16 h-16 text-amber-500" />
                  )}
                </div>
                <CardTitle className="text-2xl font-heading text-center">
                  {isEligible 
                    ? "Votre profil semble éligible !" 
                    : "Votre profil pourrait nécessiter des améliorations"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-lg mb-2">Score estimé:</p>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                    <div 
                      className={`h-4 rounded-full ${isEligible ? 'bg-green-500' : 'bg-amber-500'}`}
                      style={{ width: `${Math.min(score, 100)}%` }}
                    ></div>
                  </div>
                  <p className="font-bold">{score}/100 points</p>
                </div>
                
                <p className="text-gray-600 text-center">
                  {isEligible 
                    ? "Félicitations ! Votre profil semble bien correspondre aux critères des programmes d'immigration canadienne. Contactez-nous pour une évaluation détaillée et personnalisée." 
                    : "Votre profil présente quelques points qui pourraient être améliorés. Contactez-nous pour une évaluation personnalisée et des conseils sur mesure pour renforcer votre candidature."}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    className="bg-migrapro-bleu-ciel hover:bg-migrapro-bleu-ciel/80"
                    asChild
                  >
                    <a href="/contact?service=immigration">
                      Obtenir une évaluation détaillée
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-migrapro-bleu-ciel text-migrapro-bleu-ciel"
                    onClick={() => setShowResult(false)}
                  >
                    Refaire l'évaluation
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImmigrationEvaluation;
