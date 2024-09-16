export interface IPatient {
  id: string;
  name: string;
  avatar: string;
  description: string;
  createdAt: string;
  website: string;
}

export interface IEditableData {
  name: string;
  website: string;
  birthday: string;
  healthInsurance: string;
  description: string;
}
export interface IModalFormProps {
  isVisible: boolean;
  onClose: () => void;
  editableData: IEditableData;
  handleInputChange: any;
  handleSaveClick: () => void;
}

export interface IProps {
  patient: IPatient;
  showToast: () => void;
}
export interface IPatientList {
  showToast: () => void;
}

export interface INotificationToastProps {
  className?: string;
  text: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}
