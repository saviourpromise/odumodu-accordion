import { useState } from "react";
import Accordion from "./Accordion";

export default function AccordionGroup({ items, allowMultiple = false }) {
  // State holds either:
  // - single open index (number or null) when allowMultiple=false
  // - array of open indexes when allowMultiple=true
  const [openItems, setOpenItems] = useState(allowMultiple ? [] : null);

  const toggleItem = (index) => {
    if (allowMultiple) {
      if (openItems.includes(index)) {
        setOpenItems(openItems.filter((i) => i !== index));
      } else {
        setOpenItems([...openItems, index]);
      }
    } else {
      setOpenItems(openItems === index ? null : index);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {items.map(({ title, content }, i) => (
        <Accordion
          key={i}
          title={title}
          isOpen={allowMultiple ? openItems.includes(i) : openItems === i}
          onToggle={() => toggleItem(i)}
        >
          {content}
        </Accordion>
      ))}
    </div>
  );
}


// wq-cWX3y8Q7!EVq