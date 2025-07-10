import PortfolioPhoto from "./PortfolioPhoto";

export default function Portfolio() {
  return (
    <>
      <div id="portfolio" className="bg-gray-200">
        <div className="container mx-auto flex flex-col gap-15 justify-center items-center py-20 px-5">
          <div>
            <p className="text-5xl font-extrabold">Portfolio</p>
          </div>
          <PortfolioPhoto name="portfolio">
            Online fashion store - Homepage
          </PortfolioPhoto>
          <PortfolioPhoto name="reebok">Reebok Store - Concept</PortfolioPhoto>
          <PortfolioPhoto name="braun">
            Braun Landing Page - Concept
          </PortfolioPhoto>
        </div>
      </div>
    </>
  );
}
