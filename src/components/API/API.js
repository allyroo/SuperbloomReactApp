// const token = `c3eaa09b7b55897a48f42a5e3837a01da0715360367a64bd`;

// const api_key = "cecfb7c2-20d0-4cc0-a6dd-a74429f3c7af";
//     fetch(``)
// }


// export const server_calls = {
//   get: async () => {
//     const response = await fetch(
//       `https://drone-inventory-aa.herokuapp.com/api/drones`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "x-access-token": `Bearer ${token}`,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch data from server");
//     }

//     return await response.json();
//   },

//   create: async (data: any = {}) => {
//     const response = await fetch(
//       `https://drone-inventory-aa.herokuapp.com/api/drones`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-access-token": `Bearer ${token}`,
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to Create new data on server");
//     }

//     return await response.json();
//   },
//   update: async (id: string, data: any = {}) => {
//     const response = await fetch(
//       `https://drone-inventory-aa.herokuapp.com/api/drones/${id}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-access-token": `Bearer ${token}`,
//         },
//         body: JSON.stringify(data),
//       }
//     );
//   },
//   delete: async (id: string) => {
//     const response = await fetch(
//       `https://drone-inventory-aa.herokuapp.com/api/drones/${id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "x-access-token": `Bearer ${token}`,
//         },
//       }
//     );
//   },
// };