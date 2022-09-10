const useToken = () => {
  const refresh = localStorage.getItem("refresh_token");
  return { refresh };
};

export default useToken;
