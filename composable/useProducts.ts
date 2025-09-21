export const useProducts = () => {
  const { data, pending, error } = useFetch("/api/product", {
    transform: (res) => res.data, 
  });

  return {
    products: data, 
    pending,
    error,
  };
}
