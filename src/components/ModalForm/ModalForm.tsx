// src/components/Modal/Modal.tsx
import React from "react";
import "./styles.css";
import { IModalFormProps } from "../../interfaces/patient.interface";

const ModalForm: React.FC<IModalFormProps> = ({
  isVisible,
  onClose,
  editableData,
  handleInputChange,
  handleSaveClick,
}) => {
  if (!isVisible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="c-modal-form__title">Edit Patient</h2>
        <form className="c-modal-form__form">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={editableData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Website:</label>
            <input
              type="text"
              name="website"
              value={editableData.website}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Birthday:</label>
            <input
              type="date"
              name="birthday"
              value={editableData.birthday}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Health Insurance:</label>
            <input
              type="text"
              name="healthInsurance"
              value={editableData.healthInsurance}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={editableData.description}
              onChange={handleInputChange}
              className="c-modal-form__decription"
            />
          </div>
          <button
            type="button"
            onClick={handleSaveClick}
            className="btn c-modal-form__btn"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
