import React from "react";
import Lottie from "lottie-react";
// import resto from "Assets/Lotties/restaurant.json";

function AddLottie({ LottieFile }) {
  return (
    <div id="lottie">
      <Lottie animationData={LottieFile} loop={true} />
    </div>
  );
}

export default AddLottie;
