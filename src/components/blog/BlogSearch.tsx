
import SearchCommand from "@/components/search/SearchCommand";

const BlogSearch = () => {
  return (
    <div className="mb-8">
      <div className="relative flex items-center justify-center">
        <SearchCommand className="w-full" />
      </div>
      <div className="mt-2 text-center text-sm text-gray-500">
        Recherchez parmi toutes nos FAQ et services
      </div>
    </div>
  );
};

export default BlogSearch;
