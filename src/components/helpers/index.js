export default {
  viewport: {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    function() {
      if(window.innerWidth < 768){
        this.isMobile = true
       } else if(window.innerWidth < 1200 && window.innerWidth >= 768){
        this.isTablet = true
       } else if(window.innerWidth >= 1200){
        this.isDesktop = true
       }
    }
  }

}