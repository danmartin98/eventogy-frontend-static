import EventCard from "../EventCard/EventCard";

const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">
      {events.map((event, index) => (
        <div key={event.id} className="p-5 ">
          <EventCard event={event} index={index} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
