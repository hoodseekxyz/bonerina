import { createFileRoute } from "@tanstack/react-router";
import { Bonerina } from "@/components/bonerina";

export const Route = createFileRoute("/")({
  component: Bonerina,
  head: () => ({
    meta: [{ title: "$BONERINA — Every boner needs one" }],
  }),
});
