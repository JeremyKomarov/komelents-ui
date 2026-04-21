import Accordion, { ACCORDION_VARIANT } from "./index";

const ITEMS = [
  {
    id: "a1",
    label: "What is Komelents UI?",
    content: "A personal React component library built with SCSS and BEM.",
  },
  {
    id: "a2",
    label: "How do I install it?",
    content: "npm install komelents-ui — then import components directly.",
  },
  {
    id: "a3",
    label: "Can I customise styles?",
    content: "Yes — override SCSS variables or extend components with className.",
  },
];

const AccordionBook = () => (
  <>
    <p className="showcase__section-label">Default (single open)</p>
    <div className="showcase__row" style={{ flexDirection: "column", alignItems: "stretch" }}>
      <Accordion items={ITEMS} variant={ACCORDION_VARIANT.DEFAULT} defaultOpen={["a1"]} />
    </div>

    <p className="showcase__section-label">Bordered (multiple open)</p>
    <div className="showcase__row" style={{ flexDirection: "column", alignItems: "stretch" }}>
      <Accordion items={ITEMS} variant={ACCORDION_VARIANT.BORDERED} multiple />
    </div>

    <p className="showcase__section-label">Flush</p>
    <div className="showcase__row" style={{ flexDirection: "column", alignItems: "stretch" }}>
      <Accordion items={ITEMS} variant={ACCORDION_VARIANT.FLUSH} />
    </div>
  </>
);

export default AccordionBook;
