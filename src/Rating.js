import { useState } from "react";

export const Rating = (props) => {
  const { totalStars } = props;
  const [rateSelected, setSelectedRate] = useState(0);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {[...Array(totalStars)].map((n, i) => (
          <Circle
            key={i}
            selected={i < rateSelected}
            onClick={() => setSelectedRate(i + 1)}
          />
        ))}
      </div>
      <p>{rateSelected} of 5 rate</p>
    </div>
  );
};

export const Circle = (props) => {
  const { selected = false, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        height: 30,
        width: 30,
        borderRadius: "100%",
        backgroundColor: selected ? "red" : "gray",
        margin: 2
      }}
    ></div>
  );
};
