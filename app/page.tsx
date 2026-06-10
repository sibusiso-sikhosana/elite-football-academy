import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-5xl font-bold mb-6">
          Elite Football Academy
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Developing the next generation of football talent through
          professional coaching, discipline, and excellence.
        </p>

        <div className="flex gap-4">
          <Button text="Book a Session" />
          <Button text="Our Services" />
        </div>

      </section>

      {/* About Preview Section */}
        <section className="py-20 px-6 bg-blue-100">

          <div className="max-w-4xl mx-auto">

            <SectionTitle
              title="About Elite Football Academy"
              subtitle="Helping young footballers reach their full potential"
            />

              <p className="text-center text-gray-700 leading-8">
                Elite Football Academy is dedicated to developing young football
                players through professional coaching, structured training,
                and character development. We believe that football is more than
                a game—it is a tool for building discipline, confidence,
                teamwork, and leadership.
              </p>

            </div>

        </section>

        {/* Services Preview Section */}
          <section className="py-20 px-6">

            <div className="max-w-6xl mx-auto">

              <SectionTitle
                title="Our Services"
                subtitle="Professional coaching programmes designed for player development"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Individual Coaching
                  </h3>
                  <p className="text-gray-600">
                    One-on-one coaching focused on technical and tactical development.
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Group Coaching
                  </h3>
                  <p className="text-gray-600">
                    Structured training sessions that improve teamwork and game understanding.
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Holiday Camps
                  </h3>
                  <p className="text-gray-600">
                    Intensive holiday programmes combining learning, fun, and competition.
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Talent Identification
                  </h3>
                  <p className="text-gray-600">
                    Helping talented players gain exposure and development opportunities.
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* Testimonials Section */}
  <section className="py-20 px-6 bg-slate-100">

    <div className="max-w-6xl mx-auto">

      <SectionTitle
        title="What Our Players Say"
        subtitle="Feedback from players and parents"
      />

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic text-gray-700">
            "The coaching sessions helped me improve my confidence and technical skills."
          </p>

          <h4 className="font-semibold mt-4">
            - Sipho M.
          </h4>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic text-gray-700">
            "My son has grown tremendously as a player since joining the academy."
          </p>

          <h4 className="font-semibold mt-4">
            - Parent Testimonial
          </h4>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic text-gray-700">
            "Professional coaches, great environment, and excellent training programmes."
          </p>

          <h4 className="font-semibold mt-4">
            - Junior Player
          </h4>
        </div>

      </div>

    </div>

  </section>

  {/* CTA Section */}
  <section className="py-20 px-6 text-center bg-blue-900 text-white">

    <h2 className="text-4xl font-bold mb-4">
      Ready to Take Your Game to the Next Level?
    </h2>

    <p className="max-w-2xl mx-auto mb-8">
      Join Elite Football Academy and start your journey toward becoming a better football player.
    </p>

    <Button text="Book a Session" />

  </section>

    </main>
  );
}