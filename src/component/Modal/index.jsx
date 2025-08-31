import { useState } from "react";

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            {isOpen && (
                <div className="modal">
                    <h2>Modal Title</h2>
                    <p>Modal Content</p>
                    <button onClick={closeModal}>Close Modal</button>
                </div>
            )}
        </div>
    );
}

export default Modal;
