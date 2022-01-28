import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
  
const Container = styled.div`
  font-size: 14px;
`;

const InfoContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoinInfo = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding: 10px;
  }
`;

interface PriceProps {
  coinId: string;
}

const Price = ({ coinId }: PriceProps) => {
  const { isLoading, data } = useQuery<PriceData>(["price", coinId], () =>
    fetchCoinTickers(coinId)
  );
  const coinPrice = data?.quotes.USD;
  
  return (
    <Container>
      {isLoading ? (
        "Loading..."
      ) : (
        <InfoContainer>
          <CoinInfo>
            ATH-PRICE
            <p> $ {coinPrice?.ath_price.toFixed(3)}</p>
          
            PERCENTAGE(24H)
            <p>{coinPrice?.percent_change_24h}%</p>
          
            VOLUME(24H)
            <p>{coinPrice?.volume_24h}</p>
          </CoinInfo>
        </InfoContainer>
      )}
    </Container>
  );
};

export default Price;
