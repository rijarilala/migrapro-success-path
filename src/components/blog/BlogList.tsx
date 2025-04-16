
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const articles = [
  {
    title: "Guide complet du CV canadien",
    category: "CV/LM",
    date: "2024-04-15",
    excerpt: "Découvrez les normes et bonnes pratiques pour rédiger un CV qui plaira aux recruteurs canadiens.",
    image: "/placeholder.svg"
  },
  {
    title: "Les secteurs qui recrutent à Madagascar",
    category: "Marché local",
    date: "2024-04-14",
    excerpt: "Analyse des opportunités d'emploi et des secteurs en croissance à Madagascar.",
    image: "/placeholder.svg"
  },
  {
    title: "S'installer au Canada : check-list essentielle",
    category: "Immigration",
    date: "2024-04-13",
    excerpt: "Les étapes clés pour réussir son installation au Canada.",
    image: "/placeholder.svg"
  }
];

const BlogList = () => {
  return (
    <div className="grid gap-8">
      {articles.map((article) => (
        <Card key={article.title} className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover md:h-full"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <CardTitle className="text-xl md:text-2xl">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{article.excerpt}</p>
                <button className="mt-4 text-migrapro-terre-cuite hover:underline">
                  Lire la suite →
                </button>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
