import SectionTitle from "@/components/SectionTitle";

export default function BookSessionPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Book A Session
        </h1>

        <p className="text-lg max-w-2xl mx-auto">
          Take the first step towards improving your football skills.
        </p>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-6">

        <div className="max-w-3xl mx-auto">

          <SectionTitle
            title="Session Booking Request"
            subtitle="Complete the form below and we'll contact you"
          />

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Player Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              placeholder="Parent / Guardian Name"
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

            <select
              className="w-full border rounded-lg p-3"
            >
              <option>Select Age Group</option>
              <option>Under 10</option>
              <option>Under 13</option>
              <option>Under 16</option>
              <option>Under 19</option>
            </select>

            <select
              className="w-full border rounded-lg p-3"
            >
              <option>Select Service</option>
              <option>Individual Coaching</option>
              <option>Group Coaching</option>
              <option>Holiday Camp</option>
              <option>Talent Identification</option>
            </select>

            <textarea
              rows={5}
              placeholder="Additional Notes"
              className="w-full border rounded-lg p-3"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Submit Booking Request
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}