import { useState } from 'react';
import { Star, Quote, X } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    content: "This platform transformed my business completely. Within 3 months, my customer base grew by 150% and revenue doubled. The tools provided made scaling my business seamless.",
    fullStory: "When I first started my boutique clothing store, I was struggling to manage inventory, track sales, and reach new customers. The traditional methods weren't working, and I was spending more time on administrative tasks than growing my business. That's when I discovered this platform.\n\nThe transformation was immediate and profound. The automated inventory management system saved me 15 hours per week. The integrated marketing tools helped me reach a wider audience, and the customer analytics provided insights I never had before. Within just 3 months, my customer base grew by 150%, and revenue doubled.\n\nBut it wasn't just about the numbers. The platform's CRM tools helped me build stronger relationships with my customers, leading to a 70% increase in repeat business. The automated email marketing campaigns maintained engagement while I focused on curating the perfect product selection for my customers.\n\nToday, I run three successful locations, and I'm planning to expand further. This wouldn't have been possible without the scalable solutions this platform provides. It's not just a tool; it's like having a business partner who's always there to help you succeed.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelance Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    content: "As a freelancer, managing clients was always challenging. This platform streamlined my workflow and helped me land 10 new long-term clients in just 2 months.",
    fullStory: "Before discovering this platform, I was drowning in administrative tasks and struggling to maintain a steady client base. As a freelance designer, I spent more time managing projects and chasing payments than actually designing.\n\nThe platform's project management tools revolutionized my workflow. The automated invoicing system reduced payment delays by 80%, and the client portal made collaboration seamless. I could now share designs, collect feedback, and track revisions all in one place.\n\nThe game-changer was the platform's freelancer marketplace. Its intelligent matching algorithm connected me with clients who perfectly matched my style and expertise. Within two months, I secured 10 long-term clients, creating a stable income stream I never thought possible as a freelancer.\n\nThe built-in time tracking and project analytics helped me optimize my pricing strategy, increasing my average project value by 60%. Now, I run a successful design studio with three junior designers, all managed through this platform. It's transformed me from a struggling freelancer to a thriving business owner.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    content: "The analytics tools here are game-changing. Our marketing campaigns saw a 200% increase in ROI after implementing the insights we gained.",
    fullStory: "As a Marketing Director for a mid-sized tech company, I was always looking for ways to improve our campaign performance. Traditional analytics tools gave us data, but not the actionable insights we needed. Everything changed when we implemented this platform.\n\nThe platform's AI-driven analytics engine analyzed our historical campaign data and provided predictive insights that transformed our strategy. We discovered untapped market segments and optimized our messaging for different audience segments.\n\nThe real-time campaign monitoring allowed us to make instant adjustments, reducing wasted ad spend by 40%. The A/B testing framework helped us refine our messaging, resulting in a 150% increase in conversion rates. Most importantly, our overall marketing ROI increased by 200% within the first quarter.\n\nThe platform's integration capabilities meant we could connect all our marketing tools, creating a unified dashboard that saved our team 20 hours per week in reporting time. We've now scaled our marketing operations across three continents, all managed through this single platform.",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    role: "Tech Startup Founder",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
    content: "From idea to successful startup in 6 months. The mentorship and resources provided were invaluable. We've now secured Series A funding!",
    fullStory: "When I started my AI-powered healthcare startup, I had a great idea but no clear path to market. The platform's startup accelerator program changed everything. The structured approach to product development and go-to-market strategy was exactly what we needed.\n\nThe mentorship program connected us with experienced entrepreneurs who had built successful healthcare companies. Their guidance helped us avoid common pitfalls and accelerate our development timeline. The platform's resource library and development tools saved us months of research and development time.\n\nThrough the platform's investor network, we connected with healthcare-focused VCs who understood our vision. The pitch preparation tools and feedback system helped us refine our presentation, leading to a successful Series A funding round of $5 million.\n\nIn just 6 months, we went from concept to a fully operational platform serving 50 healthcare providers. The platform's compliance tools were crucial in helping us navigate healthcare regulations, and the scalable infrastructure allowed us to grow without technical limitations.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "E-commerce Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    content: "My online store's conversion rate increased by 75% after implementing the platform's optimization suggestions. Customer satisfaction is at an all-time high.",
    fullStory: "Running an e-commerce business was becoming increasingly complex with multiple platforms, inventory issues, and customer service challenges. This platform provided the unified solution I needed to streamline everything.\n\nThe platform's AI-powered optimization engine analyzed our store's performance and provided actionable recommendations. We implemented changes to our product pages, checkout process, and mobile experience. The results were immediate - our conversion rate jumped by 75% in the first month.\n\nThe integrated customer service tools, including the AI chatbot, reduced our response time from hours to minutes. Customer satisfaction scores improved from 7.2 to 9.4 out of 10. The automated inventory management system eliminated stockouts, reducing lost sales by 90%.\n\nPerhaps most importantly, the platform's analytics helped us understand our customers better. We discovered purchasing patterns that led to successful product launches and marketing campaigns. Our average order value increased by 45%, and customer lifetime value doubled within six months.",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    content: "The platform's content management tools helped me grow my subscriber base from 1,000 to 100,000 in just one year. Absolutely incredible results!",
    fullStory: "As a content creator, I was struggling to grow my audience beyond a few thousand subscribers. The platform's comprehensive content management and growth tools changed everything about how I approached content creation and audience engagement.\n\nThe AI-powered content analysis tools helped me understand what resonated with my audience. I learned that my tech tutorials performed best when released on Tuesday mornings and that my audience engaged more with content that included interactive elements.\n\nThe platform's automated scheduling and cross-platform publishing tools saved me 15 hours per week in administrative tasks. The built-in SEO tools helped my content rank higher in search results, driving organic growth. The audience engagement analytics helped me identify topics my audience wanted before they even requested them.\n\nThe growth was exponential. From 1,000 subscribers, we hit 10,000 in three months, 50,000 in six months, and crossed 100,000 by the end of the year. The platform's monetization tools helped me turn this growth into a sustainable business, with revenue from sponsored content, merchandise, and premium subscriptions.",
    rating: 5
  }
];

// Define the interface for a testimonial
interface TestimonialData {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  fullStory: string;
  rating: number;
}

function App() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialData | null>(null);

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
              className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-gray-200 cursor-pointer"
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-200"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-indigo-500 rounded-full p-1">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-indigo-600 font-medium">{testimonial.role}</p>
                </div>
              </div>

              <div className="relative mb-4">
                <p className="text-gray-700 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center justify-center pt-4 border-t border-gray-200">
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

      {/* Modal for full story */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-indigo-50"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedTestimonial.name}</h2>
                    <p className="text-indigo-600 font-medium">{selectedTestimonial.role}</p>
                    <div className="flex space-x-1 mt-2">
                      {[...Array(selectedTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="prose max-w-none">
                {selectedTestimonial.fullStory.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;