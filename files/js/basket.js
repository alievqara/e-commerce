if(localStorage.getItem('card')=== null){
    localStorage.setItem('card', JSON.stringify([]))
}





let btns = document.getElementsByClassName('add_card');
setTimeout(() => {
    for(let btn of btns){
        btn.onclick = function(e){
            let basket = JSON.parse(localStorage.getItem('card'));
            let id = e.target.parentElement.parentElement.id;
            let price = e.target.previousElementSibling.innerHTML;
            let title = e.target.parentElement.children[0].innerHTML;
            let image = e.target.parentElement.previousElementSibling.src;

            let existProd = basket.find(z => z.ID === id );
            if (existProd == undefined) {
                basket.push({
                    ID: id,
                    Price: price,
                    Title: title,
                    Image: image,
                    Count: 1,
    
                })
            }else{
                existProd.Count += 1 ;
            }
            localStorage.setItem('card', JSON.stringify(basket));
        }
    }
}, 500);



function GetElementsForBasket(){
    let basket = JSON.parse(localStorage.getItem('card'))
    let item = '';
    basket.forEach(item => {
        item += `
        <div class="box mt-3">
            <div class="photo">
                <img src="${item.Image}" alt="">
            </div>
            <div class="box-info">
                <h5>Product: ${item.Title}</h5>
                <h6>${item.Price}</h6>
                <span>Count:</span>
                <input type="number" value=${item.Count} >
            </div>
        </div>
        `
        document.getElementById('products').innerHTML = item;
    })
}
GetElementsForBasket();



function ConuntCard() {
    let basket = JSON.parse(localStorage.getItem('card'));
    if (basket.length === 0) {
        document.getElementById('card').style.display = 'none';
    }else{
        document.getElementById('card').style.display = 'block';
    }
    
}
ConuntCard();