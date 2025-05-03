import { getTicketSearchResult } from "@/lib/queries/getTicketSearchResult";
import TicketSearch from "./_components/TicketSearch";
import { getOpenTickets } from "@/lib/queries/getOpenTickets";

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
        <p>{JSON.stringify(results)}</p>
      </>
    );
  }

  const results = await getTicketSearchResult(searchText);
  console.log("serach", results);
  return (
    <>
      <TicketSearch />
      {JSON.stringify(results)}
    </>
  );
};

export default Tickets;
