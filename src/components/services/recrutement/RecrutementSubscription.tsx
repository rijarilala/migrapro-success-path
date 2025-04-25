import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom est requis"
  }),
  email: z.string().email({
    message: "Email invalide"
  }),
  company: z.string().optional(),
  position: z.string().optional(),
  message: z.string().optional()
});
const RecrutementSubscription = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      position: "",
      message: ""
    }
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Inscription enregistrée",
      description: "Nous vous contacterons dès que notre service de recrutement sera lancé."
    });
    form.reset();
  }
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                Inscrivez-vous pour être informé(e)
              </h2>
              <p className="text-gray-600 mb-6">
                Notre service de recrutement sera bientôt disponible. Laissez-nous vos coordonnées 
                pour être parmi les premiers à en bénéficier.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-migrapro-jaune-soleil" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Pour les candidats</h3>
                    <p className="text-gray-600">Accès à des offres d'emploi exclusives au Canada avec des entreprises partenaires.</p>
                  </div>
                </div>
                
              </div>

              <p className="text-sm text-gray-500 italic">
                Votre vie privée est importante pour nous. Nous ne partagerons jamais vos informations avec des tiers.
              </p>
            </div>

            <Card className="shadow-md border-migrapro-jaune-soleil/30">
              <CardHeader>
                <CardTitle>Formulaire d'inscription</CardTitle>
                <CardDescription>Restez informé(e) du lancement de notre service</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="name" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Nom complet*</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="email" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Email*</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="votre.email@exemple.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField control={form.control} name="company" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Entreprise (optionnel)</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre entreprise" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      
                      <FormField control={form.control} name="position" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Poste (optionnel)</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre poste" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>
                    
                    <FormField control={form.control} name="message" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Message (optionnel)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Parlez-nous de vos besoins en recrutement ou de votre recherche d'emploi" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <Button type="submit" className="w-full bg-migrapro-jaune-soleil hover:bg-migrapro-jaune-soleil/90 text-migrapro-bleu-ciel">
                      M'inscrire à la liste d'attente
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default RecrutementSubscription;