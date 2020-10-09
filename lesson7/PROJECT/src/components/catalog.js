const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt'];
const PRICES = [52, 53, 55, 67, 69, 94, 23, 45];

//
const catalog = {
    items: [],
    container: null,
    imgFTPurl: 'https://raw.githubusercontent.com/larikhide/static/main/img/JS1_shop',
    init() {
        this.container = document.querySelector('#catalog');
        this.items = getItems();
        this.render();
    },
    render() {
        let htmlStr = '';
        this.items.forEach((item, index) => {
            let imgURL = `${this.imgFTPurl}/featuredItem${index + 1}.jpg`;
            htmlStr += `
            <div class="hot-offer">
                <div class="hot-offer__shadow">
                    <img src="${imgURL}" alt="t-shirt">
                    <div class="hot-offer__hover">
                        <div class="hot-offer__square">
                            <button><img src="../src/assets/img/kart_white.png" alt="order">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <a href="single.html">${item.productName}</a>
                <h3>
                    $${item.productPrice}
                    <!--stars-->
                </h3>
            </div>
            `;
        });
        this.container.innerHTML = htmlStr;
    }
}

{/* <div class="hot-offer__stars">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div> class half-star
</div> */}

catalog.init();
//

function createNewItem(name, price) {
    return {
        productName: name,
        productPrice: price
    }
}

function getItems() {
    return NAMES.map((name, index) => createNewItem(NAMES[index], PRICES[index]));
}