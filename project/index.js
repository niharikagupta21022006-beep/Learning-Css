let itemsContainerElement = document.querySelector('.items-container');

items.
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