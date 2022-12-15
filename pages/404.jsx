import { useRouter } from "next/router";
import { useEffect } from "react";

const Error404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  });

  return null;
};

export default Error404;
