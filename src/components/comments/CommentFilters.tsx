import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/shared/Select";
import { SelectValue } from "@radix-ui/react-select";

export default function CommentFilters() {
  return (
    <div className="mb-4 w-fit">
      <Select defaultValue="recent">
        <SelectTrigger size="small">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="recent">Recent</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
          <SelectItem value="upvoted">Most upvoted</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
