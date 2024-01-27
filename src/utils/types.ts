export interface IconProps {
  IconProps?: React.HTMLAttributes<HTMLElement>;
  color?: string;
}

export interface pagination {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<number>;
}

export interface chatbot {
  name?: string;
  date?: string;
  percent?: string;
  stories?: story | never[];
}
export interface story {
  name: string;
  template?: string;
  interactions: interaction[];
}
export interface interaction {
  id?: string;
  name?: string;
  messages?: string[] | any;
  component?: string;
}

export interface component {
  name: string;
  value: string;
}

export interface FileInfo {
  path: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface msg {
  id?: string;
  text?: string;
  file?: FileInfo[] | any;
  component?: string;
  rating?: number;
}

export interface chat {
  name?: string;
  msgs: msg[];
  img?: string;
}

export interface component_state {
  state?: boolean;
  value?: string;
}

export interface settings {
  title: string;
  value: string;
  select?: boolean;
  copy?: boolean;
}

export type button = React.ButtonHTMLAttributes<HTMLButtonElement>;
// nn
