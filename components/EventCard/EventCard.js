import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

const EventCard = async ({ event, index }) => {
  const imageUrl = `https://source.unsplash.com/featured/300x30${index}?q=80`;

  function formatScheduledDates(scheduledDates) {
    // Parse and sort the dates
    const parsedDates = scheduledDates.map(
      (dateString) => new Date(dateString)
    );
    parsedDates.sort((a, b) => a - b);

    // // Format the first and last dates
    const firstDate = parsedDates[0].toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
    const lastDate = parsedDates[parsedDates.length - 1].toLocaleDateString(
      "en-US",
      { month: "long", day: "numeric" }
    );

    // // Determine the ordinal suffix for the first date
    const suffix =
      firstDate.match(/\d{1,2}/)[0] % 10 === 1 &&
      firstDate.match(/\d{1,2}/)[0] !== "11"
        ? "st"
        : firstDate.match(/\d{1,2}/)[0] % 10 === 2 &&
          firstDate.match(/\d{1,2}/)[0] !== "12"
        ? "nd"
        : firstDate.match(/\d{1,2}/)[0] % 10 === 3 &&
          firstDate.match(/\d{1,2}/)[0] !== "13"
        ? "rd"
        : "th";

    // // Combine the formatted dates with the ordinal suffix
    return `${firstDate}${suffix} - ${lastDate}`;
  }

  return (
    <div className="border-t-8 border-blue-500 rounded-md">
      <Card className="w-full">
        <Link href={event.slug}>
          <CardHeader>
            <Image
              src={imageUrl}
              width={800}
              height={200}
              className="object-cover h-52 md:h-40 lg:h-48 xl:h-56 w-full rounded-t-md"
              alt={`Event image for ${event.name}`}
            />
            <CardTitle className="text-lg">{event.name}</CardTitle>
            <CardDescription>
              {formatScheduledDates(event.data.scheduled_dates)}
            </CardDescription>
          </CardHeader>

          <CardContent className="py-1">
            <p>London, UK</p>
          </CardContent>
        </Link>
        <CardFooter className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="mt-3">
            <Star className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="mt-3">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EventCard;
