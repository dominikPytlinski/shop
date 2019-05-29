export class Templates {

    constructor()
    {
        
    }

    setLayout(name)
    {
        switch (name) {
            case 'home':
                return `
                <div>
                    <div class="img-wrapper">
                        <img src="./assets/images/sofa.jpg" alt="product image">
                        <div class="add-to-cart">
                            <i class="fas fa-shopping-cart"></i>
                            <span>Add To Cart</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur</p> 
                    <span>$10</span>
                </div>
                `;
                break;
            
            case 'cart':
                return `
                <div class="cart-header">
                    <i class="fas fa-times" id="close-cart"></i>
                </div>
                <div class="cart-body">
                    <div class="cart-item">
                        <img src="./assets/images/sofa.jpg" alt="product picture">
                        <span class="price">$10</span>
                        <div class="cart-item-counter">
                            <span><i class="fas fa-angle-up"></i></span>
                            <span>1</span>
                            <span><i class="fas fa-angle-down"></i></span>
                        </div>
                    </div>
                </div>
                <div class="cart-footer">
                    <span>Total: </span>
                    <span>$10</span>
                </div>
                `;
                break;
            
            default:
                break;
        }
    }

}