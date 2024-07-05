import Link from 'next/link';
import Image from 'next/image';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About Us', href: '/#about-us' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-gradient-to-b from-red-500 to-red-400 text-white">
      {/* Map Banner */}
      <div className="w-full h-64 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.0816090044746!2d-84.03243768796175!3d34.24646117297234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f58e90d62c7bd3%3A0x932d66468b60ea89!2sAirotron%20Heating%20%26%20Cooling!5e0!3m2!1sen!2sus!4v1720042414677!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-500 to-transparent h-16"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="/"><Image src="/logo.png" alt="Airotron Logo" width={150} height={50} className="mb-4" /></a>
            <p className="text-white">Keeping you cool since 1979</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-100">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-red-100 hover:text-white transition duration-150 ease-in-out">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-100">Contact Us</h3>
            <p className="text-red-100">6465 Raines Dr</p>
            <p className="text-red-100">Cumming, GA 30041</p>
            <p className="text-red-100">Phone: (770) 781-4328</p>
            <p className="text-red-100">Email: hvace@aol.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-100">Follow Us</h3>
            <div className="flex text-center">
              <a href="https://www.facebook.com/airotron" target="_blank" className="text-red-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-red-600 text-center text-white">
          <p>&copy; {currentYear} Airotron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
