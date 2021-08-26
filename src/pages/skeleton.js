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

    return (
        <div className="bg-gray-100 dark:bg-amazon_blue-content">
            <Head>
                <title>Skeleton Test</title>
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


