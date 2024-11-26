import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

const FAQs = () => {
  return (
    <section className="mt-10 lg:mt-20 xl:mt-24 w-10/12 mx-auto">
      <h1 className="text-center text-2xl md:3xl lg:4xl font-bold">FAQs</h1>
      <div className="mt-10">
        <Accordion >
          <AccordionItem key="1" aria-label="Accordion 1" className="text-white" title={<span style={{color: "white"}}>"What credit score do I need to apply for a credit card?"</span>}>
            <span style={{color:"#ADB2B1", fontSize:"14px"}}>{`The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.`}</span>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title={<span style={{color: "white"}}>" How can I apply for a credit card online?"</span>}>
          <span style={{color:"#ADB2B1", fontSize:"14px"}}>{`The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.`}</span>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3"title={<span style={{color: "white"}}>"Are there any annual fees associated with the credit card?"</span>}>
          <span style={{color:"#ADB2B1", fontSize:"14px"}}>{`The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.`}</span>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4"title={<span style={{color: "white"}}>"How long does it take to receive the credit card once approved?"</span>}>
          <span style={{color:"#ADB2B1", fontSize:"14px"}}>{`The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.`}</span>
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 5"title={<span style={{color: "white"}}>" How can I check my credit card balance and transactions?"</span>}>
          <span style={{color:"#ADB2B1", fontSize:"14px"}}>{`The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.`}</span>
          </AccordionItem>
          <AccordionItem key="6" aria-label="Accordion 6"title={<span style={{color: "white"}}>" What should I do if my credit card is lost or stolen?"</span>}>
          <span style={{color:"#ADB2B1", fontSize:"14px"}}>{`The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.`}</span>
          </AccordionItem>
          <AccordionItem key="7" aria-label="Accordion 7"title={<span style={{color: "white"}}>"Is my credit card information secure?"</span>}>
          <span style={{color:"#ADB2B1", fontSize:"14px"}}>{`The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.`}</span>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
