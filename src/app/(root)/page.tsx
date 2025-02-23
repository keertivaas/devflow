import { Button } from "@/components/ui/button";

import { auth, signOut } from "../../../auth";
import ROUTES from "../../../constants/routes";

export default async function Home() {
  console.log("Server comp");
  const session = await auth();
  console.log(session);
  return (
    <>
      <h3 className="font-spaceGrotesk">Hello NextJS</h3>
      <h3 className="font-inter">Hello NextJS V2</h3>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
}
