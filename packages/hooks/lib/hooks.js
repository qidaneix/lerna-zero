import { sum } from "utils";
import { useEffect, useState } from "react";

export function useSum(arr) {
  const [tsum, setTsum] = useState(0);

  useEffect(() => {
    setTsum(sum(...arr));
    console.log(sum(...arr));
  }, []);

  return tsum;
}
