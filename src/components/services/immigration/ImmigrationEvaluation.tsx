import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface CheckboxOption {
  id: string;
  label: string;
  value: string;
}

interface EligibilityResult {
  eligible: boolean;
  message: string;
  details: string;
  level: "high" | "medium" | "low";
}

const ImmigrationEvaluation = () => {
  const navigate = useNavigate();
  const initialFormData = {
    age: "",
    education: "",
    experience: "",
    
    frenchLevel: "",
    englishLevel: "",
    
    profession: "",
    
    familyTies: "",
    canadaProject: "",
    
    name: "",
    email: "",
    phone: "",
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [globalEligibilityResult, setGlobalEligibilityResult] = useState<EligibilityResult | null>(null);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const ageOptions: CheckboxOption[] = [
    { id: "age-18-29", label: "18 - 29 ans", value: "18-29" },
    { id: "age-30-39", label: "30 - 39 ans", value: "30-39" },
    { id: "age-40-44", label: "40 - 44 ans", value: "40-44" },
    { id: "age-45-plus", label: "45 ans et plus", value: "45+" },
  ];

  const educationOptions: CheckboxOption[] = [
    { id: "edu-none", label: "Aucun diplôme", value: "none" },
    { id: "edu-highschool", label: "Diplôme d'études secondaires", value: "highschool" },
    { id: "edu-postsecondary", label: "Diplôme postsecondaire (Bac+2)", value: "postsecondary" },
    { id: "edu-bachelor", label: "Licence (Bac+3)", value: "bachelor" },
    { id: "edu-master", label: "Master ou Doctorat", value: "master" },
  ];

  const experienceOptions: CheckboxOption[] = [
    { id: "exp-none", label: "Aucune expérience", value: "none" },
    { id: "exp-less1", label: "Moins d'un an", value: "less1" },
    { id: "exp-1-3", label: "1 - 3 ans", value: "1-3" },
    { id: "exp-4-5", label: "4 - 5 ans", value: "4-5" },
    { id: "exp-more5", label: "Plus de 5 ans", value: "more5" },
  ];

  const frenchLevelOptions: CheckboxOption[] = [
    { id: "french-none", label: "Aucune compétence", value: "none" },
    { id: "french-intermediate", label: "Niveau intermédiaire", value: "intermediate" },
    { id: "french-fluent", label: "Courant", value: "fluent" },
  ];

  const englishLevelOptions: CheckboxOption[] = [
    { id: "english-none", label: "Aucune compétence", value: "none" },
    { id: "english-intermediate", label: "Niveau intermédiaire", value: "intermediate" },
    { id: "english-fluent", label: "Courant", value: "fluent" },
  ];

  const projectOptions: CheckboxOption[] = [
    { id: "project-study", label: "Étudier", value: "study" },
    { id: "project-work", label: "Travailler", value: "work" },
    { id: "project-settle", label: "M'établir de façon permanente", value: "settle" },
    { id: "project-family", label: "Rejoindre un membre de ma famille", value: "family" },
  ];

  const handleSingleOptionChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleCheckboxChange = (fieldName: string, checked: boolean) => {
    setFormData({ ...formData, [fieldName]: checked });
  };

  const handleTextChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
      const formContainer = document.querySelector('.immigration-evaluation-container');
      if (formContainer) {
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    const formContainer = document.querySelector('.immigration-evaluation-container');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setGlobalEligibilityResult(null);
    setAttemptedSubmit(false);
    setCurrentStep(1);
    const formContainer = document.querySelector('.immigration-evaluation-container');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    toast.success("Le formulaire a été réinitialisé");
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      if (!formData.age) {
        toast.error("Veuillez sélectionner votre tranche d'âge");
        return false;
      }
      if (!formData.education) {
        toast.error("Veuillez sélectionner votre niveau d'études");
        return false;
      }
      if (!formData.experience) {
        toast.error("Veuillez sélectionner votre expérience professionnelle");
        return false;
      }
      if (!formData.frenchLevel) {
        toast.error("Veuillez indiquer votre niveau de français");
        return false;
      }
      if (!formData.englishLevel) {
        toast.error("Veuillez indiquer votre niveau d'anglais");
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.canadaProject) {
        toast.error("Veuillez sélectionner au moins un projet au Canada");
        return false;
      }
      if (!formData.familyTies) {
        toast.error("Veuillez indiquer si vous avez des liens familiaux au Canada");
        return false;
      }
    } else if (currentStep === 3) {
      if (attemptedSubmit) {
        if (!formData.name || !formData.email || !formData.phone) {
          toast.error("Veuillez remplir tous les champs de contact");
          return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          toast.error("Veuillez entrer une adresse email valide");
          return false;
        }
      }
      return true;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (currentStep === 3) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error("Veuillez remplir tous les champs de contact");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error("Veuillez entrer une adresse email valide");
        return;
      }
    }
    
    setCurrentStep(4);
    const formContainer = document.querySelector('.immigration-evaluation-container');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => {
      const eligibilityResults = calculateEligibilityBehindTheScenes();
      setGlobalEligibilityResult(determineGlobalEligibility(eligibilityResults));
    }, 1500);
  };

  const calculateEligibilityBehindTheScenes = () => {
    const results = [];
    
    let expressPoints = 0;
    let expressMaxPoints = 100;
    
    switch(formData.age) {
      case "18-29":
        expressPoints += 25;
        break;
      case "30-39":
        expressPoints += 20;
        break;
      case "40-44":
        expressPoints += 10;
        break;
      case "45+":
        expressPoints += 0;
        break;
    }
    
    switch(formData.education) {
      case "none":
        expressPoints += 0;
        break;
      case "highschool":
        expressPoints += 5;
        break;
      case "postsecondary":
        expressPoints += 15;
        break;
      case "bachelor":
        expressPoints += 20;
        break;
      case "master":
        expressPoints += 25;
        break;
    }
    
    switch(formData.experience) {
      case "none":
        expressPoints += 0;
        break;
      case "less1":
        expressPoints += 5;
        break;
      case "1-3":
        expressPoints += 10;
        break;
      case "4-5":
        expressPoints += 15;
        break;
      case "more5":
        expressPoints += 20;
        break;
    }
    
    switch(formData.frenchLevel) {
      case "fluent":
        expressPoints += 15;
        break;
      case "intermediate":
        expressPoints += 8;
        break;
      case "none":
        expressPoints += 0;
        break;
    }
    
    switch(formData.englishLevel) {
      case "fluent":
        expressPoints += 15;
        break;
      case "intermediate":
        expressPoints += 8;
        break;
      case "none":
        expressPoints += 0;
        break;
    }
    
    let expressLevel: "high" | "medium" | "low" = "low";
    let expressMessage = "";
    let expressDetails = "";
    
    const expressPercentage = expressPoints / expressMaxPoints;
    if (expressPercentage >= 0.7) {
      expressLevel = "high";
    } else if (expressPercentage >= 0.5) {
      expressLevel = "medium";
    } else {
      expressLevel = "low";
    }
    
    results.push({
      eligible: expressLevel === "high",
      message: expressMessage,
      details: expressDetails,
      level: expressLevel
    });
    
    let genericPoints = 0;
    let genericMaxPoints = 100;
    
    switch(formData.age) {
      case "18-29":
        genericPoints += 20;
        break;
      case "30-39":
        genericPoints += 16;
        break;
      case "40-44":
        genericPoints += 8;
        break;
      case "45+":
        genericPoints += 0;
        break;
    }
    
    switch(formData.education) {
      case "none":
        genericPoints += 0;
        break;
      case "highschool":
        genericPoints += 4;
        break;
      case "postsecondary":
        genericPoints += 8;
        break;
      case "bachelor":
        genericPoints += 14;
        break;
      case "master":
        genericPoints += 18;
        break;
    }
    
    switch(formData.experience) {
      case "none":
        genericPoints += 0;
        break;
      case "less1":
        genericPoints += 4;
        break;
      case "1-3":
        genericPoints += 8;
        break;
      case "4-5":
        genericPoints += 12;
        break;
      case "more5":
        genericPoints += 16;
        break;
    }
    
    switch(formData.frenchLevel) {
      case "fluent":
        genericPoints += 20;
        break;
      case "intermediate":
        genericPoints += 10;
        break;
      case "none":
        genericPoints += 0;
        break;
    }
    
    switch(formData.englishLevel) {
      case "fluent":
        genericPoints += 10;
        break;
      case "intermediate":
        genericPoints += 5;
        break;
      case "none":
        genericPoints += 0;
        break;
    }
    
    let genericLevel: "high" | "medium" | "low" = "low";
    let genericMessage = "";
    let genericDetails = "";
    
    const genericPercentage = genericPoints / genericMaxPoints;
    if (genericPercentage >= 0.7) {
      genericLevel = "high";
    } else if (genericPercentage >= 0.5) {
      genericLevel = "medium";
    } else {
      genericLevel = "low";
    }
    
    results.push({
      eligible: genericLevel === "high",
      message: genericMessage,
      details: genericDetails,
      level: genericLevel
    });
    
    const isPeqEligible = formData.frenchLevel === "fluent" || formData.frenchLevel === "intermediate";
    const peqLevel: "high" | "medium" | "low" = isPeqEligible ? 
      (formData.experience !== "none" ? "high" : "medium") : "low";
    
    let peqMessage = "";
    let peqDetails = "";
    
    results.push({
      eligible: peqLevel === "high",
      message: peqMessage,
      details: peqDetails,
      level: peqLevel
    });
    
    return results;
  };

  const determineGlobalEligibility = (results: EligibilityResult[]): EligibilityResult => {
    if (results.some(result => result.level === "high")) {
      return {
        eligible: true,
        level: "high",
        message: "✅ Félicitations ! Votre profil correspond à nos critères d'éligibilité.",
        details: "Selon notre analyse, vous avez d'excellentes chances d'être admissible à l'immigration canadienne. Nous vous recommandons de poursuivre votre démarche avec un conseiller en immigration."
      };
    }
    
    if (results.some(result => result.level === "medium")) {
      return {
        eligible: true,
        level: "medium",
        message: "⚠️ Éligibilité possible. Votre profil présente un potentiel intéressant.",
        details: "Notre évaluation préliminaire indique que vous pourriez être admissible à l'immigration canadienne, mais certains aspects de votre profil nécessitent une analyse plus approfondie par un expert."
      };
    }
    
    return {
      eligible: false,
      level: "low",
      message: "ℹ️ Faible chance d'éligibilité avec votre profil actuel.",
      details: "Votre profil actuel pourrait ne pas correspondre entièrement aux critères d'admissibilité, mais d'autres options peuvent être envisageables. Un conseiller pourrait vous suggérer des alternatives ou des moyens d'améliorer votre candidature."
    };
  };

  const getStatusBadgeClass = (level: "high" | "medium" | "low") => {
    switch (level) {
      case "high":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (level: "high" | "medium" | "low") => {
    switch (level) {
      case "high":
        return "Excellente éligibilité";
      case "medium":
        return "Éligibilité possible";
      case "low":
        return "Potentiel à développer";
      default:
        return "Indéterminé";
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto immigration-evaluation-container">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step === currentStep
                    ? "bg-brand-600 text-white"
                    : step < currentStep
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step < currentStep ? "✓" : step}
              </div>
              <div className="text-xs text-gray-500">
                {step === 1
                  ? "Profil"
                  : step === 2
                  ? "Projet"
                  : step === 3
                  ? "Contact"
                  : "Résultat"}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 h-1 mt-4 rounded-full">
          <div
            className="bg-brand-600 h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {currentStep === 1 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Informations personnelles</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Âge (Sélectionner une tranche d'âge)</h3>
              <RadioGroup value={formData.age} onValueChange={(value) => handleSingleOptionChange("age", value)} className="grid gap-3">
                {ageOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Niveau d'études</h3>
              <RadioGroup value={formData.education} onValueChange={(value) => handleSingleOptionChange("education", value)} className="grid gap-3">
                {educationOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Expérience professionnelle</h3>
              <RadioGroup value={formData.experience} onValueChange={(value) => handleSingleOptionChange("experience", value)} className="grid gap-3">
                {experienceOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Compétences linguistiques</h3>
              
              <div className="bg-blue-50 rounded-lg p-4 space-y-4">
                <h4 className="font-medium text-blue-800">Français</h4>
                <RadioGroup value={formData.frenchLevel} onValueChange={(value) => handleSingleOptionChange("frenchLevel", value)} className="grid gap-3">
                  {frenchLevelOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem id={option.id} value={option.value} />
                      <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 space-y-4">
                <h4 className="font-medium text-red-800">Anglais</h4>
                <RadioGroup value={formData.englishLevel} onValueChange={(value) => handleSingleOptionChange("englishLevel", value)} className="grid gap-3">
                  {englishLevelOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem id={option.id} value={option.value} />
                      <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Votre projet d'immigration</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Votre projet au Canada</h3>
              <RadioGroup value={formData.canadaProject} onValueChange={(value) => handleSingleOptionChange("canadaProject", value)} className="grid gap-3">
                {projectOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Avez-vous des liens familiaux au Canada ?</h3>
              <RadioGroup value={formData.familyTies} onValueChange={(value) => handleSingleOptionChange("familyTies", value)} className="grid gap-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="family-yes" value="yes" />
                  <Label htmlFor="family-yes">Oui (famille directe: parents, frères/sœurs, enfants)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="family-no" value="no" />
                  <Label htmlFor="family-no">Non</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Vos coordonnées</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleTextChange("name", e.target.value)}
                  placeholder="Entrez votre nom complet"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Adresse email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleTextChange("email", e.target.value)}
                  placeholder="votre@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleTextChange("phone", e.target.value)}
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour une analyse plus approfondie de votre situation.
              </p>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-6">
              {globalEligibilityResult ? (
                <>
                  <div className={`inline-flex items-center justify-center p-2 px-4 rounded-full ${getStatusBadgeClass(globalEligibilityResult.level)}`}>
                    {getStatusText(globalEligibilityResult.level)}
                  </div>
                  <h2 className="text-2xl font-semibold mt-4 mb-2">{globalEligibilityResult.message}</h2>
                  <p className="text-gray-600">{globalEligibilityResult.details}</p>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
                  </div>
                  <h2 className="text-xl font-medium">Évaluation en cours...</h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Veuillez patienter pendant que nous analysons votre profil
                  </p>
                </>
              )}
            </div>

            {globalEligibilityResult && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-medium mb-4">Prochaines étapes recommandées</h3>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li className="pl-2">
                      <span className="font-medium">Consultation personnalisée</span> - Prenez rendez-vous avec l'un de nos conseillers en immigration pour une analyse approfondie de votre profil.
                    </li>
                    <li className="pl-2">
                      <span className="font-medium">Préparation du dossier</span> - Commencez à rassembler les documents nécessaires pour votre demande d'immigration.
                    </li>
                    <li className="pl-2">
                      <span className="font-medium">Plan d'action</span> - Nous vous aiderons à élaborer un plan d'action sur mesure pour maximiser vos chances.
                    </li>
                  </ol>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={resetForm} variant="outline">
                    Refaire l'évaluation
                  </Button>
                  <Button onClick={() => handleNavigation("/contact")}>
                    Prendre rendez-vous
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {currentStep < 4 && (
          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <Button type="button" variant="outline" onClick={handlePrevStep}>
                Précédent
              </Button>
            ) : (
              <div></div>
            )}
            {currentStep < 3 ? (
              <Button type="button" onClick={handleNextStep}>
                Suivant
              </Button>
            ) : currentStep === 3 ? (
              <Button type="submit">
                Évaluer mon admissibilité
              </Button>
            ) : null}
          </div>
        )}
      </form>
    </div>
  );
};

export default ImmigrationEvaluation;
