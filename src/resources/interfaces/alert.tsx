export interface AlertMessage {
  title: string;
  message: string;
}

export interface AlertState {
  isVisible: boolean;
  message: string;
  title: string;
}

export interface AlertProps {
  alert?: AlertState;
}
