import Image from "next/image";
const ScrollInformation = () => {
  return (
    <div className="first-card">
      <h1 className="text-center lifetime ">Weekly stats</h1>
      <div>Scroll by mouse dragging</div>
      <div className="svg-container bounce text-center t">
        <Image
          width="50"
          height="50"
          layout={"fixed"}
          objectFit={"contain"}
          src={`/arrow-right.png`}
        />
      </div>
    </div>
  );
};

export default ScrollInformation;
