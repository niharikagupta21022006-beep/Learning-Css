let itemsContainerElement = document.querySelector('.items-container');

let item  = {
    item_image:'https://github.com/Complete-Coding/JavaScript_Complete_YouTube/blob/main/Projects/4%20Myntra%20Functional%20Clone/images/1.jpg?raw=true" alt="item-image',

    rating: {
        stars: 4.5,
        noOfReviews: 1400,
    },

    company_name: 'Carlton London',
    item_name: 'Rhodium-Plated CZ Floral Studs',
    current_price:'Rs 606',
    original_price:'Rs 1045',
    discount_percentage: 42,

}
itemsContainerElement.innerHTML = `
<div class="item-container">
    <img src="${item.item_image}">
    <div class="rating">
         ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
     </div>
     <div class="company-name">${item.company_name}</div>
     <div class="item-name">${item.item_name}</div>
     <div class="price">
        <span class="current-price">${item.current_price}</span>
        <span class="original-price">${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>

    <button class="btn-add-bag">Add to Bag</button>
                 
            
</div>`;