import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';

const EventsSection = () => {
  const events = [
    {
      date: "March 2025",
      title: "Spring Hope Gala",
      description: "Our biggest fundraising event of the year featuring dinner, entertainment, and inspiring stories from our community.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=200&fit=crop&crop=center",
      type: "upcoming",
      raised: "Goal: $150,000"
    },
    {
      date: "February 2025",
      title: "Community Care Drive",
      description: "Collecting essential items for local families in need. Join us for a day of giving and community spirit.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop&crop=center",
      type: "upcoming",
      raised: "Goal: 5,000 items"
    },
    {
      date: "December 2024",
      title: "Holiday Hearts Festival",
      description: "Brought joy to 300 families with holiday gifts, meals, and celebrations that created lasting memories.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=200&fit=crop&crop=center",
      type: "past",
      raised: "Raised: $75,000"
    },
    {
      date: "October 2024",
      title: "Autumn Action Marathon",
      description: "100 runners participated in our charity marathon, raising funds while promoting health and wellness.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=200&fit=crop&crop=center",
      type: "past",
      raised: "Raised: $45,000"
    },
    {
      date: "August 2024",
      title: "Summer Stories Picnic",
      description: "A beautiful community gathering that celebrated our achievements and strengthened bonds between neighbors.",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=200&fit=crop&crop=center",
      type: "past",
      raised: "Raised: $25,000"
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
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselPrevious />
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index} className="px-2">
                <div className={`rounded-2xl shadow-lg border-2 ${event.type === 'upcoming' ? 'border-primary-300 bg-gradient-to-br from-primary-50 to-sky-100' : 'border-gray-200 bg-white'} p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105`}>
                  <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-xl mb-4" />
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
    </section>
  );
};

export default EventsSection;
