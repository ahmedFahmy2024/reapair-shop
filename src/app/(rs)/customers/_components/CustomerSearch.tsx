import SearchButton from "@/components/SearchButton";
import { Input } from "@/components/ui/input";
import Form from "next/form";

const CustomerSearch = () => {
  return (
    <Form action="/customers" className="flex items-center gap-2">
      <Input
        name="searchText"
        type="text"
        placeholder="Search customers..."
        className="w-full"
      />
      <SearchButton />
    </Form>
  );
};

export default CustomerSearch;
