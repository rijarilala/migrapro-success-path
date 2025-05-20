
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import SearchCommand from '@/components/search/SearchCommand';

const BlogSearch = () => {
  return (
    <div className="mb-8">
      <div className="text-center">
        <SearchCommand className="w-full max-w-md mx-auto" />
      </div>
    </div>
  );
};

export default BlogSearch;
