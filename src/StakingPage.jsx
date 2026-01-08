const StakingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-8">Stake Your Nexus Meme Tokens</h1>
        
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4">Earn Rewards by Staking</h2>
          <p className="text-gray-300 mb-4">
            Staking your Nexus Meme tokens helps to secure the network and in return, you earn rewards. The longer you stake, the more rewards you will receive. It's a great way to support the project and grow your holdings at the same time.
            <br /><br />
            <span className="text-red-400 font-bold">Disclaimer: Nexus (NXS) is purely a meme token and offers no inherent financial value or promise of returns. Staking rewards are not guaranteed and are subject to network conditions. It is intended for entertainment purposes only.</span>
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Stake Your Tokens</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">Your Wallet Balance:</span>
            <span className="text-green-400 font-bold">1,000,000 NEXM</span>
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-left text-gray-300 mb-2">Amount to Stake</label>
              <input type="text" id="amount" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-green-400" placeholder="Enter amount" />
            </div>
            <div className="mb-6">
              <label htmlFor="duration" className="block text-left text-gray-300 mb-2">Staking Duration</label>
              <select id="duration" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-green-400">
                <option>30 Days (5% APY)</option>
                <option>90 Days (7% APY)</option>
                <option>180 Days (10% APY)</option>
              </select>
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Stake Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StakingPage;
