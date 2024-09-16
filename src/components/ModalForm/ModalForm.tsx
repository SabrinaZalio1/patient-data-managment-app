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

  const formFields = [
    { label: "Name", name: "name", type: "text", value: editableData.name },
    {
      label: "Website",
      name: "website",
      type: "text",
      value: editableData.website,
    },
    {
      label: "Birthday",
      name: "birthday",
      type: "date",
      value: editableData.birthday,
    },
    {
      label: "Health Insurance",
      name: "healthInsurance",
      type: "text",
      value: editableData.healthInsurance,
    },
    {
      label: "Description",
      name: "description",
      type: "textarea",
      value: editableData.description,
    },
  ];

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="c-modal-form__title">Edit Patient</h2>
        <form className="c-modal-form__form">
          {formFields.map((field, index) => (
            <div key={index}>
              <label>{field.label}:</label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={field.value}
                  onChange={handleInputChange}
                  className="c-modal-form__description"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  onChange={handleInputChange}
                />
              )}
            </div>
          ))}
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
