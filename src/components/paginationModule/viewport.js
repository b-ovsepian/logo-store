const viewport = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
}
function viewportFunction() {
            if (window.innerWidth < 768) {
                viewport.isMobile = true;
      
            } else if (window.innerWidth < 1200 && window.innerWidth >= 768) {
              viewport.isTablet = true;
            } else
                if (window.innerWidth >= 1200) {
                viewport.isDesktop = true;
                }
    return viewport
    }

export default viewportFunction();
