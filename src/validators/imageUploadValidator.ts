import { z } from "zod";

z.object({});

const requiredWidth = z.coerce.number({ message: "Please enter a valid number" }).min(50, "Required");
const requiredHieght = z.coerce.number({ message: "Please enter a valid number" }).min(50, "Required");
const requiredAlt = z.string().trim().min(5, "Required");

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export const imageUploadSchema = z.object({
  src: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    ),
  width: requiredWidth,
  height: requiredHieght,
  alt: requiredAlt,
});

export type ImageUploadValues = z.infer<typeof imageUploadSchema>;
//TODO_HAMZA add validation for image url, add image type to zod schema and add to to URL create
