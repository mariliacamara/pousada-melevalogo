"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`faq-item ${open ? "open" : ""}`}
    >
      <button
        className="faq-q"
        onClick={() => setOpen(!open)}
      >
        {question}

        {open ? (
          <Minus size={18} />
        ) : (
          <Plus size={18} />
        )}
      </button>

      {open && (
        <div className="faq-a">
          {answer}
        </div>
      )}
    </article>
  );
}