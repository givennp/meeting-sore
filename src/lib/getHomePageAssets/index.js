

import axiosInstance from "../axiosInstance";

const getLandingPageAssets = async () => {
  const FETCH_ALL = `query getLandingpageassets {
  landingpageassets {
    nodes {
      landingpageassets {
        branding {
          node {
            sourceUrl
          }
        }
        jumbotron {
          node {
            sourceUrl
          }
        }
        jumbotronMobile {
          node {
            sourceUrl
          }
        }
        socialmediamarketing {
          node {
            sourceUrl
          }
        }
        product {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}`;

let output
  try {
    const response = await axiosInstance.post("/graphql", {
      query: FETCH_ALL,
    });

    const data = response.data.data.landingpageassets.nodes[0].landingpageassets

    const obj = {
      branding: data.branding.node.sourceUrl,
      jumbotron: data.jumbotron.node.sourceUrl,
      jumbotronMobile: data.jumbotronMobile.node.sourceUrl,
      socialmediamarketing: data.socialmediamarketing.node.sourceUrl,
      product: data.product.node.sourceUrl,
    };

    output = obj;
  } catch (e) {
    console.log(e.message);
  }

  return output
};

export default getLandingPageAssets;