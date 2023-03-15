import axios from "axios";
import { useQuery } from "react-query";

const RQMobile = () => {
  const { data, isError, isLoading, error, refetch } = useQuery(
    "mobile",
    () => {
      return axios.get("http://localhost:4000/mobiles");
    },
    {
      staleTime: 50000,
      cacheTime: 5000,
      refetchInterval: 100000,
      refetchIntervalInBackground: false,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      enabled: false,
      select: (data) => {
        return data?.data
          ?.filter((mobile) => mobile.operatingSystem === "Android")
          .map((mobile) => mobile?.name);
      },
    }
  );
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <>
      <h1>RQ Mobiles</h1>
      {data?.map((mobileName) => (
        <p key={mobileName}>{mobileName}</p>
      ))}
      <button onClick={refetch}>Fetch data</button>
    </>
  );
};

export default RQMobile;
