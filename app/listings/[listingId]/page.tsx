import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingsById from "@/app/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

// server component!!
const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingsById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }
  return <ListingClient listing={listing} currentUser={currentUser} />;
};

export default ListingPage;
