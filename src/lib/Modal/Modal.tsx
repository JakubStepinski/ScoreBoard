import { ReactNode } from 'react';
import './modal.css';

interface IModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    testId?: string;
    title: string;
}

export const Modal = ({ children, testId, isOpen, onClose, title }: IModalProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-background" data-testId={testId} onClick={onClose}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-header">
                    {title}
                    <span className="modal-header-close-button" onClick={onClose}>X</span>
                </h2>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    )
}