import { getCustomerSearchResult } from "@/lib/queries/getCustomerSearchResult";
import CustomerSearch from "./_components/CustomerSearch";

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
      {JSON.stringify(results)}
    </>
  );
};

export default Customers;
