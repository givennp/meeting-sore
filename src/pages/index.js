import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import getClients from "@/lib/getClients";
import getLandingPageAssets from "@/lib/getHomePageAssets";
import getPortfolios from "@/lib/getPortfolios";
import ExpertiseSection from "@/section/ExpertiseSection";
import FormSection from "@/section/formSection";
import JumboTron from "@/section/JumboTron";
import PortfolioSection from "@/section/portfolio";
import { useEffect, useState } from "react";
import '../app/globals.css';


const Home = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [clients, setClients] = useState([]);
  const [landingPageAssets, setLandingPageAssets] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data on client side using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfoliosData = await getPortfolios();
        const clientsData = await getClients();
        const landingPageAssetsData = await getLandingPageAssets();

        setPortfolios(portfoliosData);
        setClients(clientsData);
        setLandingPageAssets(landingPageAssetsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Mark loading as done
      }
    };

    fetchData();
  }, []);

//   Show a loading spinner or placeholder while data is being fetched
  if (loading) {
    return 
  }

  return (
    <>
      <div className="h-fit">
        <JumboTron
          mobile={landingPageAssets?.jumbotronMobile}
          main={landingPageAssets?.jumbotron}
        />
      </div>
      {/* Marquee Section */}
      <Marquee data={clients} />
      {/* Expertise Section */}
      <ExpertiseSection
        socialMedia={landingPageAssets?.socialmediamarketing}
        branding={landingPageAssets?.branding}
        product={landingPageAssets?.product}
      />
      {/* Portfolio Section */}
      <PortfolioSection data={portfolios} />
      {/* FORM SECTION */}
      <FormSection />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
