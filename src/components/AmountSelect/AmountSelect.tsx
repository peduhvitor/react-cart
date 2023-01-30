const AmountSelect = () => {
    return (
        <div className="w-[102px] flex justify-between items-center">
            <button className="min-w-[32px] h-6 flex items-center justify-center
                    shadow-[4px_5px_29px_rgba(18,46,95,0.1)]
                    bg-white rounded-full">
                <img src="/minus.svg" alt="" />
            </button>
            <input 
                className="w-full text-center bg-transparent text-[16px] 
                        text-[#122E5F]" 
                type="text" 
                value={1} />
            <button className="min-w-[32px] h-6 flex items-center justify-center
                    shadow-[4px_5px_29px_rgba(18,46,95,0.1)]
                    bg-white rounded-full">
                <img src="/plus.svg" alt="" />
            </button>
        </div>
    )
}

export default AmountSelect