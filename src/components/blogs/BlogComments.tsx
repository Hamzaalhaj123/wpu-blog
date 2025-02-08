import { getCurrentSession } from "@/actions/auth/getCurrentSession";
import getCommentsById from "@/actions/comments/getCommentsById";
import BlogCommentsSkeleton from "@/components/blogs/BlogCommentsSkeleton";
import AddCommentForm from "@/components/comments/AddCommentForm";
import CommentNode from "@/components/comments/CommentNode";
import EmptyCommentsFallback from "@/components/comments/EmptyCommentsFallback";
import { Badge } from "@/components/shared/Badge";
import Await from "@/components/utils/Await";
import { SelectBlogModel } from "@/db/schemas/blogTable";
import buildTree from "@/utils/buildTree";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";

type BlogCommentsProps = {
  blogId: SelectBlogModel["id"];
};

export default function BlogComments({ blogId }: BlogCommentsProps) {
  return (
    <section>
      <Suspense fallback={<BlogCommentsSkeleton />}>
        <Await promise={Promise.all([getCommentsById(blogId), getCurrentSession()])}>
          {([comments, { session }]) => {
            const commentsTree = buildTree(comments, "id", "parentId");
            return commentsTree.length ? (
              <>
                <h2 className="mb-4 flex items-center gap-2 text-lg font-medium">
                  Comments <Badge>{comments.length}</Badge>
                </h2>
                {session ? <AddCommentForm blogId={blogId} authorId={session.userId} /> : null}
                <ul className="space-y-4 relative">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {commentsTree.map((comment) => (
                      <CommentNode key={comment.id} {...comment} />
                    ))}
                  </AnimatePresence>
                </ul>
              </>
            ) : (
              <EmptyCommentsFallback />
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
}
