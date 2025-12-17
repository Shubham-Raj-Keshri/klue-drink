import logo from "../../assets/images/strawberry-water.jpg";

function HeroImage() {
  return (
    <div className="flex-1 flex justify-center">
      <img
        src={logo}
        alt="Hero Bottle"
        className="max-w-sm w-full"
      />
    </div>
  );
}

export default HeroImage;
