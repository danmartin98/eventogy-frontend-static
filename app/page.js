import EventHubHeader from "@/components/EventHubHeader/EventHubHeader";
import EventList from "@/components/EventList/EventList";

export default async function Home() {
  const response = await fetch("https://www.eventogy.com/api/events.json");

  const data = await response.json();

  return (
    <main>
      <h1 className="py-4 px-16 text-2xl">Event hub</h1>
      <div className=" bg-slate-100 px-16 py-1">
        <EventHubHeader />
        <EventList events={data.data} />
      </div>
    </main>
  );
}
