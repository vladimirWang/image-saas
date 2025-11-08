import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { db } from "@/server/db/db";
import { usersTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";
// import { db } from "@/server/db/db";
// import { Users } from "@/server/db/schema";
// import Image from "next/image";

export default async function Home() {
  // console.log("query: ", db.query.Users.findMany);
  // const users = await db.query.Users.findMany();
  // const users = await db.select().from(Users);

  async function main() {
    // const user: typeof usersTable.$inferInsert = {
    //   name: "John",
    //   age: 30,
    //   email: "john@example.com",
    // };

    // await db.insert(usersTable).values(user);
    // console.log("New user created!");

    const users = await db.select().from(usersTable);
    console.log("Getting all users from the database: ", users);
    /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

    // await db
    //   .update(usersTable)
    //   .set({
    //     age: 31,
    //   })
    //   .where(eq(usersTable.email, user.email));
    // console.log("User info updated!");

    // await db.delete(usersTable).where(eq(usersTable.email, user.email));
    // console.log("User deleted!");
    return users;
  }

  const users = await main();

  const users2 = await db.query.usersTable.findMany();

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="app name" />
        <Textarea name="description" placeholder="description" />
        <Button type="submit">submit</Button>
        {users.map((item: any) => JSON.stringify(item))}
        <hr />
        {users2.map((item: any) => JSON.stringify(item))}
        <div>{users2.length}</div>
      </form>
    </div>
  );
}
