import React from "react";
import { useParams } from "react-router-dom";

type MatchParam = {
  touristRouteId: string;
  other: string;
};
export const DetailPage: React.FC = () => {
  let params = useParams<MatchParam>();
  return <h1>Detail: {params.touristRouteId}</h1>;
};
