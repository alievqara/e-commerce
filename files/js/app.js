
function GetProducts() {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => {
        let item = '';
        data.forEach( product => {
        item += `
            <div class="col-lg-2 col-md-4 col-sm-6 forhover">
                <div id="${product.id}" class="card product">
                    <img class="card-img-top" src=${product.images[1]} alt="Card image cap">
                    <div class="card-body">
                        <h6 class="card-title">${product.title.length > 15 ? product.title.slice(0,10) + '...' : product.title}</h6>
                        <p class="card-text">${product.description.length > 25 ? product.description.slice(0,20) + "..." : product.description}</p>
                        <p class="card-text">${'Category: ' + product.category.name}</p>
                        <p class="card-text">${'Price: '+ product.price + ' AZN'}</p>
                        <button class="btn btn-primary add_card">Add to Cart</button>
                     </div>
                </div>
            </div>
            `
        })
        document.getElementById('list').innerHTML = item
})
.catch(error => console.log(error))
}


GetProducts();



