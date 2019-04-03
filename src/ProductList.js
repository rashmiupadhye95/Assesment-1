import React, { Component } from 'react';
import ProductDetails from './ProductDetails';

export default class ProductList extends Component{
    constructor(){
        super();
        this.state = {
            items:[
                {
                    "itemId":1, "name":"Ride-On Car",
                    "description": "Adventure awaits your children with this ride-on truck!",
                    "imageUrl":"https://i5.walmartimages.com/asr/164e191b-699f-47a8-94bf-ff5ba84196b8_1.ae5d714d508b8df2c8d041fc43280e0c.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
                    "customerRating":3.5
                },
                {
                    "itemId":2, "name":"Disney/Pixar Car",
                    "description": "Disney/Pixar Cars fans get big action with this 20&quot",
                    "imageUrl":"https://i5.walmartimages.com/asr/b2d1cedd-d595-492d-af13-f86c2e74717d_1.d57221fd05fb835f8d350d4ee95576a8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
                    "customerRating":4
                },
                {
                    "itemId":3, "name":"Hot Wheels Car",
                    "description": "Help expand your little ones toy collection with the Hot Wheels 9-Pack Cars set.",
                    "imageUrl": "https://i5.walmartimages.com/asr/85384b98-5da2-48a8-9147-a3f59cb4a94d_1.7b8b27224a37320e92ea70dca2ee15ce.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
                    "customerRating":5
                }]
        }
    }
    render(){

        let listOfProducts = '';
        if(this.props.search === ''){
                listOfProducts = this.state.items.map((product,index) => {
                return <ProductDetails addCart={this.props.count} removeCart={this.props.removcount} key={index} details={product}/>
            })
        }
        else{
            let filterProducts = this.state.items.filter((product, index) => {
                return product.name.includes(this.props.search)
            });
            listOfProducts = filterProducts.map((product,index) => {
                return <ProductDetails key={index} details={product}/>
            })
        }
        return (
                <div className="row mt-2">
                    {listOfProducts}
                </div>
        )
    }
}