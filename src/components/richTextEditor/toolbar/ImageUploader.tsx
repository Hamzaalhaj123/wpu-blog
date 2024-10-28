import Button from "@/components/shared/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shared/Form";
import { Input } from "@/components/shared/Input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shared/Popover";
import insertImage from "@/lib/textEditor/insertImages";
import { imageUploadSchema, ImageUploadValues } from "@/validators/imageUploadValidator";
import { zodResolver } from "@hookform/resolvers/zod";

import { ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
// import Image from "next/image";
import { useSlate } from "slate-react";

export default function ImageUploader() {
  const form = useForm<ImageUploadValues>({
    resolver: zodResolver(imageUploadSchema),

    defaultValues: { alt: "Write something informative", src: "", width: 200, height: 200 },
  });
  const editor = useSlate();

  function onSubmit(values: ImageUploadValues) {
    console.log(values);
    insertImage(editor, URL.createObjectURL(values.src[0]), values.alt, values.width, values.height);
  }

  return (
    <Popover>
      <PopoverTrigger>
        <ImageIcon />
      </PopoverTrigger>
      <PopoverContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="src"
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input type="file" {...field} onChange={(e) => onChange(e.target.files)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="alt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>alt</FormLabel>

                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="width"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image width</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>height</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
