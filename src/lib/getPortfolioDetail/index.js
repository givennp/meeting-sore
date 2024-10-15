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
        resultvaluea
        projectdescription
        service
        portfoliothumbnail{
            node{
                mediaItemUrl
            }
        }
        mediaa{
            node{
                mediaItemUrl
            }
        }
        mediab{
            node{
                mediaItemUrl
            }
        }
        mediac{
            node{
                mediaItemUrl
            }
        }
        mediad{
            node{
                mediaItemUrl
            }
        }
        mediae{
            node{
                mediaItemUrl
            }
        }
        mediaf{
            node{
                mediaItemUrl
            }
        }
        mediag{
            node{
                mediaItemUrl
            }
        }
        mediah{
            node{
                mediaItemUrl
            }
        }
        mediai{
            node{
                mediaItemUrl
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
        achievementb
        achievementc
        achievementd
        achievemente
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
        name: fields?.name || null,
        type: fields?.type || null,
        shortDesc: fields?.shortdesc || null,
        resultValueC: fields?.resultvaluec || null,
        resultValueB: fields?.resultvalueb || null,
        resultTextContent: fields?.resulttextcontent || null,
        resultKeyC: fields?.resultkeyc || null,
        resultKeyB: fields?.resultkeyb || null,
        resultKeyA: fields?.resultkeya || null,
        resultValueA: fields?.resultvaluea || null,
        service: fields?.service || null,
        projectDescription: fields?.projectdescription || null,
        portfolioThumbnail: fields?.portfoliothumbnail?.node?.sourceUrl || null,
        jumboTronMedia: fields?.jumbotronmedia?.node?.sourceUrl || null,
        jumboTronMobile: fields?.jumbotronmobile?.node?.sourceUrl || null,
        mediaA: fields?.mediaa?.node?.mediaItemUrl || null,
        mediaB: fields?.mediab?.node?.mediaItemUrl || null,
        mediaC: fields?.mediac?.node?.mediaItemUrl || null,
        mediaD: fields?.mediad?.node?.mediaItemUrl || null,
        mediaE: fields?.mediae?.node?.mediaItemUrl || null,
        mediaF: fields?.mediaf?.node?.mediaItemUrl || null,
        mediaG: fields?.mediag?.node?.mediaItemUrl || null,
        mediaH: fields?.mediah?.node?.mediaItemUrl || null,
        mediaI: fields?.mediai?.node?.mediaItemUrl || null,
        achievementA: fields?.achievementa || null,
        achievementB: fields?.achievementb || null,
        achievementC: fields?.achievementc || null,
        achievementD: fields?.achievementd || null,
        achievementE: fields?.achievemente || null,
        slug: portfolio?.slug || null,
      };
    });

    console.log(portfolioDetails);
    output = portfolioDetails;
  } catch (e) {
    console.log(e.message);
  }

  return output;
};

export default getPortfolioDetail;
