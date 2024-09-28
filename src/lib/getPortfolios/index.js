import axiosInstance from "../axiosInstance";

const getPortfolios = async () => {
  const FETCH_ALL = `query getClientsLogo {
  portfolios {
    nodes {
      portfolioFields {
        portfolioThumbnail {
          node {
            sourceUrl
          }
        }
        type
        name
      }
      slug
    }
  }
}`;

let output
  try {
    const portfolioResponse = await axiosInstance.post("/graphql", {
      query: FETCH_ALL,
    });

    const arr = portfolioResponse.data.data.portfolios.nodes;

    const portfolioDetails = arr.map((portfolio) => {
      const fields = portfolio.portfolioFields;
        
      return {
        name: fields?.name,
        type: fields?.type,
        portfolioThumbnail: fields?.portfolioThumbnail.node?.sourceUrl,
        slug: portfolio?.slug,
      };
    });


    output = portfolioDetails
  } catch (e) {
    console.log(e.message);
  }

  return output
};

export default getPortfolios;