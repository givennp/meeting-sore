import PortfolioDetails from "@/components/PortfolioDetails";
import getPortfolioDetail from "@/lib/getPortfolioDetail";
import getPortfolios from "@/lib/getPortfolios";
import "../../app/globals.css"
// 1. Fetch data on every request using getServerSideProps
export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    // Fetch the portfolio details from WordPress CMS
    const allPortfolios = await getPortfolioDetail();
    const data = allPortfolios.find((portfolio) => portfolio.slug === slug);

    // console.log(allPortfolios);

    if (!data) {
      return {
        notFound: true, // Return 404 if the portfolio doesn't exist
      };
    }

    // Get next and previous portfolios for navigation
    const portfolioType = data.type;
    const sameTypePortfolios = allPortfolios.filter(
      (portfolio) => portfolio.type === portfolioType
    );

    const currentIndex = sameTypePortfolios.findIndex(
      (portfolio) => portfolio.slug === slug
    );

    const nextPortfolio = sameTypePortfolios[currentIndex + 1] || null;
    const prevPortfolio = sameTypePortfolios[currentIndex - 1] || null;

    return {
      props: {
        data,
        nextPortfolio,
        prevPortfolio,
      },
    };
  } catch (error) {
    console.error("Error fetching portfolio data:", error.message);
    return {
      notFound: true,
    };
  }
}

// 2. Portfolio component to render the portfolio details
const Portfolio = ({ data, nextPortfolio, prevPortfolio }) => {
  if (!data) {
    return <div>Portfolio not found</div>;
  }

  return (
    <PortfolioDetails
      data={data}
      nextPortfolio={nextPortfolio}
      prevPortfolio={prevPortfolio}
    />
  );
};

export default Portfolio;
