
import { Star, Quote } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    content: "This platform transformed my business completely. Within 3 months, my customer base grew by 150% and revenue doubled. The tools provided made scaling my business seamless.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelance Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    content: "As a freelancer, managing clients was always challenging. This platform streamlined my workflow and helped me land 10 new long-term clients in just 2 months.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    content: "The analytics tools here are game-changing. Our marketing campaigns saw a 200% increase in ROI after implementing the insights we gained.",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    role: "Tech Startup Founder",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
    content: "From idea to successful startup in 6 months. The mentorship and resources provided were invaluable. We've now secured Series A funding!",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "E-commerce Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    content: "My online store's conversion rate increased by 75% after implementing the platform's optimization suggestions. Customer satisfaction is at an all-time high.",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    content: "The platform's content management tools helped me grow my subscriber base from 1,000 to 100,000 in just one year. Absolutely incredible results!",
    rating: 5
  }
];

function Testimonial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our platform has helped transform businesses and careers. Real stories from real people who've achieved extraordinary results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-50"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-indigo-500 rounded-full p-1">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-indigo-600 font-medium">{testimonial.role}</p>
                </div>
              </div>

              <div className="relative mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center justify-center pt-4 border-t border-gray-100">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;