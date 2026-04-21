import { useState } from "react";
import Modal, { MODAL_SIZE } from "./index";
import Button, { BUTTON_VARIANT } from "@components/Button";

const ModalBook = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(MODAL_SIZE.MD);

  const openModal = (s) => { setSize(s); setOpen(true); };

  return (
    <>
      <p className="showcase__section-label">Sizes</p>
      <div className="showcase__row">
        {Object.values(MODAL_SIZE).map((s) => (
          <Button key={s} variant={BUTTON_VARIANT.OUTLINE} onClick={() => openModal(s)}>
            Open {s}
          </Button>
        ))}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal title"
        size={size}
        footer={
          <>
            <Button variant={BUTTON_VARIANT.GHOST} onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>This is the modal body. You can put any content here — forms, text, images, etc.</p>
        <p>Press <strong>Escape</strong> or click the overlay to close.</p>
      </Modal>
    </>
  );
};

export default ModalBook;
