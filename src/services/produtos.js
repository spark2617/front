// import { api } from "./api";

// export const LandsAPI = {
//   getLands: async () => {
//     return await api.get("/product");
//   },

//   filterByCategory: async (categoryId) => {
//     return await api.get(`/product/search/category?idCategory=${categoryId}`);
//   },

//   filterByMetaverse: async (metaverseId) => {
//     return await api.get(`/product/search/metaverse?idMetaverse=${metaverseId}`);
//   },

//   filterByDatesAndMetaverse: async (metaverseName, initialDate, endDate) => {
//     return await api.get(
//       "/product/search",
//       {
//         params: { metaverseName, initialDate, endDate }
//       }
//     );
//   },

//   loadLandDetails: async (id) => {
//     return await api.get(`/product/${id}`);
//   },

//   registerLand: async(payload) => {
//     return await api.post('/product', payload)
//   }
// };
