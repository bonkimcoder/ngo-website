import Divider from "./Divider";
import { eventsData } from "../assets/data";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-1">
          <strong>Date:</strong> {event.date}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Time:</strong> {event.time}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Location:</strong> {event.location}
        </p>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <a
          href={event.registrationLink}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Upcoming Events
        </h2>
        <Divider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
