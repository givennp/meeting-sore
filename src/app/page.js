// "use client";
import JumboTron from "../section/JumboTron";
import Marquee from "@/components/Marquee";
import PortfolioSection from "@/section/portfolio";
import ExpertiseSection from "@/section/ExpertiseSection";
import FormSection from "@/section/formSection";
import Footer from "@/components/Footer";
import axiosInstance from "@/lib/axiosInstance";
import getPortfolios from "@/lib/getPortfolios";
import getClients from "@/lib/getClients";
import getLandingPageAssets from "@/lib/getHomePageAssets";

const Home = async () => {
  // let portfolios, clients;

  const portfolios = await getPortfolios()
  // console.log(portfolios);


  const clients = await getClients()

  const landingPageAssets = await getLandingPageAssets()
  
  return (
    <>
      <div className="h-fit">
        <JumboTron
          mobile={landingPageAssets.jumbotronMobile}
          main={landingPageAssets.jumbotron}
        />
      </div>
      {/* Marquee Section */}
      <Marquee data={clients} />
      {/* Expertise Section */}
      <ExpertiseSection
        socialMedia={landingPageAssets.socialmediamarketing}
        branding={landingPageAssets.branding}
        product={landingPageAssets.product}
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
