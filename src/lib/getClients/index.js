import axiosInstance from "../axiosInstance";

const getClients = async () => {
  const FETCH_ALL = `query getClientsLogo {
  clients {
    nodes {
      clientsinfo {
        logo {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}`;

  let output;
  try {
    const clientsResponse = await axiosInstance.post("/graphql", {
      query: FETCH_ALL,
    });

    const arr = clientsResponse.data.data.clients.nodes;

    const clientsDetails = arr.map((clients) => {
      const logo = clients.clientsinfo.logo.node;
      return logo.sourceUrl;
      
    });

    output = clientsDetails;
  } catch (e) {
    console.log(e.message);
  }

  return output;
};

export default getClients;
