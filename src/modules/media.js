const media = (() => {
    const addFunctionability = () => {
      let video1 = document.getElementById("video1");
      video1.playVideo();
    };
  
    return {
      addFunctionability,
    };
  })();
  
  export default media;
  