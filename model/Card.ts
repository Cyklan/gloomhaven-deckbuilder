export interface Card {
  title: string;
  imgName: string;
  losable: boolean;
  lost?: boolean;
  level: number;
  permanent: boolean;
  recoverable: boolean;
  initiative: number;
  counters: { x: number; y: number }[];
}
