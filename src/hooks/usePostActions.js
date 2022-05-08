import { remove } from "lib/api/post.api";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function usePostActions() {
  const router = useRouter();
  const asPath = router.asPath.split("/");
  const path = asPath[1];
  const id = asPath[2];
  const handleRemove = useCallback(() => {
    remove({ path, id });
    router.replace(`/${path}`);
  });
  return { handleRemove };
}
