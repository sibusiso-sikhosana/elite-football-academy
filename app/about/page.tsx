import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          About Elite Football Academy
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          Developing football talent through professional coaching,
          discipline, and excellence.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <SectionTitle
            title="Our Story"
            subtitle="Passion for player development"
          />

          <p className="text-gray-700 leading-8 text-center">
            Elite Football Academy was founded with the vision of helping
            young footballers develop both on and off the field.
            Through structured coaching, mentorship, and professional
            training methods, we aim to prepare players for success in
            football and in life.
          </p>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-700">
              To provide quality football coaching that develops
              technical ability, confidence, discipline, and leadership
              in every player.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-700">
              To become a leading football academy recognised for
              producing skilled players and responsible young leaders.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <SectionTitle
            title="Why Choose Us?"
            subtitle="What makes Elite Football Academy different"
          />

          <ul className="space-y-4 text-gray-700">
            <li>⚽ Professional coaching programmes</li>
            <li>⚽ Focus on player development and character growth</li>
            <li>⚽ Safe and supportive training environment</li>
            <li>⚽ Opportunities for talent identification</li>
            <li>⚽ Structured pathways for aspiring players</li>
          </ul>

        </div>
      </section>

    </main>
  );
}