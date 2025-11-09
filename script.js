document.addEventListener('DOMContentLoaded', function() {
    const applyButtons = document.querySelectorAll('.apply-btn');
    const products = document.querySelectorAll('.product');
    
    applyButtons.forEach(button => {
        const productId = button.getAttribute('data-product');
        if (productLinks[productId]) {
            button.href = productLinks[productId];
        }
        
        button.addEventListener('click', function(e) {
            const productId = this.getAttribute('data-product');
            localStorage.setItem('lastClicked', productId);
        });
    });
    
    if (document.referrer.includes('pxl.leads.su')) {
        const lastClicked = localStorage.getItem('lastClicked');
        if (lastClicked) {
            localStorage.removeItem('lastClicked');
            if (performance && performance.navigation.type !== 1) {
                window.location.reload(true);
            }
        }
    }
    
    products.forEach(product => {
        product.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.15)';
        });
        
        product.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}); 