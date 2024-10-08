import React, { useState } from "react";
import "./styles.css";
import defaultImage from "./../../assets/patient.png";
import { ImageProps } from "../../interfaces/patient.interface";

const PatientImage: React.FC<ImageProps> = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageError = () => {
    setImageSrc(defaultImage);
  };

  return (
    <div className="c-patient-img">
      <img
        className={className}
        src={imageSrc}
        alt={alt}
        onError={handleImageError}
      />
    </div>
  );
};

export default PatientImage;
