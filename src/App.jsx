import { useState, useEffect } from 'react'

// SVG Icons
const Heart = ({ className, fill }) => (
  <svg className={className} fill={fill || "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

const Check = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const Menu = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    { icon: Calendar, title: "Staff Check-Ins", description: "Log when staff complete rounds and stay compliant with care schedules." },
    { icon: Heart, title: "Forms & Reports", description: "Automated reminders for forms and reports, ensuring no documentation is missed." },
    { icon: Users, title: "Team Collaboration", description: "Keep staff informed with shared logs, updates, and shift coordination." },
    { icon: Shield, title: "Analytics & Insights", description: "Track performance, identify patterns, and generate actionable insights." }
  ]

  const testimonials = [
    { quote: "CareLog transformed how we manage staff rounds. Reporting and compliance have never been easier.", author: "Sarah Chen", role: "Facility Manager" },
    { quote: "Our team now stays on top of every check-in without the stress of manual logs.", author: "Marcus Johnson", role: "Lead Nurse" },
    { quote: "The analytics dashboard gave us visibility into care patterns we didn't have before.", author: "Elena Rodriguez", role: "Operations Coordinator" },
    { quote: "CareLog integrates seamlessly with our workflows and improves staff efficiency.", author: "Florida Helps Team", role: "Partner Facility" }
  ]
  const pricingPlans = [
    {  name: "Starter", price: "Free", features: ["Up to 10 rooms", "Up to 5 staff members", "Automated round tracking", "Daily report generating","15GB of storage"], cta: "Start Free",onboardingFee: "$499 one-time setup fee"},
    {  name: "Facility", price: "$49", period: "/month", features: ["Up to 50 rooms", "Up to 25 staff members", "Automated round tracking", "Daily report generating","64GB of storage","Indoor mapping","Detailed analytics & reporting","Compliance & auditing reporting"], cta: "Start 14-Day Trial", popular: true, onboardingFee: "$3000 one-time setup fee"},
    { name: "Enterprise", price: "Custom", period: "/month", features: ["Unlimited rooms & staff", "Custom analytics & reporting", "Custom integrations", "Unlimited storage","Indoor mapping","Compliance & auditing"],  cta: "Contact Sales",onboardingFee: "Custom setup fee"}
 ]

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Karla:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      <div style={{ fontFamily: 'Karla, sans-serif' }} className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50">
        
        {/* Navigation - FIXED */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
          <div className="w-full  px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <Heart className="w-8 h-8 text-orange-500" fill="currentColor" />
                <span style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-2xl font-bold text-gray-900">CareLog</span>
              </div>
              
              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors">Stories</a>
                <a href="#pricing" className="text-gray-700 hover:text-orange-600 transition-colors">Pricing</a>
                <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all hover:scale-105">
                  Get Started
                </button>
              </div>

              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                <a href="#features" className="text-gray-700">Features</a>
                <a href="#testimonials" className="text-gray-700">Stories</a>
                <a href="#pricing" className="text-gray-700">Pricing</a>
                <button className="px-6 py-2 bg-orange-500 text-white rounded-full">Get Started</button>
              </div>
            )}
          </div>
        </nav>

        {/* Hero - FIXED */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="w-full">
                <h1 style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                   Streamline Staff Rounds & Care Logging
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                   CareLog helps behavioral health facilities log staff rounds, track check-ins, generate reports, and analyze care patterns with ease.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-all border-2 border-gray-200">
                    Watch Demo
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial</p>
              </div>
              
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-rose-400/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Today's Care Schedule</h3>
                      <p className="text-sm text-gray-500">3 activities planned</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Morning medication</p>
                        <p className="text-xs text-gray-500">8:00 AM • Completed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Physical therapy</p>
                        <p className="text-xs text-gray-500">2:00 PM • In progress</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Evening medication</p>
                        <p className="text-xs text-gray-500">7:00 PM • Upcoming</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="w-full ">
            <div className="text-center mb-16">
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Everything you need to care with confidence
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Simple tools that bring your family together and keep caregiving organized
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-orange-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-rose-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-2xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Stories from caregiving families
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">Real experiences from people who care</p>
            </div>

            <div className="relative" style={{ minHeight: '300px' }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`transition-all duration-500 ${index === activeTestimonial ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'}`}>
                  <div className="bg-gradient-to-br from-orange-100/50 to-rose-100/50 p-[2px] rounded-2xl">
                    <div className="bg-white rounded-2xl p-6 sm:p-8">
                      <p style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-xl sm:text-2xl text-gray-900 mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex gap-2 justify-center mt-6">
                {testimonials.map((_, index) => (
                  <button key={index} onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${index === activeTestimonial ? 'w-6 bg-orange-500' : 'w-2 bg-orange-200'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="w-full ">
            <div className="text-center mb-16">
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">Choose the plan that fits your family's needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all hover:-translate-y-1 ${plan.popular ? 'border-orange-500' : 'border-gray-200'}`}>
                  {plan.popular && <div className="inline-block px-4 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full mb-4">Most Popular</div>}
                  
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 text-lg">{plan.period}</span>}
                  </div>
                  {/* onboarding fee */}
                  {plan.onboardingFee && <p className="mb-4 text-sm text-gray-500">{plan.onboardingFee}</p>}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-full font-semibold transition-all ${plan.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-rose-500">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Start caring better, together
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Join thousands of families who trust CareLog to coordinate care with love
            </p>
            <button className="px-10 py-5 bg-white text-orange-600 rounded-full hover:bg-gray-50 transition-all hover:scale-105 font-semibold text-lg shadow-2xl">
              Get Started Free
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-6 h-6 text-orange-500" fill="currentColor" />
                  <span style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-xl font-bold text-white">CareLog</span>
                </div>
                <p className="text-gray-400 text-sm">Caring for those who cared for us, with love and technology.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Mobile App</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">HIPAA Compliance</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              © 2026 CareLog. All rights reserved. Made with ❤️ for caregivers.
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App