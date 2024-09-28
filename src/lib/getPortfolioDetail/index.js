import axiosInstance from "../axiosInstance";

const getPortfolioDetail = async () => {
  const FETCH_ALL = `query getPortfolios {
  portfolios {
    nodes {
      portfolioFields {
        name
        type
        shortdesc
        resultvaluec
        resultvalueb
        resulttextcontent
        resultkeyc
        resultkeyb
        resultkeya
        resultValueA
        projectDescription
        portfolioThumbnail{
            node{
                sourceUrl
            }
        }
        mediaa{
            node{
                sourceUrl
            }
        }
        mediab{
            node{
                sourceUrl
            }
        }
        mediac{
            node{
                sourceUrl
            }
        }
        mediad{
            node{
                sourceUrl
            }
        }
        mediae{
            node{
                sourceUrl
            }
        }
        mediaf{
            node{
                sourceUrl
            }
        }
        mediag{
            node{
                sourceUrl
            }
        }
        mediah{
            node{
                sourceUrl
            }
        }
        mediai{
            node{
                sourceUrl
            }
        }
        jumbotronmedia{
            node{
                sourceUrl
            }
        }
        jumbotronmobile{
            node{
                sourceUrl
            }
        }
        achievementa
        achievementB
        achievementC
        achievementD
        achievementE
      }
        slug
    }
  }
}`;

  let output;
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
        shortDesc: fields?.shortdesc,
        resultValueC: fields?.resultvaluec,
        resultValueB: fields?.resultvalueb,
        resultTextContent: fields?.resulttextcontent,
        resultKeyC: fields?.resultkeyc,
        resultKeyB: fields?.resultkeyb,
        resultKeyA: fields?.resultkeya,
        resultValueA: fields?.resultValueA,
        projectDescription: fields?.projectDescription,
        portfolioThumbnail: fields?.portfolioThumbnail?.node?.sourceUrl,
        jumboTronMedia: fields?.jumbotronmedia?.node?.sourceUrl,
        jumboTronMobile: fields?.jumbotronmobile?.node?.sourceUrl,
        mediaA: fields?.mediaa?.node?.sourceUrl,
        mediaB: fields?.mediab?.node?.sourceUrl,
        mediaC: fields?.mediac?.node?.sourceUrl,
        mediaD: fields?.mediad?.node?.sourceUrl,
        mediaE: fields?.mediae?.node?.sourceUrl,
        mediaF: fields?.mediaf?.node?.sourceUrl,
        mediaG: fields?.mediag?.node?.sourceUrl,
        mediaH: fields?.mediah?.node?.sourceUrl,
        mediaI: fields?.mediai?.node?.sourceUrl,
        achievementA: fields?.achievementa,
        achievementB: fields?.achievementB,
        achievementC: fields?.achievementC,
        achievementD: fields?.achievementD,
        achievementE: fields?.achievementE,
        slug: portfolio?.slug,
      };
    });

    output = portfolioDetails;
  } catch (e) {
    console.log(e.message);
  }

  return output;
};

export default getPortfolioDetail;
