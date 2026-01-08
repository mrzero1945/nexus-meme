import maskot from './maskot.png';

const Landpage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-white">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-green-400 mb-2">Welcome to Nexus Meme</h1>
        <p className="text-xl text-gray-300">The Convergence of Culture, Community, and Cryptocurrency on the Solana Blockchain.</p>
      </header>
      <main className="flex flex-col md:flex-row items-center">
        <img src={maskot} alt="Nexus Meme Mascot" className="w-64 h-64 mb-6 md:mb-0 md:mr-8 rounded-full shadow-lg shadow-green-400/50" />
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-semibold text-white mb-4">Join the Meme Revolution</h2>
          <p className="text-gray-400 mb-6">
            Nexus Meme isn't just another coin; it's the central hub for meme culture in the crypto universe, built on the blazingly fast and low-cost Solana blockchain. We are a community-driven project aiming to create a decentralized ecosystem for meme creation, sharing, and monetization.
            <br /><br />
            <span className="text-red-400 font-bold">Disclaimer: Nexus (NXS) is purely a meme token and offers no inherent financial value or promise of returns. It is intended for entertainment purposes only.</span>
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Explore the Nexus
          </button>
        </div>
      </main>
    </div>
  );
}

export default Landpage;