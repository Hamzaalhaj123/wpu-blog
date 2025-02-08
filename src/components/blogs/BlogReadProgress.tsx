import { Progress } from "@/components/shared/Progress";

type BlogReadProgressProps = {
  percentage: number
}

export default function BlogReadProgress({percentage}: BlogReadProgressProps) {
  return <Progress value={percentage} className="rounded-none" progressClassName="transition-none" orientation="vertical" />;
}
