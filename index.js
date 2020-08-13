let data = [
    {
        name : "Gaming Mouse",
        price : 100000,
        id : 1,
    },
    {
        name : "Laptop Gaming",
        price : 1500000,
        id : 2,
    },
    {
        name: "Laptop Asus",
        price: 3000000,
        id: 3,
    }
];

let cart = [];

function collectdata(){
    let tampung = '';

    for (i = 0; i < data.length; i++){
        tampung += `<div class="row">
        <div class="col-lg-9 col-md-6 mb-4">
            <p>${data[i].name} - ${data[i].price}</p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
            <button type="submit" onclick="addCart(${data[i].id})">Add to cart</button>
        </div>
        </div>`;
    }

    document.getElementById('product').innerHTML = tampung;
    return tampung;

}


function addCart(id){
    let result = data.find(ambil => ambil.id === id);

    cart.push(result);

    localStorage.setItem('product', JSON.stringify(cart));
    
    let listcart = JSON.parse(localStorage.getItem('product'));


    //alert(cart.length);

    let tampunglist ='';    

    for (i = 0; i < listcart.length; i++){
        tampunglist += `<div class="row">
        <div class="col-lg-8 col-md-6 mb-4">
            <p>${listcart[i].name} - ${listcart[i].price}</p>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
            <button type="submit" onclick="removeCart(${i})">Remove from cart</button>
        </div>
        </div>`;
    }


    document.getElementById('cart').innerHTML = tampunglist;
    return tampunglist;


}

function removeCart(indexnumber){
    cart = JSON.parse(localStorage.getItem('product'));

    cart.splice(indexnumber, 1);

    localStorage.setItem('product', JSON.stringify(cart));

    let tampunglist ='';    
    
        for (i = 0; i < cart.length; i++){
            tampunglist += `<div class="row">
            <div class="col-lg-8 col-md-6 mb-4">
                <p>${cart[i].name} - ${cart[i].price}</p>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <button type="submit" onclick="removeCart(${i})">Remove from cart</button>
            </div>
            </div>`;
        }
    
    
        document.getElementById('cart').innerHTML = tampunglist;
        return tampunglist;
}

//contoh remove

