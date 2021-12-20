$(function() {
    function castomTabs(checks='', tabs='') {
        if(document.querySelector(checks) && document.querySelector(tabs)) {
            checks = Array.from(document.querySelectorAll(checks + ' > *'));
            tabs = Array.from(document.querySelectorAll(tabs + ' > *'));

            checks.map((check, checkIndex) => {

                check.addEventListener('click', (event) => {
                    let activeCheck = event.currentTarget;

                    checks.map(item => item.classList.remove('active'));
                    tabs.map(item => $(item).fadeOut(0));
                    activeCheck.classList.add('active');
                    $(tabs[checkIndex]).fadeIn();
                });
            });

            
        }
    }

    castomTabs('.tab_product_checkers', '.tab_product_views');
});