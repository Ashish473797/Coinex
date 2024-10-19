import banner from "../../assets/banner.jpg";

export default function Banner() {

  return (
    <div
      className="h-[50vh] bg-cover bg-left-bottom flex items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">Crypto Tracker</h1>
        <p>Get all info regarding cryptocurrencies.</p>
      </div>
    </div>
  );
}
