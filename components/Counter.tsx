import { useEffect, useState } from "react";

function Count() {
  const [visit, setVisit] = useState(null);

  useEffect(() => {
    const newCount = +localStorage.getItem("counts") + 1;
    setVisit(newCount);
    localStorage.setItem("counts", String(newCount));
  }, []);
  return <div>You are here {visit} times</div>;
}
export default Count;
