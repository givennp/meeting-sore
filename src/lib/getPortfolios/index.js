import axiosInstance from "../axiosInstance";

const getPortfolios = async () => {
  const FETCH_ALL = `query getPortfolios {
  portfolios {
    nodes {
      portfolioFields {
        portfoliothumbnail {
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
        portfolioThumbnail: fields?.portfoliothumbnail?.node?.sourceUrl,
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