import { useEffect } from "react";
import PlatformsComp from "../../components/pages/platforms/Platforms";
import useGet from "../../hooks/useGet";

const Platforms = () => {
  const { data, get } = useGet("platforms");
  useEffect(() => {
    get();
  }, []);
  return (
    <div className="flex flex-col gap-y-11 w-full">
      <p className="font-bold text-4xl mb-2 uppercase">Platforms</p>
      <PlatformsComp data={data.feedback} />
    </div>
  );
};

export default Platforms;
