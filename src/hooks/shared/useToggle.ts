"use client";

import { useCallback, useState } from "react";

export default function useToggle(initial: boolean = false) {
  const [toggle, setToggle] = useState(initial);
  const handleToggle = useCallback(
    () => setToggle((prev) => !prev),
    [setToggle],
  );
  return [toggle, handleToggle] as const;
}
