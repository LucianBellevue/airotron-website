import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-90 mb-8">Privacy Policy</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Airotron ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information that you provide directly to us, such as when you fill out a contact form or request a quote. This may include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 pl-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Information about your HVAC system or service needs</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 pl-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Communicate with you about products, services, offers, and events</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">4. Sharing of Information</h2>
          <p className="text-gray-700 mb-4">
            We do not sell or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 pl-4">
            <li>Service providers who perform services on our behalf</li>
            <li>Professional advisors, such as lawyers and accountants</li>
            <li>Government authorities if required by law</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">5. Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction or damage.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">7. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">8. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-700">
            Airotron<br />
            6235 Raines Dr<br />
            Cumming, GA 30041<br />
            Email: <a href="mailto:hvace@aol.com" className="text-red-600 hover:text-red-800">hvace@aol.com</a><br />
            Phone: (770) 781-4328
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
