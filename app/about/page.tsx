import AnimatedSection from '@/app/components/ui/AnimatedSection';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <AnimatedSection className="my-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Welcome to the About Us page. We are dedicated to providing the best services.
            Our team is passionate and experienced.
          </p>
        </AnimatedSection>
        <AnimatedSection className="my-8">
          <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
          <p>
            Our mission is to innovate and lead in our industry, creating value for our customers and stakeholders.
          </p>
        </AnimatedSection>
        <AnimatedSection className="my-8">
          <h2 className="text-3xl font-bold mb-3">Our Team</h2>
          <p>
            Meet the amazing people who make our company great. (Details about team members can go here).
          </p>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
