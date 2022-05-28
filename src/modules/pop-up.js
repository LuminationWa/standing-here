const popUp = (() => {
    const addFunctionability = () => {
        let title = document.getElementById('title');
        let swiperDialog = document.getElementById('swiper-dialog');
        title.addEventListener('click', function() {
            swiperDialog.showModal();
        })
    };
  
    return {
        addFunctionability,
    };
  })();
  
  export default popUp;