"use client";
import Image from 'next/image';
import { FaTools, FaHandshake, FaLeaf, FaAward } from 'react-icons/fa';
import LogoBanner from './LogoBanner';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const features: Feature[] = [
    { icon: FaTools, title: 'Expert Service', description: 'Skilled technicians with years of experience' },
    { icon: FaHandshake, title: 'Customer First', description: 'Committed to your comfort and satisfaction' },
    { icon: FaLeaf, title: 'Eco-Friendly', description: 'Promoting energy-efficient solutions' },
    { icon: FaAward, title: 'Award-Winning', description: 'Recognized for excellence in HVAC services' },
  ];

  return (
    <section id="about-us" className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-7xl font-bold text-gray-90">A bit about <span className='text-red-90'>Airotron</span></h2>
          <p className="text-xl text-gray-600">A family owned and operated HVAC company</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/airotron-1.png"
              alt="Our HVAC Team"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <h3 className="lg:text-3xl text-2xl font-semibold text-red-90 mb-6">Our Commitment to You</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Since 1979, Airotron has been the trusted name in heating, ventilation, and air conditioning
              services in our community. With over four decades of experience, we've built our reputation on
              reliability, expertise, and a genuine commitment to our customers' comfort.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We pride ourselves on staying at the forefront of HVAC technology, offering energy-efficient
              solutions that not only keep your space comfortable but also help reduce your carbon footprint
              and energy bills.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
              <feature.icon className="text-4xl text-red-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-90 mb-2">{feature.title}</h4>
              <p className="text-gray-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-16'>
        <h3 className='text-3xl font-bold text-gray-90 mb-6 text-center'> Some of our <span className='text-red-90'>Trusted</span> Partners</h3>
          <LogoBanner />
      </div>
    </section>
  );
};

export default About;
