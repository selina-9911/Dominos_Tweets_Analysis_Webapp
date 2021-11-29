import React, { useState, useEffect } from "react";

const UserNLP = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [step1Completed, setStep1Completed] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [step2Completed, setStep2Completed] = useState(null);
  const [userScore, setUserScore] = useState(null);

  // useEffect(
  //     () => {
  //     fetch('/dominoScore').then(
  //       res => res.json()
  //     ).then(
  //       data => {
  //         console.log('set score state; ',data)
  //       });
  //   },[]);

  const handleSubmitFile = (e) => {
    e.preventDefault();
    console.log(selectedFile);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setSelectedFile(e.target.result);
    };
  };

  const handleCompleteStep1 = (e) => {
    e.preventDefault();
    setStep1Completed(true);
  };

  //functions for step2
  function getMeta(url) {
    const img = new Image();
    img.addEventListener("load", function () {
      alert(
        "the image size of the first image attribute is " +
          this.naturalWidth +
          " X " +
          this.naturalHeight
      );
    });
    img.src = url;
  }

  function memorySizeOf(obj) {
    var bytes = 0;
    function sizeOf(obj) {
      if (obj !== null && obj !== undefined) {
        // eslint-disable-next-line default-case
        switch (typeof obj) {
          case "number":
            bytes += 8;
            break;
          case "string":
            bytes += obj.length * 2;
            break;
          case "boolean":
            bytes += 4;
            break;
          case "object":
            var objClass = Object.prototype.toString.call(obj).slice(8, -1);
            if (objClass === "Object" || objClass === "Array") {
              for (var key in obj) {
                if (!obj.hasOwnProperty(key)) continue;
                sizeOf(obj[key]);
              }
            } else bytes += obj.toString().length * 2;
            break;
        }
      }
      return bytes;
    }

    function formatByteSize(bytes) {
      if (bytes < 1024) return bytes + " bytes";
      else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KiB";
      else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MiB";
      else return (bytes / 1073741824).toFixed(3) + " GiB";
    }

    return formatByteSize(sizeOf(obj));
  }

  const handleReadMetaData = (e) => {
    e.preventDefault();
    console.log(selectedFile);
    const JSONfile = JSON.parse(selectedFile);
    const firstline = JSONfile.Countries[0];
    //extracting attributes
    const attributes = Object.keys(firstline);
    const filesize = memorySizeOf(selectedFile);

    //setting output hashmap
    const output = new Map();
    output.set(
      "firstFiveLines",
      JSON.stringify(JSONfile.Countries.slice(0, 5))
    );
    output.set("numOfAttributes", attributes.length);
    output.set("numOfRows", JSONfile.Countries.length);
    output.set("filesize", filesize);
    setMetadata(output);

    console.log(metadata);
    setStep2Completed(true);
  };

  //functions for step 3
  const handleGetScore = (e) => {
    e.preventDefault();
    fetch('/getUserScore',{
        method: 'POST',
        body: selectedFile
      }).then(
        res => res.json()
      ).then(
        data => {
          console.log('User Score: ', data)
          setUserScore(data)
        });
  };
  return (
    <div>
      <header class="masthead bg-primary text-white text-center">
        <section class="page-section portfolio" id="portfolio">
          <div class="container">
            <div>
              <h2 class="page-section-heading text-center text-uppercase mb-0">
                Check Sentiment with Your Own Data
              </h2>
            </div>

            <div class="divider-custom page-section">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <h3>Step 1 : Upload Your Data</h3>
              </div>
              <div class="divider-custom-line"></div>
            </div>
            <div class="text-center mt-4 center-block">
              <input
                type="file"
                class="justify-content-center"
                onChange={handleSubmitFile}
              />
              <button onClick={handleCompleteStep1} class="btn btn-secondary ">
                {" "}
                <i class="fas fa-upload me-2"></i>Upload
              </button>
            </div>
            {step1Completed && (
              <div class="text-center mt-4 center-block">
                <i
                  class="fas fa-check-circle fa-2x"
                  style={{ color: "#A52A2A" }}
                ></i>{" "}
                <p style={{ color: "#A52A2A" }}>Completed</p>
              </div>
            )}


            <div class="divider-custom page-section">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <h3>Step 2 : Feature Extraction</h3>
              </div>
              <div class="divider-custom-line"></div>
            </div>
            <div class="divider-custom text-center mt-4 center-block">
              <button
                onClick={handleReadMetaData}
                type="button"
                class="btn btn-secondary"
              >
                <i class="fas fa-database me-2"></i> Conduct Feature Extraction
              </button>
            </div>
            <div class="divider-custom">
              <p>
                Number of Attributes :{" "}
                {step2Completed && metadata.get("numOfAttributes")}
              </p>
            </div>
            <div class="divider-custom">
              <p>
                Number of Rows : {step2Completed && metadata.get("numOfRows")}
              </p>
            </div>
            <div class="divider-custom">
              <p> File Size : {step2Completed && metadata.get("filesize")}</p>
            </div>
            <div class="divider-custom">
              {/* <p> First Image Size : Will be shown inn the popup message! </p>{step2Completed && getMeta('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png')} */}
            </div>
            <p> Data Preview :</p>
            <div class="divider-custom">
              {step2Completed && metadata.get("firstFiveLines")}
            </div>
            {step2Completed && (
              <div class="text-center mt-4 center-block">
                <i
                  class="fas fa-check-circle fa-2x"
                  style={{ color: "#A52A2A" }}
                ></i>{" "}
                <p style={{ color: "#A52A2A" }}>Completed</p>
              </div>
            )}


            <div class="divider-custom page-section">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <h3>Step 3 : Get sentiment from your Twitter Data! </h3>
              </div>
              <div class="divider-custom-line"></div>
            </div>
            <div class="divider-custom row justify-content-center">
              <div class="divider-custom text-center mt-4 center-block">
                <button
                  onClick={handleGetScore}
                  type="button"
                  class="btn btn-secondary"
                >
                  <i class="fas fa-rocket me-2"></i> Get Result
                </button>
              </div>
            </div>
            <div class="divider-custom">
              <p>
                Sentiment from your Tweets : { typeof userScore !== 'undefined' &&  <h1>{userScore}/5</h1>}
              </p>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default UserNLP;
