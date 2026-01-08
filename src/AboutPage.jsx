const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-8">About Nexus Meme</h1>
        
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300">
            Our mission is to create a vibrant, decentralized ecosystem where meme creators and enthusiasts can connect, collaborate, and thrive. We believe in the power of memes to shape culture and communication, and we want to empower our community by providing them with the tools and platform to monetize their creativity on the Solana blockchain.
            <br /><br />
            <span className="text-red-400 font-bold">Disclaimer: Nexus (NXS) is purely a meme token and offers no inherent financial value or promise of returns. It is intended for entertainment purposes only.</span>
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-300">
            Nexus Meme was born from a simple idea: what if memes could be more than just a fleeting moment of internet humor? What if they could be a new form of digital asset, a new way for creators to be rewarded for their work? Our founders, a group of crypto enthusiasts and meme lovers, chose the Solana blockchain for its speed and low transaction costs, and came together to build a platform that would make this vision a reality. Nexus Meme is the result of that passion and dedication.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Why Nexus Meme?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><span className="font-semibold text-green-400">Community-Driven:</span> Everything we do is for the community, by the community.</li>
            <li><span className="font-semibold text-green-400">Decentralized on Solana:</span> Built on the secure, transparent, and scalable Solana blockchain.</li>
            <li><span className="font-semibold text-green-400">Creator-Focused:</span> We provide tools and a marketplace for meme creators to monetize their work.</li>
            <li><span className="font-semibold text-green-400">The Future of Memes:</span> We are at the forefront of the meme revolution.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
