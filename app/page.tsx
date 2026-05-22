"use client";

import { useState } from "react";
import { ethers } from "ethers";
import WalletCard from "../components/WalletCard";

export default function Page() {
  const [address, setAddress] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchWallet = async () => {
    try {
      setLoading(true);

      if (!ethers.isAddress(address)) {
        alert("Invalid address");
        return;
      }

      const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");

      const balance = await provider.getBalance(address);

      setData({
        address,
        eth: ethers.formatEther(balance)
      });
    } catch (e) {
      alert("Error fetching wallet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Base Wallet Card</h1>

      <input
        className="p-2 text-black rounded w-80"
        placeholder="Paste wallet address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        onClick={fetchWallet}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        {loading ? "Loading..." : "Generate"}
      </button>

      {data && <WalletCard data={data} />}
    </main>
  );
}
