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
  stories?: story;
}
export interface story {
  name?: string;
  type?: string;
  interactions?: interaction[];
}
export interface interaction {
  name?: string;
  messages?: string[] | any;
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
  text?: string;
  file?: FileInfo[] | any;
}
export type button = React.ButtonHTMLAttributes<HTMLButtonElement>;
