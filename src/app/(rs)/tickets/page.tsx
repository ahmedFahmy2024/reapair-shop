import { getTicketSearchResult } from "@/lib/queries/getTicketSearchResult";
import TicketSearch from "./_components/TicketSearch";
import { getOpenTickets } from "@/lib/queries/getOpenTickets";
import TicketTable from "./TicketTable";

export const metadata = {
  title: "Ticket Search",
};

type props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const Tickets = async ({ searchParams }: props) => {
  const { searchText } = await searchParams;

  if (!searchText) {
    const results = await getOpenTickets();
    console.log("results", results);
    return (
      <>
        <TicketSearch />
        {results.length > 0 ? (
          <TicketTable data={results} />
        ) : (
          <p>No results found</p>
        )}
      </>
    );
  }

  const results = await getTicketSearchResult(searchText);
  console.log("serach", results);
  return (
    <>
      <TicketSearch />
      {results.length > 0 ? (
        <TicketTable data={results} />
      ) : (
        <p>No results found</p>
      )}
    </>
  );
};

export default Tickets;
