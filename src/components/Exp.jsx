import { CalendarDays, MapPin, CheckCircle } from 'lucide-react';

const ExperienceCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 w-full max-w-3xl mx-auto border border-gray-200">
      {/* Company Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img
            src="/company-logo.png" // Replace with your logo path
            alt="Company Logo"
            className="w-12 h-12 rounded-full border p-1"
          />
          <div>
            <h2 className="text-lg font-semibold text-yellow-700">TrooInbound Pvt. Ltd.</h2>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              Surat, Gujarat, India
            </div>
          </div>
        </div>

        <div className="flex items-center bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
          <CalendarDays className="w-4 h-4 mr-1" />
          JUNE 2023 – PRESENT
        </div>
      </div>

      {/* Role Title */}
      <div className="flex items-center mb-4">
        <img
          src="/developer-icon.png" // Optional: Replace with developer icon
          alt="Developer Icon"
          className="w-6 h-6 mr-2"
        />
        <h3 className="text-xl font-bold text-gray-800">Front End Developer</h3>
      </div>

      {/* Bullet Points */}
      <ul className="space-y-2 text-gray-700 text-sm md:text-base">
        {[
          "Designed and developed over 15 complete React and NextJS full theme templates, showcasing proficiency in front-end design and development.",
          "Led the development of the Wired Academy project, a full-stack NextJS application.",
          "Managed both front-end and back-end aspects, utilizing NextJS API Routes for seamless integration.",
          "Integrated Stripe Payment Gateway for seamless and secure transactions.",
          "Successfully deployed the application on Vercel for optimal performance and accessibility.",
        ].map((point, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-4 h-4 text-green-600 mt-1 mr-2" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
