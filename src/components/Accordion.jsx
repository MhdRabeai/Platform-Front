/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = () => {
  const [activeAccordions, setActiveAccordions] = useState([]);

  const toggleAccordion = (index) => {
    if (activeAccordions.includes(index)) {
      setActiveAccordions(activeAccordions.filter((i) => i !== index));
    } else {
      setActiveAccordions([...activeAccordions, index]);
    }
  };

  const faqData = [
    {
      question: "What services does this website offer?",
      answer:
        "Our website provides online therapy, self-help resources, articles, and support for mental health.",
    },
    {
      question: "How can I access online therapy or counseling?",
      answer:
        "Many resources, including articles and self-assessments, are free, while some services may require a subscription.",
    },

    {
      question:
        "How can I provide feedback about my experience on the website?",
      answer:
        "You can share your feedback through our contact form or in the reviews section in each Doctor's profile.",
    },
    {
      question: "Is my communication with the doctor is secure and private?",
      answer:
        "Yes, it is definetly secured and private and everything that is said during the session no one except for the doctor and you will have access to",
    },
    {
      question: "What should I do in case of a mental health crisis?",
      answer:
        "If you are in crisis, please contact emergency services or a crisis hotline immediately for immediate support and assistance.",
    },
  ];

  const AccordionItem = ({ item, index, level = 0 }) => {
    const isActive = activeAccordions.includes(index);
    const paddingClass = level === 0 ? "px-6" : "px-10";

    return (
      <div
        className={`border-b ${
          level === 0 ? "border-gray-200" : "border-gray-100"
        }`}
      >
        <button
          className={`w-full ${paddingClass} py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#366437] ${
            level === 0 ? "bg-white" : "bg-gray-50"
          }`}
          onClick={() => toggleAccordion(index)}
          aria-expanded={isActive}
          aria-controls={`accordion-content-${index}`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`text-lg font-semibold ${
                isActive ? "text-[#4f9451]" : "text-gray-700"
              }`}
            >
              {item.question}
            </span>
            {isActive ? (
              <FaChevronUp className="text-[#4f9451]" />
            ) : (
              <FaChevronDown className="text-gray-400" />
            )}
          </div>
        </button>
        <div
          id={`accordion-content-${index}`}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isActive ? "max-h-96" : "max-h-0"
          }`}
          aria-hidden={!isActive}
        >
          <div className={`${paddingClass} py-4`}>
            <p className="text-gray-600">{item.answer}</p>
            {item.subQuestions && (
              <div className="mt-4">
                {item.subQuestions.map((subItem, subIndex) => (
                  <AccordionItem
                    key={subIndex}
                    item={subItem}
                    index={`${index}-${subIndex}`}
                    level={level + 1}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto my-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {faqData.map((item, index) => (
          <AccordionItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
