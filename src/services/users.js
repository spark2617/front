// import { api } from "./api";

// export const UsersAPI = {
//   registerAdmin: async (payload) => {
//     return await api.post("/authenticate", {
//       ...payload,
//       roles: [
//         {
//           id: 1,
//         },
//       ],
//     });
//   },

//   registerClient: async (payload) => {
//     return await api.post("/collaborator", {
//       ...payload,
//       roles: [
//         {
//           id: 2,
//         },
//       ],
//     });
//   },

//   login: async (payload) => {
//     return await api.post("/login", payload);
//   },

//   fetchMe: async () => {
//     return await api.get("/collaborator");
//   },
// };
