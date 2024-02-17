import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div className="border border-gray-400 border-2" key={index}>
        <Skeleton width={192} height={288} />
      </div>
    ));
};

export default CardSkeleton;
