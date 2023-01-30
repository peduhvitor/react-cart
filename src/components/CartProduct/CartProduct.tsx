import AmountSelect from "../AmountSelect/AmountSelect";

const CartProduct = () => {
    return (
        <div className="w-full flex gap-8">
            <img className="w-20 h-20 rounded-xl shadow-xl" src="" alt="" />
            <div className="flex justify-between items-center flex-1">
                <div>
                    <div className="text-[18px] text-[#3F4E6E]">Nome do Produto</div>
                    <div className="text-[18px] text-[#293652] font-medium"><span className="text-[14px]">R$</span>89,90</div>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <div className="text-[14px] text-[#6D737D]">Quantidade</div>
                    <AmountSelect/>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;