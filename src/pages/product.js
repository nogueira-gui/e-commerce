import React from 'react';
import { useRouter,withRouter } from 'next/router';
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ProductScreen = ({ router: { query } }) => {
    const [product, setProduct] = useState('');
    const router = useRouter(); //added to get when router is ready
    const searchProductByPriceId = async (price) => {
        const stripeProduct = await axios.post("/api/product/find", {
            price,
        });
        setProduct(stripeProduct.data)
    }
    useEffect(() => {
        debugger
        if(!router.isReady) return;
        console.log(router.query.priceId)
        searchProductByPriceId(router.query.priceId);
    }, [router.isReady])


    if (!router.isReady) {
        return (
            <div>
                Roteador ainda não inicializado...
            </div>
        )
    }
    if(product && router.isReady){
        return (
            <div>
                <h4 className="my-3">{product.title}</h4>
                <Image src={product.image} height={500} width={500} objectFit="contain" />
            </div>
        )
    }
    return(
        <div>
            Carregando...
        </div>
    )
}
export default withRouter(ProductScreen);


