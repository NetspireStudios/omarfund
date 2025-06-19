import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';

const EventsSection = () => {
  const events = [
    {
      date: "July 2024",
      title: "Basketball Shootout",
      description: "A thrilling basketball shootout event at Underpass Toronto, bringing together players and fans.",
      image: "/Images/event8.jpg",
      type: "past",
      raised: "Raised: $4,000"
    },
    {
      date: "June 2024",
      title: "Soccer Tournament",
      description: "A day of friendly competition and community spirit on the soccer field.",
      image: "/Images/event7.jpg",
      type: "past",
      raised: "Raised: $5,000"
    },
    {
      date: "May 2024",
      title: "Team Celebration",
      description: "Celebrating our volunteers and their achievements after a successful event.",
      image: "/Images/event3.jpg",
      type: "past",
      raised: "Raised: $2,500"
    },
    {
      date: "April 2024",
      title: "Basketball Fundraiser",
      description: "A basketball tournament to raise funds and bring the community together.",
      image: "/Images/event2.jpg",
      type: "past",
      raised: "Raised: $3,000"
    },
    {
      date: "March 2024",
      title: "Spring Picnic",
      description: "A picnic event with food, games, and fun for all ages.",
      image: "/Images/event 6.jpg",
      type: "past",
      raised: "Raised: $1,800"
    },
    {
      date: "February 2024",
      title: "Community Gathering",
      description: "Bringing people together for a day of food, conversation, and connection.",
      image: "/Images/event 5.jpg",
      type: "past",
      raised: "Raised: $2,200"
    },
    {
      date: "January 2024",
      title: "Winter Soccer Match",
      description: "A winter soccer match to kick off the new year with energy and excitement.",
      image: "/Images/Event9.jpg",
      type: "past",
      raised: "Raised: $2,700"
    },
    {
      date: "December 2023",
      title: "Holiday Event",
      description: "A festive event to celebrate the holidays and support our cause.",
      image: "/Images/event 4.jpg",
      type: "past",
      raised: "Raised: $3,500"
    }
  ];

  return (
    <section className="section-padding bg-white fade-in-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="bubble-text-md gradient-text mb-6 transition-all duration-300 hover:scale-105 hover:text-primary-600 hover:drop-shadow-xl sparkle">Events & Fundraisers</h2>
          <p className="text-section max-w-2xl mx-auto">
            From heartwarming galas to community marathons, our events bring people together to create positive change and unforgettable memories.
          </p>
        </div>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-primary-50">
          <Carousel className="w-full max-w-4xl mx-auto" opts={{ slidesToScroll: 1, align: 'start', loop: true }}>
            <CarouselPrevious />
            <CarouselContent className="flex">
              {events.map((event, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/2 min-w-[320px] max-w-[400px] animate-fade-in-up transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-primary-300">
                  <div className={`rounded-2xl shadow-xl border-2 border-primary-300 bg-gradient-to-br from-primary-50 to-sky-100 p-6 flex flex-col items-center text-center hover:shadow-2xl hover:border-primary-400 transition-all duration-300`}>
                    <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105" />
                    <div className="mb-2 text-primary-600 font-bold text-sm">{event.date}</div>
                    <h3 className="bubble-text-sm mb-2">{event.title}</h3>
                    <p className="mb-3 text-gray-700 text-base">{event.description}</p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${event.type === 'upcoming' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-700'}`}>{event.raised}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
