import { useState } from "react";
import Input, { INPUT_VARIANT, INPUT_SIZE } from "./index";

const InputBook = () => {
  const [val, setVal] = useState("");

  return (
    <>
      <p className="showcase__section-label">Variants</p>
      <div className="showcase__row" style={{ flexDirection: "column", alignItems: "stretch", maxWidth: 400 }}>
        <Input label="Default" placeholder="Enter value…" value={val} onChange={(e) => setVal(e.target.value)} />
        <Input label="Error" placeholder="Bad value" variant={INPUT_VARIANT.ERROR} helper="This field is required." />
        <Input label="Success" placeholder="Good value" variant={INPUT_VARIANT.SUCCESS} helper="Looks great!" />
        <Input label="Disabled" placeholder="Can't touch this" disabled />
      </div>

      <p className="showcase__section-label">Sizes</p>
      <div className="showcase__row" style={{ flexDirection: "column", alignItems: "stretch", maxWidth: 400 }}>
        <Input size={INPUT_SIZE.SM} placeholder="Small input" />
        <Input size={INPUT_SIZE.MD} placeholder="Medium input" />
        <Input size={INPUT_SIZE.LG} placeholder="Large input" />
      </div>

      <p className="showcase__section-label">With Icons</p>
      <div className="showcase__row" style={{ flexDirection: "column", alignItems: "stretch", maxWidth: 400 }}>
        <Input label="Search" placeholder="Search…" iconLeft={<span>🔍</span>} />
        <Input label="Password" placeholder="Enter password" type="password" iconRight={<span>👁</span>} />
      </div>
    </>
  );
};

export default InputBook;
