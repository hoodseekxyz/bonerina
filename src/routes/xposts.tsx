import { createFileRoute } from "@tanstack/react-router";
import { XPosts } from "@/components/xposts";

export const Route = createFileRoute("/xposts")({
  component: XPosts,
  head: () => ({
    meta: [
      { title: "X News — $BONERINA" },
      {
        name: "description",
        content: "Fifteen pictures for X. Copy the line. Download the picture. Every BONER needs a BONERINA.",
      },
    ],
  }),
});
