import React from "react";

const termsData = [
  {
    title: "3ventiz Limited - Terms of Use",
    // text: "Updated: April 4, 2025",
    data: [],
  },
  {
    title: "1. Acceptance of Terms",
    text:
      'By downloading, installing, accessing, or using the 3ventiz Limited event management mobile application (the "App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you may not access or use the App.',
    data: [],
  },
  {
    title: "2. Use of the App",
    text:
      "3ventiz is a platform designed to help users discover, plan, and manage events. You may use the App to:",
    data: [
      "Browse and search for events.",
      "View event details, including dates, times, locations, and descriptions.",
      "Purchase tickets for events.",
      "RSVP to events.",
      "Communicate with event organizers and other attendees.",
      "Utilize planning tools provided within the App.",
      "Save and manage your favorite events.",
    ],
  },
  {
    title: "",
    text:
      "You agree to use the App only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the App.",
    data: [],
  },
  {
    title: "3. User Accounts",
    text:
      "To access certain features of the App, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating your account and to update your information as necessary. You are responsible for notifying us immediately of any unauthorized access to or use of your account.",
    data: [],
  },
  {
    title: "4. Content and Conduct",
    text:
      'You are solely responsible for any content you post, upload, or otherwise transmit through the App ("User Content"). You agree not to post User Content that is:',
    data: [
      "Unlawful, harassing, libelous, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable.",
      "Infringing on the intellectual property rights of others.",
      "Containing viruses, malware, or other harmful code.",
      "Misleading or fraudulent.",
      "Used for spamming or unauthorized advertising.",
    ],
  },
  {
    title: "",
    text:
      "3ventiz Limited reserves the right to remove any User Content that violates these Terms or is otherwise deemed inappropriate.",
    data: [],
  },
  {
    title: "5. Intellectual Property",
    text:
      "The App and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of 3ventiz Limited and its licensors. The App is protected by copyright, trademark, and other laws. You may not modify, reproduce, distribute, create derivative works of, publicly display, or in any way exploit any of the content or software of the App without the prior written consent of 3ventiz Limited.",
    data: [],
  },
  {
    title: "6. Third-Party Links and Services",
    text:
      "The App may contain links to third-party websites or services that are not owned or controlled by 3ventiz Limited. 3ventiz has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that 3ventiz Limited shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.",
    data: [],
  },
  {
    title: "7. Disclaimer of Warranties",
    text:
      'THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. 3VENTIZ DOES NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.',
    data: [],
  },
  {
    title: "8. Limitation of Liability",
    text:
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL 3VENTIZ LIMITED, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE APP, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, WHETHER OR NOT 3VENTIZ HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE. IN NO EVENT SHALL 3VENTIZ LIMITED AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE APP EXCEED THE AMOUNT YOU PAID, IF ANY, TO 3VENTIZ LIMITED FOR ACCESSING OR USING THE APP IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY.",
    data: [],
  },
  {
    title: "9. Indemnification",
    text:
      "You agree to defend, indemnify, and hold harmless 3ventiz Limited, its affiliates, directors, officers, employees, agents, suppliers, and licensors from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the App; (ii) your violation of any term of these Terms; (iii) your violation of any third-party right, including without limitation any right of privacy or intellectual property rights; (iv) your violation of any applicable law, rule, or regulation; (v) your User Content; or (vi) any other party's access and use of the App with your unique username, password, or other appropriate security code.",
    data: [],
  },
  {
    title: "10. Governing Law and Dispute Resolution",
    text:
      "These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the App shall be subject to the exclusive jurisdiction of the courts located in Bristol, England.",
    data: [],
  },
  {
    title: "11. Changes to These Terms",
    text:
      "3ventiz Limited reserves the right to modify or revise these Terms at any time by posting the updated Terms within the App. Your continued use of the App after any such changes constitutes your acceptance of the new Terms. It is your responsibility to review these Terms periodically for any changes.",
    data: [],
  },
  {
    title: "12. Contact Us",
    text:
      "If you have any questions about these Terms, please contact us at:\nEmail: admin@3ventiz.co.uk\nAddress: [3ventiz Limited, Bristol, United Kingdom]",
    data: [],
  },
];

export default function TermsOfServiceScreen() {
  return (
    <div className="bg-white p-8 pt-[12rem] max-w-[1120px] 2xl:max-w-[1400px] 3xl:max-w-[2000px] mx-auto">
      {termsData.map((section, idx) => (
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
        <p className="text-[1.6rem] leading-[2.8rem] whitespace-pre-line">{text}</p>
      )}
      {data.length > 0 && (
        <ul className="list-disc ml-6">
          {data.map((item, i) => (
            <li
              key={i}
              className="text-[1.6rem] leading-[2.8rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )}