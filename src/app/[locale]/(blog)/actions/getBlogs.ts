import { blogs } from "@/app/[locale]/(blog)/mock/blogs";
import delay from "@/lib/delay";

export default async function getBlogs() {
  await delay(2000);

  return blogs;
}
