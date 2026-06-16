import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">

        <h1 className="text-5xl font-bold mb-4">
          Our Services
        </h1>

        <p className="text-lg max-w-2xl mx-auto">
          Professional football coaching programmes designed
          to help players reach their full potential.
        </p>

      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <SectionTitle
            title="What We Offer"
            subtitle="Programmes tailored to different stages of development"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

            <ServiceCard
              title="Individual Coaching"
              description="Personalised one-on-one coaching focused on technical skills, fitness, and tactical understanding."
            />

            <ServiceCard
              title="Group Coaching"
              description="Structured team sessions designed to improve teamwork, communication, and match awareness."
            />

            <ServiceCard
              title="Holiday Camps"
              description="Intensive football camps during school holidays combining training, competition, and fun."
            />

            <ServiceCard
              title="Talent Identification"
              description="Helping promising players gain exposure and opportunities to progress their football careers."
            />

          </div>

        </div>

      </section>

    </main>
  );
}