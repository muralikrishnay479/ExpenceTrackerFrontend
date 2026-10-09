export const TotalAmount = ({total}) => {
    return (
        <div className="bg-slate-100 pr-15 pl-4 py-5 rounded-2xl gap-2 flex flex-col border border-slate-200">
            <div>
                <h1 className=" flex justify-center font-medium">Available Balance </h1>
            </div>
            <div className="font-bold text-3xl text-slate-600 flex justify-center">
                <span>$</span>
                <span>{total}</span>
            </div>
        </div>
    )
}
