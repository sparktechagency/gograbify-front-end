"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Is GoGrabify free to use?",
    answer: "Yes, GoGrabify is 100% free to use with no hidden charges.",
  },
  {
    question: "Do I need to install software?",
    answer: "No, GoGrabify works online directly in your browser.",
  },
  {
    question: "Is it safe to download videos?",
    answer: "Yes, we use secure encryption and do not store any files on our servers.",
  },
  {
    question: "Can I download videos on mobile?",
    answer: "Yes, GoGrabify works on Android, iPhone, and all devices.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-20 bg-background ">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left font-medium transition-colors hover:bg-muted/50"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-4 pt-0 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};