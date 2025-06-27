import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">MySite</Link>
        <div>
          <Link href="/about" className="mr-4">About</Link>
          <Link href="/services" className="mr-4">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
