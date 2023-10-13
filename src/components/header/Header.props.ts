import { ReactNode } from "react";

export interface HeaderProps {
  title?: string;
  leftIcon?: ReactNode;
  onLeftIconPress: () => void;
}