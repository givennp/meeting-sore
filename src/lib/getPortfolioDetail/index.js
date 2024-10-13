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
        mediaA: fields?.mediaa?.node?.sourceUrl || null,
        mediaB: fields?.mediab?.node?.sourceUrl || null,
        mediaC: fields?.mediac?.node?.sourceUrl || null,
        mediaD: fields?.mediad?.node?.sourceUrl || null,
        mediaE: fields?.mediae?.node?.sourceUrl || null,
        mediaF: fields?.mediaf?.node?.sourceUrl || null,
        mediaG: fields?.mediag?.node?.sourceUrl || null,
        mediaH: fields?.mediah?.node?.sourceUrl || null,
        mediaI: fields?.mediai?.node?.sourceUrl || null,
        achievementA: fields?.achievementa || null,
        achievementB: fields?.achievementb || null,
        achievementC: fields?.achievementc || null,
        achievementD: fields?.achievementd || null,
        achievementE: fields?.achievemente || null,
        slug: portfolio?.slug || null,
      };
    });

    output = portfolioDetails;
  } catch (e) {
    console.log(e.message);
  }

  return output;
};

export default getPortfolioDetail;
