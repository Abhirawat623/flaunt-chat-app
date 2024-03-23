import { LogoutBtn } from "./LogoutBtn";
import { SearchBar } from "./SearchBar";
import { Users } from "./Users";
export const Welcome = () => {
  return (
    <div className="w-screen xl:w-80 p-4 md:w-80 flex flex-col sticky ">
      <div className="flex items-center flex-row gap-x-2 ">
        <SearchBar />
          <LogoutBtn/>
      </div>
      <Users />
    </div>
  );
};
