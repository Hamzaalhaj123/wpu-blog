import getPaginatedBlogs from "@/actions/blogs/getPaginatedBlogs";
import BlogCard from "@/components/blogs/BlogCard";
import PaginationGroup from "@/components/shared/PaginationGroup";
import parseSearchParams from "@/utils/parseSearchParams";
import { paginationValidator } from "@/validators/util/paginationValidator";
import { getTranslations } from "next-intl/server";

type PageProps = { searchParams: Record<string, string> };

export async function generateMetadata() {
  const t = await getTranslations("METADATA.homepage");
  return { title: t("title"), description: t("description") };
}

export default async function Home({ searchParams }: PageProps) {
  const data = parseSearchParams(searchParams, paginationValidator);
  const currentPage = data?.page ?? 1;
  const { data: blogs, metaData } = await getPaginatedBlogs(currentPage, 12);

  return (
    <div>
      <div className="mb-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
      <PaginationGroup currentPage={currentPage} pageCount={metaData.pageCount} />
    </div>
  );
}
