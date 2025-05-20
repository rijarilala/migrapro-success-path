
export interface SearchResult {
  id: string;
  title: string;
  category: "service" | "formation" | "page" | "faq";
  description: string;
  url?: string;
}
