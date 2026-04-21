import Button, { BUTTON_SIZE, BUTTON_VARIANT } from "./index";

const ButtonBook = () => (
  <>
    <p className="showcase__section-label">Variants</p>
    <div className="showcase__row">
      <Button variant={BUTTON_VARIANT.PRIMARY}>Primary</Button>
      <Button variant={BUTTON_VARIANT.SECONDARY}>Secondary</Button>
      <Button variant={BUTTON_VARIANT.GHOST}>Ghost</Button>
      <Button variant={BUTTON_VARIANT.OUTLINE}>Outline</Button>
      <Button variant={BUTTON_VARIANT.DANGER}>Danger</Button>
      <Button variant={BUTTON_VARIANT.SUCCESS}>Success</Button>
    </div>

    <p className="showcase__section-label">Sizes</p>
    <div className="showcase__row">
      <Button size={BUTTON_SIZE.SM}>Small</Button>
      <Button size={BUTTON_SIZE.MD}>Medium</Button>
      <Button size={BUTTON_SIZE.LG}>Large</Button>
    </div>

    <p className="showcase__section-label">States</p>
    <div className="showcase__row">
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button fullWidth>Full Width</Button>
    </div>

    <p className="showcase__section-label">With Icons</p>
    <div className="showcase__row">
      <Button iconLeft={<span>←</span>}>Back</Button>
      <Button iconRight={<span>→</span>}>Next</Button>
      <Button variant={BUTTON_VARIANT.OUTLINE} iconLeft={<span>＋</span>}>
        Add Item
      </Button>
    </div>
  </>
);

export default ButtonBook;
