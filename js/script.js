document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".navbar-toggler").addEventListener("blur", function(){
        var screenWidth = window.innerWidth
        if (screenWidth < 768) {
            const bsCollapse = new bootstrap.Collapse('#navbarNav', function(){
                hide: true
              })
        }
    })
})