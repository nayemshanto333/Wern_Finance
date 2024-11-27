import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

const faqs = [
  {
    q: "What credit score do I need to apply for a credit card?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "How can I apply for a credit card online?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "Are there any annual fees associated with the credit card?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "How long does it take to receive the credit card once approved?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "How can I check my credit card balance and transactions?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "What should I do if my credit card is lost or stolen?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "Is my credit card information secure?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
]
const FAQs = () => {
  return (
    <section className="mt-10 lg:mt-20 xl:mt-24 w-10/12 mx-auto">
      <h1 className="text-center text-2xl md:3xl lg:4xl font-bold">FAQs</h1>
      <div className="mt-10">
        <Accordion >
          {faqs.map(({a,q}, i)=>(
            <AccordionItem key={i} aria-label={q} title={<span className="text-white" >{q}</span>}><span className="text-secondary">{a}</span></AccordionItem>
          ))}
          
          
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
