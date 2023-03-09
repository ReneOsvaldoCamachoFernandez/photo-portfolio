import type { GalleryProps, Photo } from "@/types";
import { useRef } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
////////////////////////
//LIGTHGALLERY
////////////////////////
import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

////////////////////////
//UNSPLASH
////////////////////////
import { createApi } from "unsplash-js";
import lqip from "lqip-modern";
///////////////////////

export function Gallery({ photos }: GalleryProps) {
  const ligthboxRef = useRef<LightGallery | null>(null);

  return (
    <>
      <Masonry breakpointCols={3} className="flex gap-4" columnClassName="">
        {photos.map((photo, indx) => (
          <div key={indx} className="relative">
            <Image
              key={photo.src}
              src={photo.src}
              width={photo.width}
              height={photo.height}
              className="my-4 "
              alt={photo.alt}
              placeholder="blur"
              blurDataURL={photo.blurDataURL}
            />
            <div
              key={indx}
              className="absolute w-full h-full inset-0 bg-transparent hover:bg-stone-900 hover:bg-opacity-50 hover: cursor-pointer"
              onClick={() => {
                ligthboxRef.current?.openGallery(indx);
              }}
            ></div>
          </div>
        ))}
      </Masonry>
      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) ligthboxRef.current = ref.instance;
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic={true}
        dynamicEl={photos.map((photo) => ({
          src: photo.src,
          thumb: photo.thumb,
        }))}
      ></LightGalleryComponent>
    </>
  );
}
