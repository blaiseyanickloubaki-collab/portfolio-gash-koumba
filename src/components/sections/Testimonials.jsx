import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, UserCheck } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import FadeIn from "../animations/FadeIn";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const testimonialStats = [
    { value: "100%", label: "Engagement Pro" },
    { value: "100%", label: "Respect des Délais" },
    { value: "5★", label: "Rigueur Technique" },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              <Quote className="w-3.5 h-3.5" />
              <span>RECOMMANDATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 max-w-2xl">
              Confiance & Collaborations
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-xl">
              Retours d'expérience sur la rigueur, l'esprit d'équipe et la conduite des projets sur le terrain.
            </p>
          </div>
        </FadeIn>

        {/* Carousel Zone */}
        <FadeIn delay={100}>
          <div className="relative max-w-4xl mx-auto flex items-center justify-between gap-4">
            
            {/* Left Arrow */}
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all flex-shrink-0 z-10 cursor-pointer"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Container */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-none flex snap-x snap-mandatory w-full"
              style={{ scrollSnapType: "x mandatory" }}
            >
              <div className="flex w-full">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 py-4 px-2"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      
                      {/* Photo Placeholder / Avatar Pro */}
                      <div className="md:col-span-5 relative flex justify-center">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                          <UserCheck className="w-20 h-20 text-primary/40" />
                        </div>

                        {/* Stat Badge */}
                        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl">
                          <div className="text-left">
                            <div className="text-sm font-bold text-primary">
                              {testimonialStats[index]?.value || "100%"}
                            </div>
                            <div className="text-[10px] text-white/60">
                              {testimonialStats[index]?.label || "Satisfaction"}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-7 flex flex-col justify-between">
                        <div>
                          <Quote className="w-8 h-8 text-primary mb-3" />
                          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 italic">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div>
                            <div className="text-white font-semibold text-sm sm:text-base">
                              {testimonial.name}
                            </div>
                            <div className="text-white/50 text-xs">
                              {testimonial.role} — <span className="text-primary">{testimonial.company}</span>
                            </div>
                          </div>

                          {/* Star Rating */}
                          <div className="flex items-center gap-1 text-primary">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all flex-shrink-0 z-10 cursor-pointer"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? "bg-primary w-6 h-2"
                    : "bg-white/20 w-2 h-2 hover:bg-white/40"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;