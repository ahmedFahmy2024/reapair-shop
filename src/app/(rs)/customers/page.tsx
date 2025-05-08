import { getCustomerSearchResult } from "@/lib/queries/getCustomerSearchResult";
import CustomerSearch from "./_components/CustomerSearch";
import CustomerTable from "./CustomerTable";

export const metadata = {
  title: "Customer Search",
};

type props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const Customers = async ({ searchParams }: props) => {
  const { searchText } = await searchParams;

  if (!searchText) return <CustomerSearch />;

  const results = await getCustomerSearchResult(searchText);

  return (
    <>
      <CustomerSearch />
      {results.length > 0 ? (
        <CustomerTable data={results} />
      ) : (
        <p>No results found</p>
      )}
    </>
  );
};

export default Customers;
