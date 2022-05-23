const scrollToID = id => {
  return () => {
    let element = document.getElementById(id);
    console.log(element);
    let yOffset = element.offsetTop;
    console.log(yOffset);
    element &&
      window.scroll({
        top: yOffset,
        behavior: 'smooth',
      });
  };
};

const navService = { scrollToID };

export default navService;
