import SearchButton from "@/components/SearchButton";
import { Input } from "@/components/ui/input";
import Form from "next/form";

const TicketSearch = () => {
  return (
    <Form action="/tickets" className="flex items-center gap-2">
      <Input
        name="searchText"
        type="text"
        placeholder="Search tickets..."
        className="w-full"
      />
      <SearchButton />
    </Form>
  );
};

export default TicketSearch;
