import { useState } from "react";
import Select, { SELECT_VARIANT, SELECT_SIZE } from "./index";

const OPTIONS = [
  { value: "react",   label: "React" },
  { value: "vue",     label: "Vue" },
  { value: "svelte",  label: "Svelte" },
  { value: "angular", label: "Angular" },
];

const SelectBook = () => {
  const [val, setVal] = useState("");

  return (
    <>
      <p className="showcase__section-label">Variants</p>
      <div className="showcase__row" style={{ flexDirection: "column", alignItems: "stretch", maxWidth: 400 }}>
        <Select label="Framework" options={OPTIONS} value={val} onChange={(e) => setVal(e.target.value)} placeholder="Pick one…" />
        <Select label="Error state" options={OPTIONS} variant={SELECT_VARIANT.ERROR} helper="Selection required." placeholder="Pick one…" />
        <Select label="Success state" options={OPTIONS} variant={SELECT_VARIANT.SUCCESS} helper="Good choice." defaultValue="react" />
        <Select label="Disabled" options={OPTIONS} disabled placeholder="Disabled…" />
      </div>

      <p className="showcase__section-label">Sizes</p>
      <div className="showcase__row" style={{ flexDirection: "column", alignItems: "stretch", maxWidth: 400 }}>
        <Select size={SELECT_SIZE.SM} options={OPTIONS} placeholder="Small" />
        <Select size={SELECT_SIZE.MD} options={OPTIONS} placeholder="Medium" />
        <Select size={SELECT_SIZE.LG} options={OPTIONS} placeholder="Large" />
      </div>
    </>
  );
};

export default SelectBook;
