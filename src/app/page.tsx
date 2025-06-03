import React, { useState } from "react";

// Example icons (replace with your own SVGs or Heroicons)
const AiIcon = () => (
  <svg className="w-10 h-10 text-teal-500 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" />
  </svg>
);
const DataIcon = () => (
  <svg className="w-10 h-10 text-teal-500 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
    <path d="M7 17V7M12 17V12M17 17V9" stroke="currentColor" strokeWidth="2" />
  </svg>
);
const GearIcon = () => (
  <svg className="w-10 h-10 text-teal-500 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setNavOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-[#0A1F44]">
      {/* <!-- Navigation Bar --> */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
          <div className="flex items-center">
            {/* Logo */}
            <img src="/bluebox-logo.svg" alt="Bluebox AS logo" className="h-10 w-10 mr-2" />
            <span className="font-bold text-xl tracking-tight text-[#0A1F44]">Bluebox AS</span>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  className="relative font-medium hover:text-teal-500 transition-colors duration-200 after:content-[''] after:block after:h-0.5 after:bg-teal-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                  style={{ paddingBottom: 2 }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Hamburger */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-teal-500 border-teal-500"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {navOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </nav>
        {/* Mobile Menu */}
        {navOpen && (
          <ul className="md:hidden bg-white px-4 pb-4 space-y-2">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  className="block py-2 font-medium text-[#0A1F44] hover:text-teal-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main>
        {/* <!-- Hero Section --> */}
        <section
          id="home"
          className="relative flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-[#0A1F44] via-[#2AB7CA] to-[#0A1F44] overflow-hidden"
        >
          <img
            src="/hero-bg.jpg"
            alt="Modern tech office environment"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 flex flex-col items-center text-center px-4 py-24">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up" style={{ fontSize: "3rem" }}>
              AI-Driven Business Consulting to Accelerate Growth
            </h1>
            <p className="text-white text-lg md:text-xl mb-8" style={{ fontSize: "1.25rem" }}>
              Harness data and strategy to transform your organization.
            </p>
            <a
              href="#services"
              onClick={e => handleNavClick(e, "#services")}
              className="bg-[#2AB7CA] hover:bg-[#2299a3] text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2AB7CA] focus:ring-offset-2"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* <!-- Services Section --> */}
        <section id="services" className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <AiIcon />
              <h3 className="text-xl font-semibold mb-2">AI Strategy</h3>
              <p className="text-gray-600 mb-4">Unlock business value with tailored AI roadmaps, opportunity analysis, and implementation guidance.</p>
              <a href="#" className="text-[#2AB7CA] font-medium hover:underline">Learn More &rarr;</a>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <DataIcon />
              <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
              <p className="text-gray-600 mb-4">Build robust data pipelines, analytics platforms, and actionable dashboards for smarter decisions.</p>
              <a href="#" className="text-[#2AB7CA] font-medium hover:underline">Learn More &rarr;</a>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <GearIcon />
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">Modernize operations, automate workflows, and drive innovation with digital solutions.</p>
              <a href="#" className="text-[#2AB7CA] font-medium hover:underline">Learn More &rarr;</a>
            </div>
          </div>
        </section>

        {/* <!-- About/Team Section --> */}
        <section id="about" className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About */}
          <div>
            <h2 className="text-3xl font-bold mb-4">About Bluebox AS</h2>
            <p className="text-gray-700 text-lg mb-4">
              Investing in the Future. Consulting for Today.
            </p>
            <p className="text-gray-600">
              Bluebox AS empowers organizations to thrive in the AI era. Our mission is to deliver actionable strategy, technical excellence, and lasting value for our clients.
            </p>
          </div>
          {/* Team */}
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img src="/team1.jpg" alt="Håkon Årøen, CEO" className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-[#2AB7CA]" />
              <span className="font-semibold">Håkon Årøen</span>
              <span className="text-gray-500 text-sm">CEO</span>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <img src="/team2.jpg" alt="Lead Consultant" className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-[#2AB7CA]" />
              <span className="font-semibold">Jane Doe</span>
              <span className="text-gray-500 text-sm">Lead Consultant</span>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <img src="/team3.jpg" alt="AI Specialist" className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-[#2AB7CA]" />
              <span className="font-semibold">John Smith</span>
              <span className="text-gray-500 text-sm">AI Specialist</span>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials Section --> */}
        <section className="bg-gray-100 py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <p className="text-gray-700 mb-4">“Bluebox AS helped us unlock new revenue streams with their AI expertise.”</p>
              <div className="flex items-center space-x-3">
                <img src="/client1-logo.png" alt="Client 1 logo" className="w-8 h-8" />
                <span className="font-semibold">Anna L., CTO, TechCorp</span>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <p className="text-gray-700 mb-4">“Their data engineering team delivered beyond expectations.”</p>
              <div className="flex items-center space-x-3">
                <img src="/client2-logo.png" alt="Client 2 logo" className="w-8 h-8" />
                <span className="font-semibold">Mark S., COO, DataFlow</span>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <p className="text-gray-700 mb-4">“We modernized our business in record time. Highly recommended!”</p>
              <div className="flex items-center space-x-3">
                <img src="/client3-logo.png" alt="Client 3 logo" className="w-8 h-8" />
                <span className="font-semibold">Sara P., CEO, InnovateX</span>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Insights/Blog Preview --> */}
        <section id="insights" className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Insights &amp; Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="/blog1.jpg" alt="Blog post 1 thumbnail" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">How AI is Transforming Business Strategy</h3>
                <p className="text-gray-600 text-sm mb-2">April 10, 2025</p>
                <p className="text-gray-700 mb-4">Discover the latest trends in AI adoption and how forward-thinking companies are leveraging technology for growth.</p>
                <a href="#" className="text-[#2AB7CA] font-medium hover:underline">Read More &rarr;</a>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="/blog2.jpg" alt="Blog post 2 thumbnail" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Data Engineering Best Practices in 2025</h3>
                <p className="text-gray-600 text-sm mb-2">March 28, 2025</p>
                <p className="text-gray-700 mb-4">A practical guide to building scalable, reliable data pipelines for modern enterprises.</p>
                <a href="#" className="text-[#2AB7CA] font-medium hover:underline">Read More &rarr;</a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Contact Section --> */}
        <section id="contact" className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's discuss your next AI project</h2>
              <p className="text-gray-700 mb-6">Contact us to explore how Bluebox AS can help your business grow with AI and technology.</p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:hakon@blueboxas.no" className="text-[#2AB7CA] hover:underline">hakon@blueboxas.no</a>
                </li>
                <li>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:+4790507678" className="text-[#2AB7CA] hover:underline">+47 90 50 76 78</a>
                </li>
                <li>
                  <span className="font-semibold">Address:</span> Oslo, Norway
                </li>
              </ul>
            </div>
            {/* Contact Form */}
            <form className="bg-gray-50 rounded-2xl shadow-md p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                <input id="name" name="name" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2AB7CA] transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2AB7CA] transition" />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 font-medium mb-1">Company</label>
                <input id="company" name="company" type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2AB7CA] transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2AB7CA] transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#2AB7CA] hover:bg-[#2299a3] text-white font-semibold py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2AB7CA] focus:ring-offset-2">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* <!-- Footer --> */}
      <footer className="bg-[#0A1F44] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-b border-[#2AB7CA] pb-4 mb-4">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#services" className="hover:text-[#2AB7CA]">Services</a>
            <a href="#about" className="hover:text-[#2AB7CA]">About</a>
            <a href="#insights" className="hover:text-[#2AB7CA]">Blog</a>
            <a href="#" className="hover:text-[#2AB7CA]">Privacy Policy</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-[#2AB7CA]">
              {/* LinkedIn SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-[#2AB7CA]">
              {/* Twitter SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.56c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.124-4.09-.205-7.719-2.166-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.23-.616v.062c0 2.386 1.697 4.374 3.95 4.827-.413.112-.849.172-1.298.172-.318 0-.626-.031-.927-.088.627 1.956 2.444 3.377 4.6 3.417-1.68 1.317-3.797 2.102-6.102 2.102-.396 0-.787-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.009-7.504 14.009-14.009 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center text-sm">
          © 2025 Bluebox AS.
        </div>
      </footer>
    </div>
  );
}
