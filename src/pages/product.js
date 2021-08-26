import React from 'react';
import { useRouter, withRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import axios from "axios";
import Image from "next/image";

import Currency from "react-currency-formatter";
import Head from "next/head";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductSkeleton from '../components/ProductSkeleton';

const ProductScreen = ({ router: { query } }) => {
    const [product, setProduct] = useState('');
    const [search, setSearch] = useState("");
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const router = useRouter(); //added to get when router is ready

    const searchProductByPriceId = async (price) => {
        const stripeProduct = await axios.post("/api/product/find", {
            price,
        });
        setProduct(stripeProduct.data)
    }
    useEffect(() => {
        if (!router.isReady) return;
        searchProductByPriceId(router.query.priceId);
    }, [router.isReady])

    const addItemToCart = () => {
        console.log("Produto adicionado ao carrinho: \n",product.title);
        // Sending the product as an action to REDUX store/ BasketSlice
        dispatch(addToBasket(product));
      };

    if (!router.isReady) {
        return (
            <div className="max-w-screen-2x1 mx-auto dark:bg-amazon_blue-content">
                <ProductSkeleton />
            </div>
        )
    }
    if (product && router.isReady) {
        return (
            <div className="bg-gray-100">
            <Head>
                <title>E-commerce</title>
                <link rel="icon" href="/images.png" />
            </Head>
            <Header search={search} setSearch={setSearch} />
            <Categories setValue={setValue} />
            <main className="max-w-screen-2x1 mx-auto dark:bg-amazon_blue-content">
            <div className="grid grid-rows-auto md:grid-cols-9 p-4">
                {/* imageSelector */}
                <div className="z-2 col-start-1 row-start-2 md:ml-0 md:row-start-1 md:col-start-1 md:h-96 md:w-3/4 grid mb-4">
                    <div className=" md:w-5/6 rounded-sm bg-gray-400 animate-pulse my-2 mx-2 mb-2">1</div>
                    <div className=" md:w-5/6 rounded-sm bg-gray-400 animate-pulse mx-2 mb-2">2</div>
                    <div className=" md:w-5/6 rounded-sm bg-gray-400 animate-pulse mx-2 mb-2">3</div>
                    <div className=" md:w-5/6 rounded-sm bg-gray-400 animate-pulse mx-2 mb-2">4</div>
                    <div className=" md:w-5/6 rounded-sm bg-gray-400 animate-pulse mx-2 mb-2">5</div>
                    <div className=" md:w-5/6 rounded-sm bg-gray-400 animate-pulse mx-2 mb-2">6</div>
                </div>
                {/* image */}
                <div className="object-contain md:object-none row-start-2 col-end-3 md:col-start-2 md:col-span-4 md:row-start-1 md:h-96 ml-9 md:ml-0 md:mr-8 mb-4">
                    {product.image ?
                     <Image
                      src={product.image} height={400} width={400} priority /> 
                     : null }
                </div>
                {/* Responsivo no celular aparece no em 1º TITULO */}
                <div className="row-start-1 col-span-2 md:row-start-1 md:col-start-6 md:col-span-3 h-6 mb-4">
                <h4 className="text-base md:text-lg font-semibold ">{product.title}</h4>
                </div>
    
                <div className="row-start-3 col-span-2 md:row-start-1 md:col-start-6 md:h-96 grid grid-cols-2 md:grid-cols-6 grid-rows-auto md:grid-rows-6 gap-5"> 
                    {/* Product Info */}
                    <div className="row-start-2 md:row-start-2 md:col-span-3 h-4 rounded-sm bg-gray-400 animate-pulse">cod.</div>
                    <div className="row-start-2 md:row-start-2 md:col-span-2 h-4 rounded-sm bg-gray-400 animate-pulse md:mb-6">icon</div>
                    <div className="row-start-3 col-span-4 md:row-start-3 md:row-end-6 md:col-start-1 md:col-end-6">
                    {product.description}
                    </div>
                    <div className="row-start-1 col-start-1 md:row-start-6">
                        <div className="font-semibold md:price_md price_sm">
                            <Currency
                                currency="BRL"
                                group=","
                                quantity={(product.price) / 100}
                            />
                        </div>
                    </div>
                    <div className="row-start-1 col-start-4 md:col-start-5 md:row-start-6">
                        <button onClick={addItemToCart} className="w-44 md:w-56 font-semibold text-7x1 button dark:text-black">Adicionar ao carrinho</button>
                    </div>
                    <div className="row-start-4 md:row-start-2 w-12 h-12 rounded-sm bg-gray-400 animate-pulse">Icone</div>
                </div>
            </div>
            </main>
            <div className="h-[50vh]" />
            <Footer />
        </div>
        )
    }
    return (
        <div className="bg-gray-100 dark:bg-amazon_blue-content">
            <Head>
                <title>E-commerce</title>
                <link rel="icon" href="/images.png" />
            </Head>
            <Header search={search} setSearch={setSearch} />
            <Categories setValue={setValue} />
            <main className="max-w-screen-2xl mx-auto">
                    <ProductSkeleton />
            </main>
            <div className="h-[50vh]" />
            <Footer />
        </div>
    )
}
export default withRouter(ProductScreen);


