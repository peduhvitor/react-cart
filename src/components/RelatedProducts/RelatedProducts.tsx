import { Product } from "../../globalTypes/Product";
import { ProductAction } from "../../reducers/listCart";



const RelatedProducts = () => {
    return (
        <div className="flex items-center gap-3 w-full">
            <div className="min-w-[109px] w-[109px] h-[109px] flex items-center justify-center rounded-xl shadow-xl bg-white overflow-hidden">
                <img className="w-3/4" src={''} alt="" />
            </div>

            <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-[2px]">
                    <div className="text-[18px] text-[#3F4E6E]">Nome do Produto</div>
                    <div className="font-medium text-[18px] text-[#293652]"><span className="text-[14px]">R$</span>89,90</div>
                </div>
                <button className="flex justify-center items-center w-full h-10 rounded-full bg-[#122E5F] text-white text-[14px]">Add ao Carrinho</button>
            </div>
        </div>
    )
}


export default RelatedProducts;