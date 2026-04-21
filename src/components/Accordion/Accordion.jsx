import "./Accordion.scss";
import { useState } from "react";
import { ACCORDION_VARIANT } from "./Accordion.types";

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M3 5l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Accordion = ({
  items = [],
  multiple = false,
  defaultOpen = [],
  variant = ACCORDION_VARIANT.DEFAULT,
  className = "",
}) => {
  const [openItems, setOpenItems] = useState(new Set(defaultOpen));

  const toggle = (id) => {
    setOpenItems((prev) => {
      const next = new Set(multiple ? prev : []);
      prev.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const classes = ["accordion", `accordion--${variant}`, className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div key={item.id} className="accordion__item">
            <button
              className="accordion__trigger"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              disabled={item.disabled}
            >
              {item.label}
              <span
                className={["accordion__icon", isOpen ? "accordion__icon--open" : ""]
                  .filter(Boolean)
                  .join(" ")}
              >
                <ChevronDown />
              </span>
            </button>
            <div
              className={["accordion__body", isOpen ? "accordion__body--open" : ""]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="accordion__content">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
