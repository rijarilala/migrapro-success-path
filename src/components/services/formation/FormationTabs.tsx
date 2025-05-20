
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FormationCategories from './FormationCategories';
import FormationPacks from './FormationPacks';
import { BookOpen, Package } from 'lucide-react';
import { useLocation, useSearchParams } from 'react-router-dom';

const FormationTabs = () => {
  const [activeTab, setActiveTab] = useState("categories");
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Effet pour détecter les hash dans l'URL et sélectionner le bon onglet
  useEffect(() => {
    const hash = location.hash.substring(1); // Enlever le # du hash
    const fromSearch = searchParams.get('fromSearch') === 'true';
    
    if (hash && fromSearch) {
      console.log(`FormationTabs.tsx: Détection de hash=${hash} avec fromSearch=true`);
      
      // Vérifier si le hash correspond à un pack
      if (hash.startsWith('pack-')) {
        console.log("FormationTabs.tsx: Détection d'un pack, changement pour l'onglet 'packs'");
        setActiveTab('packs');
      }
    }
  }, [location.hash, searchParams]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Tabs 
          defaultValue="categories" 
          className="w-full"
          value={activeTab}
          onValueChange={(value) => {
            console.log(`FormationTabs.tsx: Changement d'onglet vers ${value}`);
            setActiveTab(value);
          }}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="categories" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Formations par catégorie</span>
              </TabsTrigger>
              <TabsTrigger value="packs" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span>Packs de formations</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="categories" className="mt-0">
            <FormationCategories />
          </TabsContent>
          
          <TabsContent value="packs" className="mt-0">
            <FormationPacks />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FormationTabs;
