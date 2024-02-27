export interface CardProps {
  id?: number;
  ref?: HTMLDivElement | null;
  imgUrl: string;
  alt: string;
  header: string;
  text: string;
}

type imgObj = {
  src: string;
  alt: string;
};

export interface TilesProps {
  id: number;
  image: imgObj;
  icon: imgObj;
  header: string;
  text: string;
  isReverse: boolean;
}
