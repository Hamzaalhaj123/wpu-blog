import { blogs } from "@/mock/blogs";
import delay from "@/utils/delay";

export default async function getBlogs() {
  await delay(2000);
  return blogs;
}
