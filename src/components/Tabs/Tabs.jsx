import { useState } from "react";
import "./Tabs.scss";
import { TABS_VARIANT } from "./Tabs.types";

const Tabs = ({
  tabs = [],
  defaultTab,
  activeTab: controlledActive,
  onChange,
  variant = TABS_VARIANT.DEFAULT,
  className = "",
}) => {
  const [internalActive, setInternalActive] = useState(defaultTab ?? tabs[0]?.id);
  const active = controlledActive ?? internalActive;

  const handleClick = (id) => {
    setInternalActive(id);
    onChange?.(id);
  };

  const activePanel = tabs.find((t) => t.id === active)?.content;

  const classes = ["tabs", `tabs--${variant}`, className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <div className="tabs__list" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            className={["tabs__tab", active === tab.id ? "tabs__tab--active" : ""].filter(Boolean).join(" ")}
            onClick={() => handleClick(tab.id)}
            disabled={tab.disabled}
            aria-selected={active === tab.id}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs__panel" role="tabpanel">
        {activePanel}
      </div>
    </div>
  );
};

export { TABS_VARIANT };
export default Tabs;
