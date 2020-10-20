export default {
  viewport: {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    function() {
      if(window.innerWidth < 768){
        this.isMobile = true;
        this.isTablet = false;
        this.isDesktop = false;
       } else if(window.innerWidth < 1200 && window.innerWidth >= 768){
        this.isTablet = true;
        this.isMobile = false;
        this.isDesktop = false;
       } else if(window.innerWidth >= 1200){
        this.isDesktop = true;
        this.isMobile = false;
        this.isTablet = false;
       }
    }
  }

}