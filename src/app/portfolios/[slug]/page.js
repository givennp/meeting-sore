import PortfolioDetails from "@/components/PortfolioDetails";
import getPortfolioDetail from "@/lib/getPortfolioDetail";
import getPortfolios from "@/lib/getPortfolios";

// 1. This function generates the static paths for dynamic routes
export async function generateStaticParams() {
  try {
    // Fetch all portfolios
    const allPortfolios = await getPortfolios();
    // const allPortfolios = response.data.data;

    // Generate static paths
    return allPortfolios.map((portfolio) => ({
      slug: portfolio.slug.toString(),
    }));
  } catch (error) {
    console.error("Error fetching portfolio paths:", error.message);
    return [];
  }
}

// 2. Your component is now asynchronous and directly fetches data
const Portfolio = async ({ params }) => {
  const { slug } = params;
  let data, nextPortfolio, prevPortfolio;

  try {
    // Fetch all portfolios
    const allPortfolios = await getPortfolioDetail();

    // Get the current portfolio by ID
    data = allPortfolios.find((portfolio) => portfolio.slug === slug);

    if (!data) {
      return <div>Portfolio not found</div>;
    }

    // Get the portfolio type from the current document
    const portfolioType = data.type;

    // Find the next and previous portfolios with the same type
    const sameTypePortfolios = allPortfolios.filter(
      (portfolio) => portfolio.type === portfolioType
    );

    const currentIndex = sameTypePortfolios.findIndex(
      (portfolio) => portfolio.slug === slug
    );

    // Find the next and previous portfolios in the same type
    nextPortfolio = sameTypePortfolios[currentIndex + 1] || null;
    prevPortfolio = sameTypePortfolios[currentIndex - 1] || null;
  } catch (error) {
    console.error("Error fetching portfolio data:", error.message);
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
