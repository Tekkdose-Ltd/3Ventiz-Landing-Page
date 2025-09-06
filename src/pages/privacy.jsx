import React from "react";

const privacyData = [
  {
    title: "3ventiz Limited - Privacy Policy",
    data: [],
  },
  {
    title: "1. Introduction",
    text:
      '3ventiz Limited ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our mobile application (the "App"). Please read this Privacy Policy carefully.',
    data: [],
  },
  {
    title: "2. Information We Collect",
    text: "",
    data: [
      "Account Information: When you create an account, we collect your name, email address, password, and optionally, your phone number and profile picture.",
      "Profile Information: You may choose to provide additional information in your profile, such as your interests, location, and social media links.",
      "Usage Data: We collect information about how you use the App, including the events you browse, tickets you purchase, events you RSVP to, your interactions with other users, and the features you use.",
      "Device Information: We collect information about your mobile device, including your device type, operating system, unique device identifiers, IP address, and mobile network information.",
      "Location Data: With your consent, we may collect your device's precise location to provide you with location-based event recommendations and features. You can manage your location sharing preferences in your device settings.",
      "Communications: We may collect information contained in your communications with us, such as support requests and feedback.",
      "Payment Information: If you purchase tickets through the App, we use third-party payment processors to handle your payment information securely. We do not directly store your full credit card details.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    text: "",
    data: [
      "To provide and maintain the App and its features.",
      "To personalize your experience and provide tailored event recommendations.",
      "To process your ticket purchases and RSVPs.",
      "To facilitate communication between you and event organizers or other attendees (with your consent).",
      "To send you notifications and updates about events you are interested in.",
      "To respond to your inquiries and provide customer support.",
      "To analyze App usage and trends to improve our services.",
      "To detect, prevent, and address technical issues, fraud, and abuse.",
      "To comply with applicable laws and regulations.",
      "For marketing and promotional purposes (with your consent, where required by law).",
    ],
  },
  {
    title: "4. How We Share Your Information",
    text: "",
    data: [
      "Event Organizers: When you purchase tickets for or RSVP to an event, we will share your relevant information (e.g., name, email address) with the event organizer for event management purposes.",
      "Other Users: If you choose to interact with other users through the App (e.g., through messaging features), your profile information and communications may be visible to them.",
      "Service Providers: We may share your information with third-party service providers who assist us with various functions, such as payment processing, data analytics, email delivery, and hosting services. These providers are contractually obligated to protect your information.",
      "Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.",
      "Legal Compliance: We may disclose your information if required to do so by law or in response to a valid legal request, such as a court order or government investigation.",
      "With Your Consent: We may share your information with third parties for other purposes with your explicit consent.",
    ],
  },
  {
    title: "5. Your Rights and Choices",
    text: "",
    data: [
      "Access: You can request access to the personal information we hold about you.",
      "Correction: You can request that we correct any inaccurate or incomplete personal information.",
      "Deletion: You can request that we delete your personal information, subject to certain exceptions.",
      "Objection: You can object to the processing of your personal information for certain purposes, such as direct marketing.",
      "Restriction: You can request that we restrict the processing of your personal information in certain circumstances.",
    ],
  },
  {
    title: "",
    text:
      "You can exercise these rights by contacting us using the contact information provided below. We will respond to your request in accordance with applicable law. You can also manage your communication preferences within the App settings and control your location sharing permissions through your device settings.",
    data: [],
  },
  {
    title: "6. Data Security",
    text:
      "We have implemented reasonable technical and organizational measures designed to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.",
    data: [],
  },
  {
    title: "7. Data Retention",
    text:
      "We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
    data: [],
  },
  {
    title: "8. Children's Privacy",
    text:
      "The App is not intended for children under the age of 18. We do not knowingly collect personal information from children under this age. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.",
    data: [],
  },
  {
    title: "9. International Data Transfers",
    text:
      "Your personal information may be transferred to and processed in countries outside of the UK, which may have different data protection laws than those in your country. We will take appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy and applicable law.",
    data: [],
  },
  {
    title: "10. Changes to This Privacy Policy",
    text:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by posting the updated Privacy Policy within the App or by other means. Your continued use of the App after the effective date of the revised Privacy Policy constitutes your acceptance of the changes.",
    data: [],
  },
  {
    title: "11. Contact Us",
    text:
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:\nEmail: admin@3ventiz.co.uk\nAddress: [3ventiz Limited, Bristol, United Kingdom]",
    data: [],
  },
];

export default function PrivacyPolicyScreen() {
  return (
    <div className="bg-white p-8 pt-[12rem] max-w-[1120px] 3xl:max-w-[2000px] mx-auto">
      {privacyData.map((section, idx) => (
        <TextCard
          key={idx}
          title={section.title}
          text={section.text}
          data={section.data}
        />
      ))}
    </div>
  );
}

const TextCard = ({ title, text, data }) => {
  return (
    <div className="mb-8">
      {title && (
        <p className="text-[2.8rem] leading-[3.5rem] font-semibold">{title}</p>
      )}
      {text && (
        <p className="text-[1.6rem] leading-[2.8rem] ">{text}</p>
      )}
      {data.length > 0 && (
        <ul className="list-disc ml-6">
          {data.map((item, i) => (
            <li
              key={i}
              className="text-[1.6rem] leading-[2.8rem] "
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>

  )
}