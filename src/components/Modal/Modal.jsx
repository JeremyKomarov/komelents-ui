import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";
import { MODAL_SIZE } from "./Modal.types";

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const Modal = ({
  open = false,
  onClose,
  title,
  children,
  footer,
  size = MODAL_SIZE.MD,
  closeOnOverlay = true,
  className = "",
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="modal__overlay"
      onClick={closeOnOverlay ? (e) => e.target === e.currentTarget && onClose?.() : undefined}
    >
      <div className={["modal__box", `modal__box--${size}`, className].filter(Boolean).join(" ")}>
        {(title || onClose) && (
          <div className="modal__header">
            {title && <h2 className="modal__title">{title}</h2>}
            {onClose && (
              <button className="modal__close" onClick={onClose} aria-label="Close">
                <CloseIcon />
              </button>
            )}
          </div>
        )}
        <div className="modal__body">{children}</div>
        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
};

export { MODAL_SIZE };
export default Modal;
