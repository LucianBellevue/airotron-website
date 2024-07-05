// pages/careers.tsx

import Head from 'next/head'
import Link from 'next/link'

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Careers | Airotron HVAC</title>
        <meta name="description" content="Join the Airotron team and build your career in HVAC" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-90 mb-8">Careers at <span className='text-red-90'>Airotron</span></h1>

        <div className="max-w-3xl mx-auto">
          <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-90">Join Our Team</h2>
            <p className="text-gray-50 mb-4">
              At Airotron, we're passionate about creating comfortable environments and delivering exceptional HVAC solutions. We're always looking for talented individuals to join our team and help us innovate in the HVAC industry.
            </p>
            <p className="text-gray-700">
              Whether you're an experienced technician, a customer service expert, or a creative problem-solver, there might be a place for you at Airotron.
            </p>
          </section>

          <section className="bg-white shadow-md rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-90">Why Choose Airotron?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-50">
              <li>Commitment to professional growth and development</li>
              <li>Competitive compensation and benefits package</li>
              <li>Collaborative and inclusive work environment</li>
              <li>Opportunity to work with cutting-edge HVAC technologies</li>
              <li>Focus on work-life balance and employee well-being</li>
            </ul>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-red-90">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-50">
              <li>Excellence in service and customer satisfaction</li>
              <li>Innovation and continuous improvement</li>
              <li>Integrity and professionalism in all we do</li>
              <li>Sustainability and environmental responsibility</li>
              <li>Teamwork and mutual respect</li>
            </ul>
          </section>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4 font-semibold">
              Interested in joining the Airotron family? We'd love to hear from you!
            </p>
            <Link href="/contact-us" className="inline-block bg-red-90 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition duration-300">
              Contact Us About Opportunities
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CareersPage
