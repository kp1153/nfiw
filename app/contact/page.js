// app/contact/page.js

export const metadata = {
  title: "Contact Us | NFIW",
  description: "Get in touch with National Federation of Indian Women",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Contact Us / संपर्क करें
        </h1>
        <div className="h-1 w-20 bg-red-600 rounded mb-8"></div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              National Federation of Indian Women (NFIW)
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="text-red-600 text-2xl mt-1">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Office Address / कार्यालय का पता
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    1002, Ansal Bhawan
                    <br />
                    16-Kasturba Gandhi Marg
                    <br />
                    New Delhi - 110001
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-red-600 text-2xl mt-1">✉️</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Email / ईमेल
                  </h3>
                  <a
                    href="mailto:nfiw.india@gmail.com"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    nfiw.india@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="text-red-600 text-2xl mt-1">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Phone / फ़ोन
                  </h3>
                  <a
                    href="tel:+911123731974"
                    className="text-red-600 hover:text-red-700"
                  >
                    +91 11 2373 1974
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Connect With Us / हमसे जुड़ें
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you want to join our movement, report an issue, seek
              support, or collaborate with us, we welcome you to reach out.
              Together, we can build a more just and equal society for all
              women.
            </p>
            <p className="text-gray-700 leading-relaxed">
              हमारे आंदोलन में शामिल होना चाहते हैं, किसी समस्या की रिपोर्ट करना
              चाहते हैं, सहायता चाहते हैं, या हमारे साथ सहयोग करना चाहते हैं -
              हम आपका स्वागत करते हैं। साथ मिलकर हम सभी महिलाओं के लिए एक अधिक
              न्यायपूर्ण और समान समाज बना सकते हैं।
            </p>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Presence / हमारी उपस्थिति
            </h2>
            <p className="text-gray-700 leading-relaxed">
              NFIW has active units across <strong>28 states</strong> in India.
              We work at grassroots level, organizing women and fighting for
              their rights in every corner of the country.
            </p>
          </section>

          <section className="border-t pt-8 bg-red-50 -mx-8 md:-mx-12 px-8 md:px-12 py-8 -mb-8 md:-mb-12 rounded-b-xl">
            <blockquote className="text-2xl font-semibold text-red-600 italic text-center">
              "Denial of Justice, is Violence"
              <br />
              <span className="text-xl text-gray-600">
                "न्याय से वंचित करना, हिंसा है"
              </span>
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
}
