import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';

const EventsSection = () => {
  const events = [
    {
      date: "July 2024",
      title: "Basketball Tournament",
      description: "A thrilling basketball tournament that brought players and fans together for a great cause.",
      image: "/Images/event8.jpg",
      type: "past",
      raised: "Raised: $2,000"
    },
    {
      date: "June 2025",
      title: "Soccer Tournament",
      description: "A day of friendly competition and community spirit on the soccer field.",
      image: "/Images/event7.jpg",
      type: "past",
      raised: "Raised: $2,800"
    },
    {
      date: "August 2023",
      title: "Soccer Tournament",
      description: "A fun and competitive soccer tournament that brought teams together for friendly competition.",
      image: "/Images/event3.jpg",
      type: "past",
      raised: "Raised: $2,000"
    },
    {
      date: "August 2023",
      title: "Basketball Tournament",
      description: "A basketball tournament that raised significant funds while promoting community engagement.",
      image: "/Images/event2.jpg",
      type: "past",
      raised: "Raised: $2,000"
    },
    {
      date: "July 2023",
      title: "BBQ Event",
      description: "A delicious BBQ event that combined great food with community fundraising.",
      image: "/Images/event 6.jpg",
      type: "past",
      raised: "Raised: $1,400"
    },
    {
      date: "June 2023",
      title: "Community Fundraiser",
      description: "A community fundraising event that marked the beginning of our fundraising journey.",
      image: "/Images/event 5.jpg",
      type: "past",
      raised: "Raised: $2,000"
    }
  ];

  return (
    <section id="events" className="section-padding bg-white fade-in-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="bubble-text-md gradient-text mb-6 transition-all duration-300 hover:scale-105 hover:text-primary-600 hover:drop-shadow-xl sparkle">Events & Fundraisers</h2>
          <p className="text-section max-w-2xl mx-auto">
            From heartwarming galas to community marathons, our events bring people together to create positive change and unforgettable memories.
          </p>
        </div>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-primary-50">
          <Carousel className="w-full max-w-full sm:max-w-4xl mx-auto" opts={{ slidesToScroll: 1, align: 'start', loop: true }}>
            <CarouselPrevious />
            <CarouselContent className="flex">
              {events.map((event, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 min-w-[90vw] sm:min-w-[320px] max-w-full sm:max-w-[400px] animate-fade-in-up transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-primary-300">
                  <div className={`rounded-2xl shadow-xl border-2 border-primary-300 bg-gradient-to-br from-primary-50 to-sky-100 p-4 sm:p-6 flex flex-col items-center text-center hover:shadow-2xl hover:border-primary-400 transition-all duration-300`}>
                    <img src={event.image} alt={event.title} className="w-full h-32 sm:h-40 object-cover rounded-xl mb-3 sm:mb-4 transition-transform duration-300 hover:scale-105" />
                    <div className="mb-1 sm:mb-2 text-primary-600 font-bold text-xs sm:text-sm">{event.date}</div>
                    <h3 className="bubble-text-sm mb-1 sm:mb-2">{event.title}</h3>
                    <p className="mb-2 sm:mb-3 text-gray-700 text-sm sm:text-base">{event.description}</p>
                    <div className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${event.type === 'upcoming' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-700'}`}>{event.raised}</div>
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
