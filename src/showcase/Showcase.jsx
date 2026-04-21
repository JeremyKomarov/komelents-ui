import { useState, useEffect, useRef } from "react";
import "./Showcase.scss";
import ButtonBook    from "@components/Button/Button.book";
import InputBook     from "@components/Input/Input.book";
import SelectBook    from "@components/Select/Select.book";
import TabsBook      from "@components/Tabs/Tabs.book";
import ModalBook     from "@components/Modal/Modal.book";
import AccordionBook from "@components/Accordion/Accordion.book";

const NAV = [
  { id: "button",    label: "Button",    icon: "🔘" },
  { id: "input",     label: "Input",     icon: "✏️" },
  { id: "select",    label: "Select",    icon: "▾" },
  { id: "tabs",      label: "Tabs",      icon: "🗂" },
  { id: "modal",     label: "Modal",     icon: "⬜" },
  { id: "accordion", label: "Accordion", icon: "☰" },
];

const SECTIONS = [
  { id: "button",    label: "Button",    Book: ButtonBook },
  { id: "input",     label: "Input",     Book: InputBook },
  { id: "select",    label: "Select",    Book: SelectBook },
  { id: "tabs",      label: "Tabs",      Book: TabsBook },
  { id: "modal",     label: "Modal",     Book: ModalBook },
  { id: "accordion", label: "Accordion", Book: AccordionBook },
];

const Showcase = () => {
  const [activeSection, setActiveSection] = useState("button");
  const sectionRefs = useRef({});

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="showcase">
      <aside className="showcase__sidebar">
        <p className="showcase__sidebar-title">Components</p>
        {NAV.map(({ id, label, icon }) => (
          <button
            key={id}
            className={["showcase__nav-link", activeSection === id ? "showcase__nav-link--active" : ""].filter(Boolean).join(" ")}
            onClick={() => scrollTo(id)}
          >
            <span className="showcase__nav-icon">{icon}</span>
            {label}
          </button>
        ))}
      </aside>

      <main className="showcase__main">
        <div className="showcase__header">
          <h1>Komelents UI</h1>
          <p>Component library showcase</p>
        </div>

        {SECTIONS.map(({ id, label, Book }) => (
          <section
            key={id}
            id={id}
            className="showcase__section"
            ref={(el) => (sectionRefs.current[id] = el)}
          >
            <h2 className="showcase__section-title">{label}</h2>
            <Book />
          </section>
        ))}
      </main>
    </div>
  );
};

export default Showcase;
