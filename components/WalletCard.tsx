"use client";

import { useRef } from "react";
import * as htmlToImage from "html-to-image";

export default function WalletCard({ data }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const download = async () => {
    if (!ref.current) return;

    const img = await htmlToImage.toPng(ref.current);

    const link = document.createElement("a");
    link.download = "wallet-card.png";
    link.href = img;
    link.click();
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-3">
      <div
        ref={ref}
        className="w-[320px] p-5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md"
      >
        <h2 className="text-lg font-bold mb-2">Wallet Profile</h2>

        <p className="text-xs break-all opacity-80">
          {data.address}
        </p>

        <p className="mt-3 text-sm">
          ETH: <b>{parseFloat(data.eth).toFixed(5)}</b>
        </p>

        <p className="text-xs opacity-60 mt-2">
          Network: Base
        </p>
      </div>

      <button
        onClick={download}
        className="bg-green-600 px-4 py-2 rounded"
      >
        Download Card
      </button>
    </div>
  );
}
