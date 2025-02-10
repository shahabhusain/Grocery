import { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const faqs = [
  {
    question: "What are some benefits of being a member-owner?",
    answer: [
      "Receive special in-store offers and discounts.",
      "Receive patronage rebates/dividends once the store is profitable.",
      "Are eligible to vote for the Executive Board of Directors and/or run for a seat on the Board.",
      "Can participate in events, workshops, and classes offered by the Co-op at no or reduced cost.",
      "Are investing in and supporting our local community by promoting local shopping, local products, and providing jobs.",
      "Help support family farms, fair trade practices, organic foods, and healthy food access.",
    ],
  },
  {
    question: "Do I have to be a member-owner to shop there?",
    answer: "Everyone is welcome to shop at the co-op once it opens.",
  },
  {
    question: "How do I become a member-owner?",
    answer:
      "It’s easy! You invest a one-time $100 for an equity share. It can be paid all at once or in 4 installments of $25.",
  },
  {
    question: "What does it mean to be a member-owner?",
    answer:
      "One member/One Vote! You can have a direct impact on what the company does. All members are invited to attend community meetings where concerns can be addressed and a simple majority makes decisions.",
  },
];

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] mx-auto py-8">
      <div className="bg-[#5F84B6] text-[32px] text-white font-semibold p-4 rounded-t-md">
        Frequently Asked Questions
      </div>

      <div className="flex flex-col gap-2 mt-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${
              openIndex === index ? "bg-green-100" : "bg-orange-100"
            } my-2 px-8 py-8 rounded-md shadow-md cursor-pointer`}
          >
            {/* Question and Toggle Button */}
            <div onClick={() => toggleFAQ(index)} className="flex justify-between items-center">
              <p className="font-semibold text-xl">{faq.question}</p>
              <button className=" cursor-pointer" onClick={() => toggleFAQ(index)}>
                {openIndex === index ? (
                  <FaTimes className="text-red-600 text-xl" />
                ) : (
                  <FaChevronDown className="text-gray-600 text-xl" />
                )}
              </button>
            </div>

            {/* Answer Section */}
            {openIndex === index && (
              <div className="mt-4 text-gray-700 text-lg">
                {Array.isArray(faq.answer) ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {faq.answer.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequently;
