import { INotificationToastProps } from "../../interfaces/patient.interface";
import "./styles.css";

const NotificationToast: React.FC<INotificationToastProps> = ({
  className,
  text,
}) => {
  return <div className={`c-notification-toast ${className}`}>{text}</div>;
};

export default NotificationToast;
