import React, { useState } from 'react';
import Modal from './Modal';

interface InsertLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InsertLinkModal: React.FC<InsertLinkModalProps> = ({ isOpen, onClose }) => {
  const [link, setLink] = useState('');
  const [text, setText] = useState('');

  const closeModal = () => {
    onClose();
    setLink('');
    setText('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <form onSubmit={handleSubmit}>
        <input value={link} onChange={e => setLink(e.target.value)} placeholder="Link URL" />
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Link Text" />
        <button type="submit">Insert</button>
      </form>
    </Modal>
  );
};

export default InsertLinkModal;