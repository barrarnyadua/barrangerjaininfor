import AnimatedSection from '@/app/components/ui/AnimatedSection';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <AnimatedSection className="my-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg">
            Discover the range of services we offer to help you achieve your goals.
          </p>
        </AnimatedSection>
        <AnimatedSection className="my-8">
          <h2 className="text-3xl font-bold mb-3">Service One</h2>
          <p>
            Description of service one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </AnimatedSection>
        <AnimatedSection className="my-8">
          <h2 className="text-3xl font-bold mb-3">Service Two</h2>
          <p>
            Description of service two. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AnimatedSection>
        <AnimatedSection className="my-8">
          <h2 className="text-3xl font-bold mb-3">Service Three</h2>
          <p>
            Description of service three. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
