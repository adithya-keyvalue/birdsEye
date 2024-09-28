import React, { MouseEventHandler, ReactNode } from "react";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  onClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  children,
  onClick,
}) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 z-100 flex h-screen w-screen items-center justify-center bg-[#1D1D1DB2] transition-all duration-300 ease-in"
      style={(showModal && {}) || { display: "none" }}
      role="presentation"
      onClick={() => setShowModal(false)}
    >
      <div role="presentation" onClick={handleClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
