export type GalleryProps = {
  photos: Photo[];
};

export type Photo = {
  src: string;
  thumb: string;
  width: number;
  height: number;
  alt: string;
  blurDataURL: string;
};

export type HomeProps = {
  oceans: Photo[];
  forests: Photo[];
};
