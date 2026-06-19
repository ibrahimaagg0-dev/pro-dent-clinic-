const productsContainer = document.getElementById('productsContainer');

function loadProductsForClients() {
    // 1. »‰”Õ» «·»Ì«‰«  «··Ì ≈‰  ÷› Â« „‰ ·ÊÕ… «·≈œ«—…
    let items = JSON.parse(localStorage.getItem('proDentItems')) || [];
    
    // 2. ·Ê „›Ì‘ „‰ Ã«  „ ”Ã·…
    if (items.length === 0) {
        productsContainer.innerHTML = '<p style="text-align:center; width:100%; font-size:18px;">Ã«—Ì ≈÷«›… √ÕœÀ «·„⁄œ«  Ê«·Õ«·« ...  «»⁄Ê‰«!</p>';
        return;
    }

    productsContainer.innerHTML = ''; // »‰‰Ÿ› «·„ﬂ«‰

    // 3. »‰·› ⁄·Ï „‰ Ã „‰ Ã Ê‰⁄„·Â ﬂ«— 
    items.forEach(item => {
        let categoryName = item.category === 'equipment' ? '„⁄œ« ' : 'Õ«·… ”—Ì—Ì…';
        
        // ·Ê „›Ì‘ ’Ê—… ··„‰ Ã° »‰Õÿ ’Ê—… «› —«÷Ì… («” Œœ„‰« ’Ê—… g1.jpg «··Ì ⁄‰œﬂ)
        let imgSrc = item.image ? item.image : 'g1.jpg'; 

        let card = 
            <div class="product-card">
                <img src="${imgSrc}" class="product-image" alt="${item.title}">
                <div class="product-info">
                    <span class="category-badge">${categoryName}</span>
                    <h3 class="product-title">${item.title}</h3>
                    <p class="product-price">${item.price} Ã.„</p>
                </div>
            </div>
        ;
        // »‰—„Ì «·ﬂ«—  ÃÊ… «·’›Õ…
        productsContainer.innerHTML += card;
    });
}

// »‰‘€· «·œ«·… √Ê· „« «·⁄„Ì· Ì› Õ «·„Êﬁ⁄
loadProductsForClients();