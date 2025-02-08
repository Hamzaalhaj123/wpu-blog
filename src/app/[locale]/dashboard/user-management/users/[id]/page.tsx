import getUserById from "@/actions/users/getUserById";
import AvatarGroup from "@/components/shared/AvatarGroup";
import { Card, CardContent } from "@/components/shared/card";
import { notFound } from "next/navigation";

type UserPageProps = {
  params: { id: string };
};

export default async function Page({ params }: UserPageProps) {
  const user = await getUserById(+params.id);

  if (!user) notFound();

  //TODO: Display user roles

  return (
    <div className="grid size-full place-items-center">
      <Card className="w-1/4">
        <CardContent className="space-y-4">
          <AvatarGroup className="mx-auto size-16 text-3xl" image={user.avatar} name={user.name} />
          <div className="text-center">{user.name}</div>
        </CardContent>
      </Card>
    </div>
  );
}
