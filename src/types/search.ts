
export interface SearchResultItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  category: string;
  type: 'formation' | 'page' | 'faq';
}

export interface GroupedSearchResults {
  [category: string]: SearchResultItem[];
}

export interface SearchState {
  query: string;
  results: SearchResultItem[];
  isLoading: boolean;
  isOpen: boolean;
}
