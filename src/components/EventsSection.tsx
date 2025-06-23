import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';

const EventsSection = () => {
  const events = [
    {
      date: "2024",
      title: "Basketball Tournament",
      description: "A thrilling basketball tournament that brought players and fans together for a great cause.",
      image: "/Images/event8.jpg",
      type: "past",
      raised: "Raised: $2,000"
    },
    {
      date: "2025",
      title: "Soccer Tournament",
      description: "A day of friendly competition and community spirit on the soccer field.",
      image: "/Images/event7.jpg",
      type: "past",
      raised: "Raised: $2,800"
    },
    {
      date: "2023",
      title: "Soccer Tournament",
      description: "A fun and competitive soccer tournament that brought teams together for friendly competition.",
      image: "/Images/event3.jpg",
      type: "past",
      raised: "Raised: $2,000"
    },
    {
      date: "2023",
      title: "Basketball Tournament",
      description: "A basketball tournament that raised significant funds while promoting community engagement.",
      image: "/Images/fundraisers.jpg",
      type: "past",
      raised: "Raised: $2,000"
    },
    {
      date: "2023",
      title: "BBQ Event",
      description: "A delicious BBQ event that combined great food with community fundraising.",
      image: "/Images/event 6.jpg",
      type: "past",
      raised: "Raised: $1,400"
    },
    {
      date: "2025",
      title: "Community Fundraiser",
      description: "A community fundraising event that marked the beginning of our fundraising journey.",
      image: "/Images/event 5.jpg",
      type: "past",
      raised: "Raised: $2,000"
    },
    {
      date: "2023",
      title: "Bake Sale for Palestine",
      description: "A heartfelt bake sale fundraiser to support urgent relief efforts for Palestine.",
      image: "/Images/bakesale-palestine.jpg",
      type: "past",
      raised: "Raised: $1,000"
    }
  ];

  return (
    <section id="events" className="section-padding bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="bubble-text-md gradient-text mb-6 smooth-entrance sparkle">Events & Fundraisers</h2>
          <p className="text-section max-w-2xl mx-auto smooth-entrance-delayed text-gray-600">
            From heartwarming galas to community marathons, our events bring people together to create positive change and unforgettable memories.
          </p>
        </div>
        
        <div className="relative px-12">
          <Carousel 
            className="w-full max-w-7xl mx-auto" 
            opts={{ 
              loop: true,
              align: "start",
              slidesToScroll: 1
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {events.map((event, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <div className="bg-white rounded-3xl shadow-lg border border-primary-200/50 p-6 h-full flex flex-col group hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                      <div className="relative overflow-hidden rounded-2xl mb-4">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary-600 font-bold text-sm">
                          {event.date}
                        </div>
                      </div>
                      
                      <div className="flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{event.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">{event.description}</p>
                        <div className="mt-auto">
                          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-sm font-semibold shadow-md">
                            {event.raised}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white border-2 border-primary-300 hover:border-primary-500 shadow-lg" />
            <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white border-2 border-primary-300 hover:border-primary-500 shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
