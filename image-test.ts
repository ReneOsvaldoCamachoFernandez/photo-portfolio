import lqip from "lqip-modern";

const imagen =
  "https://images.unsplash.com/photo-1589634749362-a8ef3056cbe9?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MTk5NjF8MHwxfHNlYXJjaHwxfHxvY2VhbnN8ZW58MHx8fHwxNjc4Mjk2MjQx&ixlib=rb-4.0.3&q=80";

async function getblurDataURL(url: string) {
  const imgData = await fetch(url);
  const arrayBufferData = await imgData.arrayBuffer();
  const lqipData = await lqip(Buffer.from(arrayBufferData));

  return lqipData.metadata.dataURIBase64;
}

getblurDataURL(imagen).then(console.log);
