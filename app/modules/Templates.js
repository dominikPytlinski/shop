export class Templates {

    constructor()
    {
        
    }

    setLayout(name)
    {
        if(name == 'home') {
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
        }
    }

}