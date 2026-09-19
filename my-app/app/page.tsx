import {AddEventButton} from "@/components/AddEventButton";
import {EventList} from "@/components/EventList";
import { SearchButton } from "@/components/SearchButton";

export default function Home() {
  return (
    <div className="flex ">
      <div className="flex-1 bg-amber-200 h-screen p-2 text-blue-950 max-w-1/2 justify-center items-center">
        <div className="flex items-center justify-between m-4">
          <input type="text" placeholder="Search events..." className=" w-150 bg-amber-300 p-4 rounded-3xl" />
        </div>
        <div className="flex items-center justify-between m-4 p-4">
          <SearchButton />
        </div>
      </div>
      <div className="flex-1 bg-amber-950 h-screen p-2 max-w-1/2">
        <div>
          <AddEventButton />
        </div>
        <div>
          <EventList />
        </div>
      </div>
    </div>
  );
}
