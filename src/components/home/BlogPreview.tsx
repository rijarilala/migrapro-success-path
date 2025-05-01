
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const faqPreviews = [
    {
      title: "5 étapes pour préparer son dossier d'immigration au Canada",
      excerpt: "Découvrez les documents essentiels et les astuces pour maximiser vos chances d'obtenir un visa...",
      date: "15 avril 2025",
      category: "Immigration",
      image: "https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/blog#immigration"
    },
    {
      title: "Comment rédiger un CV qui se démarque au Canada",
      excerpt: "Les recruteurs canadiens ont des attentes spécifiques. Voici comment adapter votre CV pour le marché nord-américain...",
      date: "8 avril 2025",
      category: "CV & Lettre",
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/blog#cv"
    },
    {
      title: "Les secteurs qui recrutent à Madagascar en 2025",
      excerpt: "Analyse des tendances du marché de l'emploi local et des compétences les plus recherchées actuellement...",
      date: "2 avril 2025",
      category: "Marché de l'emploi",
      image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/blog#emploi"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Immigration":
        return "bg-migrapro-bleu-ciel text-white";
      case "CV & Lettre":
        return "bg-migrapro-terre-cuite text-white";
      case "Marché de l'emploi":
        return "bg-migrapro-vert-foret text-white";
      default:
        return "bg-migrapro-jaune-soleil text-migrapro-bleu-ciel";
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            FAQ & Conseils
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Trouvez des réponses à vos questions sur l'immigration et l'expatriation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqPreviews.map((post, index) => (
            <Card 
              key={post.title} 
              className="overflow-hidden hover-scale border-none shadow-md animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="font-heading text-xl line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full hover:text-migrapro-terre-cuite" asChild>
                  <Link to={post.slug}>
                    Voir la réponse
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button 
            className="bg-migrapro-bleu-ciel hover:bg-opacity-90 text-white animate-fade-in animate-delay-400"
            asChild
          >
            <Link to="/blog">
              Toutes les FAQ
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
