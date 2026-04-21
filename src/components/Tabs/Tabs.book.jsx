import Tabs, { TABS_VARIANT } from "./index";

const TABS = [
  { id: "overview", label: "Overview", content: "Overview panel content goes here." },
  { id: "usage",    label: "Usage",    content: "Usage panel content goes here." },
  { id: "api",      label: "API",      content: "API panel content goes here." },
  { id: "disabled", label: "Disabled", content: "You should not see this.", disabled: true },
];

const TabsBook = () => (
  <>
    <p className="showcase__section-label">Default</p>
    <div className="showcase__row" style={{ flexDirection: "column", alignItems: "stretch" }}>
      <Tabs tabs={TABS} variant={TABS_VARIANT.DEFAULT} />
    </div>

    <p className="showcase__section-label">Pills</p>
    <div className="showcase__row" style={{ flexDirection: "column", alignItems: "stretch" }}>
      <Tabs tabs={TABS} variant={TABS_VARIANT.PILLS} />
    </div>

    <p className="showcase__section-label">Underline</p>
    <div className="showcase__row" style={{ flexDirection: "column", alignItems: "stretch" }}>
      <Tabs tabs={TABS} variant={TABS_VARIANT.UNDERLINE} />
    </div>
  </>
);

export default TabsBook;
