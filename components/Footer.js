// components/Footer.js

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">
              National Federation of Indian Women
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              भारतीय महिला फेडरेशन - महिलाओं के अधिकार, न्याय और समानता के लिए
              1954 से संघर्षरत।
            </p>
            <p className="text-red-400 font-semibold italic">
              "Denial of Justice, is Violence"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              त्वरित लिंक / Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us / हमारे बारे में
                </Link>
              </li>
              <li>
                <Link
                  href="/state-reports"
                  className="hover:text-white transition"
                >
                  State Reports / राज्य रिपोर्ट
                </Link>
              </li>
              <li>
                <Link href="/campaigns" className="hover:text-white transition">
                  Campaigns / अभियान
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition">
                  Resources / संसाधन
                </Link>
              </li>
            </ul>
          </div>

          {/* Impact Stats */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              हमारा प्रभाव / Our Impact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-red-500 font-bold">70+</span>
                <span>Years of Service</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500 font-bold">28</span>
                <span>State Units</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500 font-bold">1000+</span>
                <span>Campaigns</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500 font-bold">∞</span>
                <span>Lives Impacted</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} National Federation of Indian Women.
            All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact / संपर्क करें
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
