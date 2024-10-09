"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQ() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1
          className="text-3xl font-extrabold text-center mb-8"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details key={index} className="py-4 group">
              <summary
                className="flex justify-between items-center cursor-pointer text-lg font-semibold hover:text-blue-600 transition-all"
                data-aos="fade-down"
              >
                {faq.question}
                <span className="ml-2 group-open:hidden">+</span>
                <span className="ml-2 hidden group-open:block">−</span>
              </summary>
              <div className="py-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-white border border-blue-600 text-blue-600 py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition">
            Add Question
          </button>
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "What do you mean by public-facing usage?",
    answer:
      "We define public-facing usage as leveraging our platform to power enterprise-scale applications that are made available to external parties.",
  },
  {
    question: "Can I buy more storage for my individual plan?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel est aut laudantium rerum repellat, amet sapiente vero neque? Rem tenetur doloribus velit! Iure, quos impedit labore maiores libero consectetur repudiandae.",
  },
  {
    question:
      "What happens to my data after the trial or if I cancel my subscription?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel est aut laudantium rerum repellat, amet sapiente vero neque? Rem tenetur doloribus velit! Iure, quos impedit labore maiores libero consectetur repudiandae.",
  },
  {
    question: "Can I cancel my monthly or annual subscription?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel est aut laudantium rerum repellat, amet sapiente vero neque? Rem tenetur doloribus velit! Iure, quos impedit labore maiores libero consectetur repudiandae.",
  },
];
