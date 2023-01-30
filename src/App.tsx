import CartProduct from './components/CartProduct/CartProduct'
import { useProductList } from './reducers/listCart'
import products from './data/products';
import './App.css'

function App() {

    const [productsList, dispatch] = useProductList();

    const filteredProducts = products.filter( item => {
        return productsList.find(filter => filter.id === item.id) !== undefined;
    })

    const dataProducts = filteredProducts.map(product => {
        const selectedProduct = productsList.find(item => item.id === product.id);
        if(selectedProduct) {
            return { ...product, amount: selectedProduct.amount }
        } else {
            return { ...product, amount: 1 }
        }
    })

    const subTotal = dataProducts.reduce((acc, item) => {
        return acc + (item.price * item.amount)
    }, 0)


    return (
        <div>
            <header className='h-[72px] flex justify-center border-b-[1px]'>
                <div className='w-[90vw] max-w-[1296px] flex justify-between items-center'>
                    <img className='w-16' src="/logo.svg"/>

                    <div className='w-11 h-11 flex justify-center items-center relative'>
                        <img src="/shopping-cart.svg" alt="" />
                        <div className='w-[14.4px] h-[14.4px] flex items-center justify-center rounded-full bg-[#122E5F] text-[9.6px] text-white absolute top-[3px] right-[3px]'>
                            {dataProducts.length}
                        </div>
                    </div>
                </div>
                
            </header>

            <div className='flex flex-col w-full items-center mt-10'>

            { dataProducts.length > 0 ?
            <div className='flex justify-between max-w-[1296px] w-[90vw] gap-8'>
                <div className='w-10 h-10 flex justify-center items-center rounded-full bg-[#F2F3F5]'>
                    <img src="/angle-small-left.svg"/>
                </div>

                <div className='max-w-[820px] w-[60%] h-min p-6 flex flex-col items-center gap-6 bg-[#F2F3F5] rounded-[40px]'>
                    { dataProducts.map(item => (
                        <CartProduct data={item} amount={item.amount} action={dispatch}/>
                    )) }
                </div>

                <div className='h-min flex-1 p-6 flex flex-col items-center gap-6 bg-[#F2F3F5] rounded-[40px]'>
                    <div className='w-full flex flex-col gap-5'>
                        <div className='flex flex-col'>
                            <div className='font-medium text-[18px] text-[#3F4E6E]'>Resumo</div>
                            <div className='text-[16px] text-[#6D737D]'>{dataProducts.length} Produtos</div>
                        </div>

                        <div className="line bg-[#DADFE8]"></div>

                        <div className='flex justify-between items-center'>
                            <div className='text-[24px] text-[#3F4E6E]'>Subtotal:</div>
                            <div className='text-[32px] text-[#293652] font-medium'><span className='text-[24px]'>R$</span>{subTotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
                        </div>

                        <button className='h-10 px-6 rounded-full bg-[#122E5F] text-white text-[18px]'>
                            Pronto para pagar 
                        </button>
                    </div>
                </div>
            </div>
            :
            <div className='max-w-[1024px] w-[90vw] h-min p-6 flex flex-col items-center gap-6 bg-[#F2F3F5] rounded-[40px]'>
                Sem produtos para exibir
            </div>
            }

            

            </div>
        </div>
    )
}

export default App
