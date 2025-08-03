import { Input } from "@/components/ui/input";

const SearchInput = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Search"
        className="bg-[#EDF3f8] w-80 rounded-lg border-none text-black"
      />
    </div>
  );
};

export default SearchInput;
