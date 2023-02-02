import React, { useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

export const WebcamCapture = () => {
  const [image, setImage] = useState("");
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(image);
    setImage(imageSrc);
  }, [webcamRef, setImage]);

  return (
    <div className="webcam-container">
      <div>
        {image == "" ? (
          <Webcam
            audio={false}
            height={200}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={220}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} />
        )}
      </div>
      <div>
        {image != "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
            className="bg-blue text-white rounded-sm  cursor-pointer mt-2"
            style={{ padding: "10px" }}
          >
            Retake Image
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="bg-blue  text-white rounded-sm text-xl cursor-pointer mt-2"
            style={{ width: "150px" }}
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
};
