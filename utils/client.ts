import { createClient } from "next-sanity";

const projectId = process.env.projectId!;
const dataset = process.env.dataset!;
const apiVersion = process.env.apiVersion;

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});
