import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-lg max-w-2xl mx-auto">
          We'd love to hear from you. Get in touch with Elite Football Academy.
        </p>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <SectionTitle
            title="Get In Touch"
            subtitle="Reach out to us using the details below"
          />

          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="font-bold mb-2">📞 Phone</h3>
              <p>+27 71 234 5678</p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="font-bold mb-2">📧 Email</h3>
              <p>info@elitefootballacademy.co.za</p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="font-bold mb-2">📍 Location</h3>
              <p>Durban, South Africa</p>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 px-6">

        <div className="max-w-2xl mx-auto">

          <SectionTitle
            title="Send Us A Message"
            subtitle="We'll get back to you as soon as possible"
          />

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border rounded-lg p-3"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}