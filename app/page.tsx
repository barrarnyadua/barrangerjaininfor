import AnimatedSection from '@/app/components/ui/AnimatedSection'; // Adjusted path

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <AnimatedSection className="my-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Awesome Site!</h1>
        <p className="text-xl mb-8 text-gray-700">
          Built with Next.js, Tailwind CSS, and Framer Motion for cool animations.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
          Get Started
        </button>
      </AnimatedSection>

      <AnimatedSection className="my-12 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-600">
          We deliver cutting-edge solutions with a focus on user experience and performance.
          Our animations are not just for show; they enhance usability and engagement.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <AnimatedSection className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">Feature One</h3>
          <p className="text-gray-600">Dynamic content loading with smooth transitions.</p>
        </AnimatedSection>
        <AnimatedSection className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">Feature Two</h3>
          <p className="text-gray-600">Interactive elements that respond to your actions.</p>
        </AnimatedSection>
      </div>
    </main>
  );
}
