// app/privacy/page.js

export const metadata = {
  title: "Privacy Policy | NFIW",
  description: "Privacy Policy for National Federation of Indian Women website",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy / गोपनीयता नीति
        </h1>
        <div className="h-1 w-20 bg-red-600 rounded mb-8"></div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8 prose prose-lg max-w-none">
          <p className="text-gray-600 italic">Last Updated: December 2024</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The National Federation of Indian Women (NFIW) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or interact with our organization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may collect the following types of information:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, and postal address when you contact us or register
                for events
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website, including pages visited and time spent
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, and
                device information
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Respond to your inquiries and provide support</li>
              <li>Send updates about our campaigns and activities</li>
              <li>Organize events and campaigns</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="space-y-2 text-gray-700 mt-3">
              <li>With your explicit consent</li>
              <li>With our state units for campaign coordination</li>
              <li>When required by law or legal process</li>
              <li>
                To protect the rights and safety of NFIW, our members, or others
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of receiving communications from us</li>
              <li>Object to processing of your personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may use cookies to enhance your browsing experience.
              You can choose to disable cookies through your browser settings,
              though this may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us / संपर्क करें
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="text-gray-700">
              <p className="font-semibold mb-2">
                National Federation of Indian Women
              </p>
              <p>1002, Ansal Bhawan, 16-K.G. Marg</p>
              <p>New Delhi - 110001, India</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:nfiw.india@gmail.com"
                  className="text-red-600 hover:text-red-700 underline"
                >
                  nfiw.india@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+911123731974"
                  className="text-red-600 hover:text-red-700"
                >
                  +91 11 2373 1974
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
