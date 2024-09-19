import React from "react";
import { FaLinkedin, FaYoutube, FaGlobe } from "react-icons/fa"; // Import FaGlobe for website icon
import type { Metadata } from "next"; // Import Metadata type

// Define metadata for the ContactUs page
export const metadata: Metadata = {
  title: "Contact Us | HoYoSmash!",
  description:
    "Get in touch with the HoYoSmash! team through LinkedIn, YouTube, or our website.",
  keywords: "HoYoSmash, contact, LinkedIn, YouTube, website",
  openGraph: {
    title: "Contact Us | HoYoSmash!",
    description:
      "Get in touch with the HoYoSmash! team through LinkedIn, YouTube, or our website.",
    url: "https://hoyosmash.com/contact_us",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | HoYoSmash!",
    description:
      "Get in touch with the HoYoSmash! team through LinkedIn, YouTube, or our website.",
  },
};

const ContactUs = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-2 text-center">
        <h1 className="mb-6 text-2xl font-bold">Contact Us</h1>
        <div className="space-y-4">
          <a
            href="https://www.linkedin.com/in/nooobtimex/"
            className="flex items-center justify-center space-x-2 text-blue-600 hover:underline"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.youtube.com/@nooobtimex2003"
            className="flex items-center justify-center space-x-2 text-red-600 hover:underline"
          >
            <FaYoutube size={24} />
            <span>YouTube</span>
          </a>
          <a
            href="/"
            className="flex items-center justify-center space-x-2 text-green-600 hover:underline"
          >
            <FaGlobe size={24} />
            <span>Your Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
