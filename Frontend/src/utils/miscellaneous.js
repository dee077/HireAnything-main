export const getRatingColorClass = (rating) => {
    if (rating >= 4.5) {
      return 'bg-green-600';
    } else if (rating >= 4.0) {
      return 'bg-yellow-500';
    } else if (!rating) {
      return 'bg-yellow-500';
    } else {
      return 'bg-red-500';
    }
}

// export const normalizeItemData = (data) => {
//   if (data?.card?.info) {
//     return data?.card?.info;
//   }
//   return data;
// };