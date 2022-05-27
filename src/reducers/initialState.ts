const initialState = () => ({
  nodes: {
    list: [
      {
        url: "https://thawing-springs-53971.herokuapp.com",
        online: false,
        name: "Node 1",
        loading: false,
        isError: false,
        block: [
          {
            attributes: {},
            id: "",
            type: "",
          },
        ],
      },
      {
        url: "https://secret-lowlands-62331.herokuapp.com",
        online: false,
        name: "Node 2",
        loading: false,
        isError: false,
        block: [
          {
            attributes: {},
            id: "",
            type: "",
          },
        ],
      },
      {
        url: "https://calm-anchorage-82141.herokuapp.com",
        online: false,
        name: "Node 3",
        loading: false,
        isError: false,
        block: [
          {
            attributes: {},
            id: "",
            type: "",
          },
        ],
      },
      {
        url: "http://localhost:3002",
        online: false,
        name: "Node 4",
        loading: false,
        isError: false,
        block: [
          {
            attributes: {},
            id: "",
            type: "",
          },
        ],
      },
    ],
  },
});
export default initialState;
