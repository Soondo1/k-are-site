// lib/sanity.image.ts
import createImageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';

const imageBuilder = createImageUrlBuilder(client);

export const urlForImage = (source: any) => {
  if (!source?.asset?._ref) {
    return undefined;
  }
  
  return imageBuilder.image(source).auto('format').fit('max');
}