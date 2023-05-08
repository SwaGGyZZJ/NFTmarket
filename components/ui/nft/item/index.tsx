import { FunctionComponent } from "react";
import { NftMeta, Nft } from "../../../../types/nft";

type NftItemProps = {
  item: Nft;
  buyNft: (token: number, value: number) => Promise<void>;
}

function shortifyAddress(address: string) {
  return `0x****${address.slice(-4)}`
}

const NftItem: FunctionComponent<NftItemProps> = ({item, buyNft}) => {
  return (
    <>
      <div className="flex-shrink-0">
        <img
          className={`h-full w-full object-cover`}
          src={item.meta.image}
          alt="New NFT"
        />
      </div>
      <div className="flex-1 bg-gray-100 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center mt-2">
              <div>
                <img
                  className="inline-block h-12 w-12 square-full"
                  src="/images/default_avatar.png"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-xl font-medium text-purple-700 group-hover:text-purple-900">Uploader : {shortifyAddress(item.creator)}</p>
              </div>
            </div>
          </div>
          <div className="block mt-2">
            <p className="text-2xl font-semibold text-gray-900">Name : {item.meta.name}</p>
            <p className="mt-3 mb-3 text-2xl font-semibold text-gray-900">Description : {item.meta.description}</p>
          </div>
        </div>
        <div className="overflow-hidden mb-4">
          <dl className="-mx-4 -mt-4 flex flex-wrap">
            <div className="flex flex-col px-4 pt-4">
              <dt className="order-2 text-2xl font-medium text-yellow-500">Price   :      {item.price} ETH</dt>
            </div>
          </dl> 

          <div className="trash">
            < img className="normal" src="/images/trash_normal.png" alt="Trash" />
            < img className="hover" src="/images/trash_hover.png" alt="Trash" />
            < img className="active" src="/images/trash_active.png" alt="Trash" />
          </div> 
        </div>
        <div>
          <button
            onClick={() => {
              buyNft(item.tokenId, item.price);
            }}
            type="button"
            className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed mr-2 inline-flex items-center px-40 py-3 border border-transparent text-2xl font-medium rounded-md shadow-xl text-white bg-green-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            get it
          </button>
        </div>
      </div>
    </>
  )
}

export default NftItem;
