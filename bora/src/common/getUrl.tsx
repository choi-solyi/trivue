import { useLocation } from "react-router";

const useGetUrlSearchParams = (param) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  return params.get(param);
};

export default useGetUrlSearchParams;
