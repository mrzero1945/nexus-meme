const AidropPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-400 mb-8">Nexus Meme Airdrop</h1>
        
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get Your Free Nexus Meme Tokens!</h2>
          <p className="text-gray-300 mb-4">
            To celebrate the launch of Nexus Meme on the Solana blockchain, we are giving away free tokens to our early supporters. This is your chance to be part of our community from the very beginning and get rewarded for your trust in our vision.
            <br /><br />
            <span className="text-red-400 font-bold">Disclaimer: Nexus (NXS) is purely a meme token and offers no inherent financial value or promise of returns. It is intended for entertainment purposes only.</span>
          </p>
          <p className="text-gray-300">
            The airdrop is limited to the first 10,000 participants. Don't miss out on this opportunity to get your hands on some Nexus Meme tokens!
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">How to Participate</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="walletAddress" className="block text-left text-gray-300 mb-2">Your Solana Wallet Address</label>
              <input type="text" id="walletAddress" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-green-400" placeholder="Enter your Solana (SOL) wallet address" />
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Claim Your Tokens
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AidropPage;