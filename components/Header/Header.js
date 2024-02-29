import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-3 px-16  bg-slate-100">
      <Link href="/">
        <Image
          src="eventogy-logo.svg"
          alt="eventogy logo"
          className="h-[35px] w-[150px]"
          width="50"
          height="15"
        />
      </Link>

      <Input
        className="w-[28rem] border-transparent focus:border-transparent focus:ring-0 rounded-2xl"
        placeholder="Search Events, Attendees, Venues...."
      />

      <button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>DM</AvatarFallback>
        </Avatar>
      </button>
    </header>
  );
};

export default Header;
