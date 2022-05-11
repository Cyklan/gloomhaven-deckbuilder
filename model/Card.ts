export interface Card {
  title: string;
  imgName: string;
  counter: number;
  losable: boolean;
  lost?: boolean;
  level: number;
  permanent: boolean;
  recoverable: boolean;
}