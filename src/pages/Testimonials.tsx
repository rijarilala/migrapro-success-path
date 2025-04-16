
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TestimonialsHero from '@/components/testimonials/TestimonialsHero';
import TestimonialsList from '@/components/testimonials/TestimonialsList';
import TestimonialsForm from '@/components/testimonials/TestimonialsForm';

const Testimonials = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <TestimonialsHero />
        <TestimonialsList />
        <TestimonialsForm />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
