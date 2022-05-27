export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  block: [];
  isError: boolean;
}

export interface Block {
  attributes: Attributes;
  id: string;
  type: string;
}

interface Attributes {
  data: string;
  hash: string;
  index: number;
  "previous-hash": string;
  timestamp: number;
}
