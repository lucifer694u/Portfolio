import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: "production",
  projectId:'pcmmuzz4',
  apiVersion: "2023-10-10",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);
const builder = imageUrlBuilder(config)

export const urlFor = (source:any) =>
builder.image(source);
