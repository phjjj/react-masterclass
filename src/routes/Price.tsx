import { useParams } from "react-router";
import { fetchCoinHistory } from "../api";
import { useQuery } from "react-query";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

const PriceList = styled.ul``;

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <PriceList>
          <li>open:{`${data?.map((price) => price.open) as number[]}`}</li>
          <li>high:{`${data?.map((price) => price.high) as number[]}`}</li>
          <li>low:{`${data?.map((price) => price.low) as number[]}`}</li>
          <li>close:{`${data?.map((price) => price.close) as number[]}`}</li>
          <li>volume:{`${data?.map((price) => price.volume) as number[]}`}</li>
        </PriceList>
      )}
    </div>
  );
}

export default Price;
