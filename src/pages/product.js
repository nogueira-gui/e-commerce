import React from 'react';
import { useRouter, withRouter } from 'next/router';
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import Currency from "react-currency-formatter";
import Head from "next/head";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductScreen = ({ router: { query } }) => {
    const [product, setProduct] = useState('');
    const [search, setSearch] = useState("");
    const [value, setValue] = useState("");

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


    if (!router.isReady) {
        return (
            <div>
                Roteador ainda não inicializado...
            </div>
        )
    }
    if (product && router.isReady) {
        return (
            <div className="bg-gray-100 dark:bg-amazon_blue-light">
                <Head>
                    <title>E-commerce</title>
                    <link rel="icon" href="/images.png" />
                </Head>
                <Header search={search} setSearch={setSearch} />
                <Categories setValue={setValue} />
                <main className="max-w-screen-2xl mx-auto">
                    <div>
                        <h4 className="my-3">{product.title}</h4>
                        <div height={500} >
                            {
                            product.image ?
                            <Image src={product.image} height={500} width={500} objectFit="contain" /> :
                            null
                            }
                        </div>
                        <div className="mb-5">
                            <Currency
                                currency="BRL"
                                group=","
                                quantity={(product.price) / 100}
                            />
                        </div>
                    </div>
                </main>
                <div className="h-[50vh]" />
                <Footer />
            </div>

        )
    }
    return (
        <div className="bg-gray-100 dark:bg-amazon_blue-light">
            <Head>
                <title>E-commerce</title>
                <link rel="icon" href="/images.png" />
            </Head>
            <Header search={search} setSearch={setSearch} />
            <Categories setValue={setValue} />
            <main className="max-w-screen-2xl mx-auto">

                <div height={500} >
                    Carregando...
                </div>
            </main>
            <div className="h-[50vh]" />
            <Footer />
        </div>
    )
}
export default withRouter(ProductScreen);


