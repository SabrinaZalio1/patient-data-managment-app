import React, { useState } from 'react';
import { IPatient } from '../../interfaces/patient.interface';
import arrowIcon from './../../assets/sort.png';
import useFormattedDate from '../../hooks/useFormattedDate';
import './styles.css';
import PatientImage from '../PatientImage/PatienImage';

export interface IProps {
  patient: IPatient;
}

const PatientCard: React.FC<IProps> = ({ patient }) => {
  const { name, avatar, description, createdAt, website } = patient;
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedDate = useFormattedDate(createdAt);

   const handleToggle = () => {
    setIsExpanded(prevState => !prevState);
  };


  const truncatedDescription = description.length > 200
    ? `${description.substring(0, 200)}...`
    : description;


  return (
    <div className='c-patient-card'>
      <div className='c-patient-card__id-section'>
          <PatientImage
        src={avatar}
        alt={`${name}'s image`}
        className='c-patient-card__img'
      />
      {website && <a href={website} target='_blank' className='c-patient-card__url'>Visit Website</a>}
      </div>
      
<div className='c-patient-card__info-section'>
  <p className='c-patient-card__info'>{formattedDate}</p>
      <h2 className='c-patient-card__name'>{name}</h2>
      <p>Birthday:</p>
      <p>Address:</p>
      <p>Health insurance:</p>


    <div className='c-patient-card__btn-container'>
      <button className='btn c-patient-card__btn' onClick={handleToggle}>
        {isExpanded ? 'View less' : 'View more'}
        <img src={arrowIcon} alt="" className='c-patient-card__arrow-icon' />
      </button>
      <button className='btn c-patient-card__edit-btn'>Edit</button>
    </div>
        
      <p className='c-patient-card__description'>
        {isExpanded ? description : truncatedDescription}
      </p>
</div>
      

    </div>
  );
};

export default PatientCard;
