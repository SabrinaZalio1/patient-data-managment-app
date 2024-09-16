// src/components/Modal/Modal.tsx
import { INotificationToastProps } from "../../interfaces/patient.interface";
import "./styles.css";

const NotificationToast: React.FC<INotificationToastProps> = ({
  className,
}) => {
  return (
    <div className={`c-notification-toast ${className}`}>
      Changes saved successfully!
    </div>
  );
};

export default NotificationToast;
