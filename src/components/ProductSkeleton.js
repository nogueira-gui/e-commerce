const ProductSkeleton = () => {

    return(
        <div className="grid grid-cols-2 grid-rows-auto md:grid-cols-9 p-5">
            {/* imageSelector */}
            <div className="z-2 col-start-1 row-start-2 md:ml-0 md:row-start-1 md:col-start-1 md:h-96 md:w-3/4 grid mb-4">
                <div className="w-1/6 md:w-5/6 rounded-sm bg-gray-400 animate-pulse my-2 mx-2 mb-2">1</div>
                <div className="w-1/6 md:w-5/6 rounded-sm bg-gray-400 animate-pulse mx-2 mb-2">2</div>
                <div className="w-1/6 md:w-5/6 rounded-sm bg-gray-400 animate-pulse mx-2 mb-2">3</div>
                <div className="w-1/6 md:w-5/6 rounded-sm bg-gray-400 animate-pulse mx-2 mb-2">4</div>
                <div className="w-1/6 md:w-5/6 rounded-sm bg-gray-400 animate-pulse mx-2 mb-2">5</div>
                <div className="w-1/6 md:w-5/6 rounded-sm bg-gray-400 animate-pulse mx-2 mb-2">6</div>
            </div>
            {/* image */}
            <div className="z-1 row-start-2 col-span-2 col-start-1 md:row-start-1 md:col-start-2 md:col-end-6 h-56 md:h-96 rounded-sm bg-gray-400 animate-pulse md:mr-8 mb-4"> Imagem</div>
            {/* Responsivo no celular aparece no em 1º TITULO */}
            <div className="row-start-1 col-span-2 md:row-start-1 md:col-start-6 md:col-span-3 h-6 rounded-sm bg-gray-400 animate-pulse mb-4">Titulo</div>

            <div className="row-start-4 md:row-start-1 md:col-end-7 md:h-96 grid grid-rows-6 gap-5"> 
                {/* Product Info */}
                <div className="md:row-start-2 md:col-span-3 h-4 rounded-sm bg-gray-400 animate-pulse">cod.</div>
                <div className="md:row-start-2 md:col-span-2 h-4 rounded-sm bg-gray-400 animate-pulse md:mb-6">icon</div>
                <div className="col-span-2 md:row-start-3 md:row-end-6 md:col-start-1 md:col-end-6 rounded-sm bg-gray-400 animate-pulse">Detalhes</div>
                <div className="row-start-1 md:row-start-6 w-32 h-12 rounded-sm bg-gray-400 animate-pulse">Preço</div>
                <div className="row-start-1 md:row-start-6 w-40 md:w-56 h-12 rounded-sm bg-gray-400 animate-pulse">Adicionar</div>
                <div className="md:row-start-6 w-16 h-12 rounded-sm bg-gray-400 animate-pulse">Icone</div>
            </div>
        </div>
    )
}
export default ProductSkeleton;