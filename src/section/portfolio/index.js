const { default: PortfolioCard } = require("@/components/PortfolioCard");

const PortfolioSection = ({activeSection}) => {
    return (
      <div
        id="section1"
        className={`flex gap-10 h-screen section
           ${activeSection === "section1" ? "bg-primary-brand" : "none"} 
        duration-200`}
      >
        <PortfolioCard isActive={activeSection} />
        <PortfolioCard isActive={activeSection} />
        <PortfolioCard isActive={activeSection} />
      </div>
    );
}

export default PortfolioSection