
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
        <div className="text-center mb-16">
          <h2 className="heading-section">Events & Fundraisers</h2>
          <p className="text-section max-w-3xl mx-auto">
            From heartwarming galas to community marathons, our events bring people together 
            to create positive change and unforgettable memories.
          </p>
        </div>

        <VerticalTimeline lineColor="rgba(74, 144, 226, 0.3)">
          {events.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work scale-in"
              contentStyle={{
                background: event.type === 'upcoming' 
                  ? 'linear-gradient(135deg, #4A90E2 0%, #87CEEB 100%)' 
                  : 'rgba(255, 255, 255, 0.95)',
                color: event.type === 'upcoming' ? '#fff' : '#334155',
                boxShadow: '0 10px 25px rgba(74, 144, 226, 0.2)',
                border: `2px solid ${event.type === 'upcoming' ? 'rgba(255,255,255,0.3)' : 'rgba(74, 144, 226, 0.2)'}`,
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)'
              }}
              contentArrowStyle={{
                borderRight: event.type === 'upcoming' 
                  ? '7px solid #4A90E2' 
                  : '7px solid rgba(255, 255, 255, 0.95)'
              }}
              date={event.date}
              dateClassName={event.type === 'upcoming' ? 'text-primary-600 font-bold' : 'text-gray-500'}
              iconStyle={{
                background: event.type === 'upcoming' 
                  ? 'linear-gradient(135deg, #4A90E2 0%, #87CEEB 100%)' 
                  : 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
                color: event.type === 'upcoming' ? '#fff' : '#0369A1',
                border: '3px solid #fff',
                boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)'
              }}
              icon={
                <div className="flex items-center justify-center h-full">
                  <span className="text-xl">
                    {event.type === 'upcoming' ? '🎯' : '🎉'}
                  </span>
                </div>
              }
            >
              <div className="mb-4">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="bubble-text-sm mb-2">{event.title}</h3>
                <p className="mb-3 leading-relaxed">{event.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  event.type === 'upcoming' 
                    ? 'bg-white bg-opacity-20 text-white' 
                    : 'bg-primary-100 text-primary-700'
                }`}>
                  {event.raised}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default EventsSection;
