import ContactInfo from "@/components/ContactIfo"; // Ensure the import path is correct
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-6 md:p-8 lg:p-10">
      {/* Sheba Coffee Header with Centered Title and Visible Lines on Small Screens */}
      <div className="flex flex-col items-center w-full max-w-5xl mb-6">
        <div className="flex items-center justify-center w-full">
          {/* Visible lines on all screens */}
          <hr className="w-1/4 sm:w-1/6 border-t border-secondary" /> {/* Shorter line on the left */}
          <h1 className="mx-4 text-3xl font-bold text-primary text-center">Sheba Coffee</h1>
          <hr className="w-1/4 sm:w-1/6 border-t border-secondary" /> {/* Shorter line on the right */}
        </div>
        <p className="text-lg text-gray-700 text-center mt-4">
          Stay connected with the Sheba family—where every cup brings us closer together!
        </p>
      </div>

      {/* Contact Us Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-6">
        <div className="flex-1">
          <ContactInfo />
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
