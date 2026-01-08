const WhitepaperPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-8">Nexus Meme Whitepaper</h1>
        
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
          <p className="text-gray-300">
            Nexus Meme is a decentralized, peer-to-peer digital currency built on the Solana blockchain, that enables instant, near-zero cost payments to anyone in the world. Nexus Meme is an open source, global payment network that is fully decentralized without any central authorities. The Solana network secures the protocol and empowers individuals to control their own finances. Nexus Meme features faster transaction confirmation times and improved storage efficiency than many other cryptocurrencies. With substantial industry support, trade volume and liquidity, Nexus Meme is a proven medium of commerce.
            <br /><br />
            <span className="text-red-400 font-bold">Disclaimer: Nexus (NXS) is purely a meme token and offers no inherent financial value or promise of returns. It is intended for entertainment purposes only.</span>
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-300">
            Commerce on the Internet has come to rely almost exclusively on financial institutions serving as trusted third parties to process electronic payments. While the system works well enough for most transactions, it still suffers from the inherent weaknesses of the trust based model. By leveraging the power of the Solana blockchain, we can eliminate the need for trusted third parties and create a truly decentralized and censorship-resistant platform for meme culture.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">2. The Nexus Protocol on Solana</h2>
          <p className="text-gray-300">
            The Nexus Protocol is a revolutionary blockchain technology that combines the power of meme culture with a robust and secure decentralized network, built on Solana. It utilizes Solana's unique consensus algorithm, Proof of History (PoH), to achieve high throughput and low latency. This ensures that the Nexus Meme network can handle a high volume of transactions, making it ideal for a thriving meme economy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperPage;
