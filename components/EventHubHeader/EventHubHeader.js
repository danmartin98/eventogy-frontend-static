"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Mail } from "lucide-react";
import Link from "next/link";
import { List, Grid3X3, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventHubHeader = () => {
  const pathname = usePathname();

  const getPathname = (pathname) => {
    const slug = pathname.replace(/\//g, "");
    if (slug === "") return "events";

    return slug;
  };

  const [selectedValue, setSelectedValue] = useState(getPathname(pathname));

  const toggleGroupItemClasses =
    "rounded-3xl text-blue-500 hover:bg-blue-500 hover:text-white  data-[state=on]:bg-blue-500 data-[state=on]:text-white ";

  return (
    <div className="flex items-center justify-between mb-5">
      <div className="mt-4">
        <ToggleGroup
          type="single"
          className="flex justify-between gap-1"
          value={selectedValue}
          onValueChange={(value) => {
            if (value) setSelectedValue(value);
          }}
        >
          <Link href="/">
            <ToggleGroupItem
              value="events"
              aria-label="Toggle events"
              variant="outline"
              className={toggleGroupItemClasses}
            >
              <Mail className="mr-2 h-4 w-4" /> Events
            </ToggleGroupItem>
          </Link>

          <Link href="event-templates">
            <ToggleGroupItem
              value="event-templates"
              aria-label="Toggle templates"
              variant="outline"
              className={toggleGroupItemClasses}
            >
              <Mail className="mr-2 h-4 w-4" /> Templates
            </ToggleGroupItem>
          </Link>

          <Link href="event-archives">
            <ToggleGroupItem
              value="event-archives"
              aria-label="Toggle archives"
              variant="outline"
              className={toggleGroupItemClasses}
            >
              <Mail className="mr-2 h-4 w-4" /> Archive
            </ToggleGroupItem>
          </Link>
        </ToggleGroup>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button variant="ghost" className="p-1">
          <Grid3X3 className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="p-1">
          <List className="h-5 w-5" />
        </Button>

        <Button className="bg-blue-500">Create New</Button>
      </div>
    </div>
  );
};

export default EventHubHeader;
