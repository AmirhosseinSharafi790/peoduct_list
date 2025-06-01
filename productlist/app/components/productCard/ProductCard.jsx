import { DollarSign, Star } from "lucide-react";

function ProductCard({title , price , description , category , image , rating}) {
    const truncatedDescText = description.length > 65 
    ? description.slice(0, 65) + "..."
    : description;
    const truncatedTitleText = title.length > 35 
    ? title.slice(0, 35) + "..."
    : title;
    
    return(
        <div className="w-full sm:w-[48%] lg:w-[30%] xl:w-[23%] cursor-default">
            <div className='h-[650px] border-2 border-gray-400 transition-all delay-75 flex flex-col justify-center gap-y-3 hover:shadow-2xl shadow-md rounded-3xl'>
                <div className="cardHead flex justify-center !p-3">
                    <img src={image} className="size-72" />
                </div>
                <div className="data flex flex-col">
                    <p className='!px-3 !py-1.5 text-[19px]'>{truncatedTitleText}</p>
                    <div className="rate text-[12px] !flex items-center gap-x-1 !px-3 !py-1.5">
                        <Star color="#99a1aa" /> <b>{rating.rate}</b> (<b>{rating.count}</b> Comments )
                    </div>
                    <p className='!p-3 text-gray-700 text-justify text-[15px]'>{truncatedDescText}</p>
                </div>
                <div className="footer border-b-2 border-gray-200 !mx-3 flex justify-between items-center !px-3">
                    <span className="text-sm">{category}</span>
                     <div className="price text-[20px] !flex items-center gap-x-1 !px-3 !py-1.5">
                        <DollarSign color="#000" /> <b>{price}</b>
                    </div>
                </div>
                <div className="btn !p-3">
                    <button className="border-2 hover:bg-gray-400 transition-all delay-75 border-gray-400 text-gray-700 !py-3 rounded-2xl !px-2"> Add To Shopping Cart </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;