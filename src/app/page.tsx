import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
// import { db } from "@/server/db/db";
// import { Users } from "@/server/db/schema";
// import Image from "next/image";

export default async function Home() {
  // console.log("query: ", db.query.Users.findMany);
  // const users = await db.query.Users.findMany();
  // const users = await db.select().from(Users);

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="app name" />
        <Textarea name="description" placeholder="description" />
        <Button type="submit">submit</Button>
        {/* {users.map((item: any) => JSON.stringify(item))} */}
      </form>
    </div>
  );
}
