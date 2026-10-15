import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, UserCheck } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";
import FadeIn from "../animations/FadeIn";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Section masquée tant qu'il n'y a pas de témoignages
  if (testimonials.length === 0) return null;

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

  const nextTestimonial = () => scrollToIndex((currentIndex + 1) % testimonials.length);
  const prevTestimonial = () =>
    scrollToIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 bg-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              <Quote className="w-3.5 h-3.5" />
              <span>RECOMMANDATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 max-w-2xl">
              Confiance & Collaborations
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-xl">
              Retours d'expérience sur la rigueur, l'esprit d'équipe et la conduite des projets sur le terrain.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative max-w-4xl mx-auto flex items-center justify-between gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-panel border border-line flex items-center justify-center text-white/70 hover:bg-panel2 hover:text-white transition-all flex-shrink-0 z-10 cursor-pointer"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-none flex snap-x snap-mandatory w-full"
              style={{ scrollSnapType: "x mandatory" }}
            >
              <div className="flex w-full">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 py-4 px-2"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-5 relative flex justify-center">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-panel border border-line flex items-center justify-center">
                          {testimonial.image ? (
                            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                          ) : (
                            <UserCheck className="w-20 h-20 text-primary/40" />
                          )}
                        </div>

                        {testimonial.stat && (
                          <div className="absolute bottom-3 left-3 bg-bg/80 backdrop-blur-md border border-line2 px-3 py-1.5 rounded-xl">
                            <div className="text-sm font-bold text-primary">{testimonial.stat.value}</div>
                            <div className="text-[10px] text-muted">{testimonial.stat.label}</div>
                          </div>
                        )}
                      </div>

                      <div className="md:col-span-7 flex flex-col justify-between">
                        <div>
                          <Quote className="w-8 h-8 text-primary mb-3" />
                          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 italic">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-line">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-semibold text-sm sm:text-base">
                                {testimonial.name}
                              </span>
                              {testimonial.linkedin && (
                                <a
                                  href={testimonial.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`Profil LinkedIn de ${testimonial.name}`}
                                  className="text-primary hover:text-primary-dark transition-colors"
                                >
                                  <FaLinkedin className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                            <div className="text-dim text-xs">
                              {testimonial.role}, {testimonial.company}
                            </div>
                          </div>

                          {testimonial.rating && (
                            <div className="flex items-center gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-panel border border-line flex items-center justify-center text-white/70 hover:bg-panel2 hover:text-white transition-all flex-shrink-0 z-10 cursor-pointer"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

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