
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FormationCategories from './FormationCategories';
import FormationPacks from './FormationPacks';
import { BookOpen, Package } from 'lucide-react';

interface FormationTabsProps {
  initialModalToOpen?: string | null;
}

const FormationTabs = ({ initialModalToOpen }: FormationTabsProps) => {
  const [activeTab, setActiveTab] = useState("categories");

  useEffect(() => {
    // Pass the initialModalToOpen down to the children components
    if (initialModalToOpen) {
      // Make sure we're on the categories tab for formation modals
      setActiveTab("categories");
    }
  }, [initialModalToOpen]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Tabs 
          defaultValue="categories" 
          className="w-full"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
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
            <FormationCategories initialModalToOpen={initialModalToOpen} />
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
