import { getSession } from "next-auth/client";
import Head from "next/head";
import { useState } from "react";

import NavigationRegister from "../../components/register/Navigation";
import Footer from "../../components/Footer";
import Header from "../../components/register/Header";

export default function RegisterViewer() {
    const [search, setSearch] = useState("");
    const [value, setValue] = useState("");

    return (
        <div className="bg-gray-100 bg-amazon_blue-content">
            <Head>
                <title>Backoffice</title>
                <link rel="icon" href="/logo.png" />
                <link rel="stylesheet" type="text/css" href="../styles/nprogress.css" />
            </Head>
            <Header search={search} setSearch={setSearch} />
            <NavigationRegister setValue={setValue} />
            <main className="max-w-screen-2xl mx-auto">
                {value == "register" &&
                    <ul>
                        <li className="link">Cadastrar Produto</li>
                        <li className="link">Cadastrar Estoque</li>
                        <li className="link">Lançar Preço</li>
                        <li className="link">Alterar Frete</li>
                    </ul>
                }
                {value == "search" &&
                    <ul>
                        <li className="link">Consultar Todos Produtos Detalhado</li>
                        <li className="link">Consultar um unico produto</li>
                        <li className="link">Verificar Estoque</li>
                        <li className="link">Consultar Lista de Preços</li>
                        <li className="link">Consulta com filtro</li>
                    </ul>
                }
            </main>
            <div className="h-[50vh]" />
            <Footer />
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    // const products = await fetch("https://fakestoreapi.com/products").then(
    //   (res) => res.json()
    // );
    return {
        props: {
            session,
        },
    };
}
