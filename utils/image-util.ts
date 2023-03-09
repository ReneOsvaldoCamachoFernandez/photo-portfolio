import { Photo } from "@/types";
import { createApi } from "unsplash-js";
import lqip from "lqip-modern";

async function getblurDataURL(url: string) {
  const imgData = await fetch(url);
  const arrayBufferData = await imgData.arrayBuffer();
  const lqipData = await lqip(Buffer.from(arrayBufferData));

  return lqipData.metadata.dataURIBase64;
}

export async function getImages(
  client: ReturnType<typeof createApi>,
  query: string
): Promise<Photo[]> {
  const photos = await client.search.getPhotos({
    query: query,
  });

  ///get the photos from unsplash
  const mappedPhotos: Photo[] = [];
  if (photos.type == "success") {
    const photosArr = photos.response.results.map((photo, indx) => ({
      src: photo.urls.full,
      thumb: photo.urls.thumb,
      width: photo.width,
      height: photo.height,
      alt: photo.alt_description ?? `img-${indx}`,
    }));

    const photosArrWBlur: Photo[] = [];

    for (const photo of photosArr) {
      const blurDataURL = await getblurDataURL(photo.src);
      photosArrWBlur.push({ ...photo, blurDataURL });
    }

    mappedPhotos.push(...photosArrWBlur);
  } else {
    console.error("could not get photos");
  }

  return mappedPhotos;
}
