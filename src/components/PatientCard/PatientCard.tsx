import React, { useState } from "react";
import { IProps } from "../../interfaces/patient.interface";
import arrowIcon from "./../../assets/sort.png";
import useFormattedDate from "../../hooks/useFormattedDate";
import "./styles.css";
import PatientImage from "../PatientImage/PatienImage";
import ModalForm from "../ModalForm/ModalForm";

const PatientCard: React.FC<IProps> = ({ patient, showToast }) => {
  const { name, avatar, description, createdAt, website } = patient;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [editableData, setEditableData] = useState({
    name: name,
    description: description,
    website: website,
    birthday: "",
    healthInsurance: "",
  });

  const formattedDate = useFormattedDate(createdAt);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleEditClick = () => {
    setIsModalVisible(true);
  };

  const handleSaveClick = () => {
    setIsModalVisible(false);
    showToast();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditableData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const truncatedDescription =
    description.length > 200
      ? `${description.substring(0, 200)}...`
      : description;

  return (
    <div className="c-patient-card">
      <div className="c-patient-card__id-section">
        <PatientImage
          src={avatar}
          alt={`${name}'s image`}
          className="c-patient-card__img"
        />
        {editableData.website && (
          <a
            href={editableData.website}
            target="_blank"
            className="c-patient-card__url underline-animation font-sm "
          >
            Visit Website
          </a>
        )}
      </div>

      <div className="c-patient-card__info-section">
        <p className="c-patient-card__info">{formattedDate}</p>
        <h2 className="c-patient-card__name">{editableData.name}</h2>
        <p className="font-sm ">Birthday: {editableData.birthday || " "}</p>
        <p className="font-sm ">
          Health insurance: {editableData.healthInsurance || " "}
        </p>

        <div className="c-patient-card__btn-container">
          <button className="btn c-patient-card__btn" onClick={handleToggle}>
            {isExpanded ? "View less" : "View more"}
            <img
              src={arrowIcon}
              alt="arrow icon"
              className="c-patient-card__arrow-icon"
            />
          </button>
          <button
            className="btn c-patient-card__edit-btn"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>

        <p className="c-patient-card__description font-sm ">
          {isExpanded ? editableData.description : truncatedDescription}
        </p>
      </div>

      <ModalForm
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        editableData={editableData}
        handleInputChange={handleInputChange}
        handleSaveClick={handleSaveClick}
      />
    </div>
  );
};

export default PatientCard;
