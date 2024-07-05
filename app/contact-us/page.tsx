// pages/contact.tsx

import Head from 'next/head'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us | Airotron HVAC</title>
        <meta name="description" content="Get in touch with Airotron for all your HVAC needs" />
      </Head>

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-90 mb-8">Contact <span className='text-red-90'>Airotron</span></h1>

        <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center">
              <FiPhone className="text-red-90 text-2xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <p className="text-gray-90">+1 (770) 781-4328</p>
              </div>
            </div>

            <div className="flex items-center">
              <FiMail className="text-red-90 text-2xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-gray-90">hvac@aol.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <FiMapPin className="text-red-90 text-2xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Address</h2>
                <p className="text-gray-90">6465 Raines Dr, Cumming, GA 30041</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-90">
              We're available Monday through Friday, 8:00 AM to 6:00 PM.
            </p>
            <p className="text-red-90 font-semibold mt-2">
              24/7 emergency service available
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactPage
