// app/about/page.js

export const metadata = {
  title: "About NFIW | भारतीय महिला फेडरेशन",
  description: "National Federation of Indian Women - Fighting for women's rights, justice, and equality since 1954",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About NFIW / हमारे बारे में
        </h1>
        <div className="h-1 w-20 bg-red-600 rounded mb-8"></div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              National Federation of Indian Women
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              National Federation of Indian Women (NFIW) was established in 1954 by several leaders from Mahila Atma Raksha Samiti, including the legendary freedom fighter <strong>Aruna Asaf Ali</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For over <strong>70 years</strong>, NFIW has been at the forefront of the women's movement in India, fighting for women's rights, social justice, and equality.
            </p>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission / हमारा लक्ष्य
            </h2>
            <blockquote className="text-2xl font-semibold text-red-600 italic border-l-4 border-red-600 pl-6 mb-6">
              "Denial of Justice, is Violence"
              <br />
              <span className="text-xl text-gray-600">"न्याय से वंचित करना, हिंसा है"</span>
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              NFIW works towards achieving gender equality, women's empowerment, and social justice through grassroots organizing, advocacy, and campaigns across India.
            </p>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Reach / हमारी पहुंच
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">28</div>
                <div className="text-gray-700">State Units across India</div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">70+</div>
                <div className="text-gray-700">Years of Service</div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                <div className="text-gray-700">Campaigns Organized</div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">∞</div>
                <div className="text-gray-700">Lives Impacted</div>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Work / हमारा काम
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">•</span>
                <span>Organizing women at grassroots level for their rights and empowerment</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">•</span>
                <span>Fighting against violence, discrimination, and injustice faced by women</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">•</span>
                <span>Advocating for policy changes and legal reforms for women's equality</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">•</span>
                <span>Supporting survivors of violence and providing legal aid</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">•</span>
                <span>Conducting fact-finding missions and publishing reports on women's issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">•</span>
                <span>Building solidarity with women's movements globally</span>
              </li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Join Us / हमसे जुड़ें
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NFIW welcomes women and supporters who believe in the cause of gender equality and social justice. Join us in our fight for a more just and equal society.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg"
            >
              Contact Us to Join
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}