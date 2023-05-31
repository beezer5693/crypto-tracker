import Link from "next/link"
import DataTableCategory from "./components/DataTableCategory"
import { ChevronLeft } from "lucide-react"

type CategoryPageProps = {
	params: {
		categoryId: string
	}
}

async function getCategoryData(categoryId: string) {
	const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/category?id=${categoryId}&limit=1000`, {
		headers: {
			"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY as string,
		},
	})

	return res.json()
}

async function getMetaData(categoryId: string) {
	const category = await getCategoryData(categoryId)
	const ids = await category.data.coins.map((coin: any) => coin.id)
	const res = await fetch(
		`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids.join(",")}&CMC_PRO_API_KEY=${
			process.env.COIN_MARKET_CAP_API_KEY
		}`
	)

	return res.json()
}

export default async function Category({ params: { categoryId } }: CategoryPageProps) {
	const [categoryData, metaData] = await Promise.all([getCategoryData(categoryId), getMetaData(categoryId)])

	const ethereumDescription = (
		<>
			<h1 className="text-3xl font-medium text-neutral-800 dark:text-neutral-100">Ethereum ecosystem coins & tokens</h1>
			<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
				Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH or Ξ) is the
				native cryptocurrency of the platform. After Bitcoin, it is the second-largest cryptocurrency by market
				capitalization. Ethereum is the most actively used blockchain.
			</p>
		</>
	)

	const bnbChainDescription = (
		<>
			<h1 className="text-3xl font-medium text-neutral-800 dark:text-neutral-100">
				BNB Chain ecosystem coins & tokens
			</h1>
			<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
				Binance Chain is a blockchain software system developed by Binance and its community. Binance DEX refers to the
				decentralized exchange features developed on top of Binance Chain. Binance Chain is a community-driven
				development project with many developers and contributors from all over the world. Binance DEX is a
				decentralized exchange with a decentralized network of nodes, where you hold your own private keys and manage
				your own wallet. With Binance DEX, Binance aims to provide a decentralized trading experience.
			</p>
		</>
	)

	const solanaDescription = (
		<>
			<h1 className="text-3xl font-medium text-neutral-800 dark:text-neutral-100">Solana ecosystem coins & tokens</h1>
			<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
				Solana is a high-performance blockchain that can enable growing decentralized applications and systems to scale
				without sacrificing security. It is designed to support 50,000 transactions per second (tps) with 400
				millisecond block times and 1GB block sizes. Solana aims to solve the problem of blockchain scalability by
				implementing a revolutionary new architecture. Solana uses a Proof of History (PoH) consensus combined with the
				underlying Proof of Stake (PoS) consensus of the blockchain. PoH is a cryptographic clock that enables to encode
				the time and passage of data into a ledger. This eliminates the needs for the nodes to communicate with each
				other in order to agree on the time and order of the events. This allows Solana to process thousands of
				transactions in parallel, instead of in a sequence like other blockchains.
			</p>
		</>
	)

	const polkadotDescription = (
		<>
			<h1 className="text-3xl font-medium text-neutral-800 dark:text-neutral-100">Polkdot ecosystem coins & tokens</h1>
			<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
				Polkadot is a blockchain protocol designed to support parachains created by different developers. It aims to
				provide interoperability, scalability, and security. It allows the transfer of any type of data or asset across
				blockchains. The protocol connects permissioned and permissionless blockchains as well as oracles to allow
				systems to work together under one roof. Polkadot was created by Gavin Wood, co-founder of Ethereum and creator
				of the Solidity programming language. The project is being developed by the Web3 Foundation, a Swiss Foundation
				founded to facilitate a fully functional and user-friendly decentralized web.
			</p>
		</>
	)

	const avalancheDescription = (
		<>
			<h1 className="text-3xl font-medium text-neutral-800 dark:text-neutral-100">Avalance ecosystem coins & tokens</h1>
			<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
				Avalanche is an open-source platform for launching decentralized finance applications and enterprise blockchain
				deployments in one interoperable, highly scalable ecosystem. Developers who build on Avalanche can easily create
				powerful, reliable, and secure applications and custom blockchain networks with complex rulesets or build on
				existing private or public subnets. Avalanche gives you complete control on both the network and application
				layers–helping you build anything you can imagine.
			</p>
		</>
	)

	const stablecoinDescription = (
		<>
			<h1 className="text-3xl font-medium text-neutral-800 dark:text-neutral-100">Stable coins</h1>
			<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
				{`Stablecoins are cryptocurrencies designed to minimize the volatility of the price of the stablecoin, relative to some "stable" asset or basket of assets. A stablecoin can be pegged to a cryptocurrency, fiat money, or to exchange-traded commodities (such as precious metals or industrial metals). Stablecoins redeemable in currency, commodities, or fiat money are said to be backed, whereas those tied to an algorithm are referred to as seigniorage-style (or, seigniorage-share) stablecoins. Stablecoins may be pegged to a currency's value by holding reserves of the underlying assets that the stablecoin represents. They may also be pegged to commodities like gold or silver. Stablecoins have gained traction as they attempt to offer the best of both worlds, the instant processing and security of payments of cryptocurrencies, and the volatility-free stable valuations of fiat currencies. Stablecoins are useful as a means of payment, as a speculative investment, and as a method of money transfer.`}
			</p>
		</>
	)

	const gamingDescription = (
		<>
			<h1 className="text-3xl font-medium text-neutral-800 dark:text-neutral-100">Gaming coins & tokens</h1>
			<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
				Gaming cryptocurrencies are digital currencies people can use to buy in-game items or pay for gaming services.
				They are similar to other cryptocurrencies in that they are decentralized and use blockchain technology and
				encryption. However, gaming cryptocurrencies are unique in that they are designed specifically for use in
				virtual worlds and online games. They are also used to buy and sell digital assets, such as in-game items, on
				the blockchain. Gaming cryptocurrencies are used to buy in-game items or pay for gaming services. They are
				similar to other cryptocurrencies in that they are decentralized and use blockchain technology and encryption.
				However, gaming cryptocurrencies are unique in that they are designed specifically for use in virtual worlds and
				online games. They are also used to buy and sell digital assets, such as in-game items, on the blockchain.
			</p>
		</>
	)

	const nftDescription = (
		<>
			<h1 className="text-3xl font-medium text-neutral-800 dark:text-neutral-100">NFTs & Collectibles</h1>
			<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
				Non-fungible tokens (NFTs) are digital assets that represent a wide range of unique tangible and intangible
				items, from collectible sports cards to virtual real estate and even digital sneakers. One of the main benefits
				of owning a digital collectible versus a physical collectible like a baseball card or rare minted coin is that
				each NFT contains distinguishing information that makes it both distinct from any other NFT and easily
				verifiable. This makes the creation and circulation of fake collectibles pointless because each item can be
				traced back to the original issuer. NFTs can also be used to represent easily reproducible items such as concert
				tickets, in-game items, and even ownership title to real-world assets. NFTs are bought and sold online,
				frequently with cryptocurrency, and they are generally encoded with the same underlying software as many
				cryptos.
			</p>
		</>
	)

	const web3Description = (
		<>
			<h1 className="text-3xl font-medium text-neutral-800 dark:text-neutral-100">Web3 coins & tokens</h1>
			<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
				Web3 is a term used to describe the third generation of Internet services. The first generation, Web 1.0, was
				the Internet as we know it today. The second generation, Web 2.0, was the rise of social media and
				user-generated content. Web3 is the next step in the evolution of the Internet. It is a decentralized,
				peer-to-peer network that is not controlled by any single entity. Web3 is a term used to describe the third
				generation of Internet services. The first generation, Web 1.0, was the Internet as we know it today. The second
				generation, Web 2.0, was the rise of social media and user-generated content. Web3 is the next step in the
				evolution of the Internet. It is a decentralized, peer-to-peer network that is not controlled by any single
				entity.
			</p>
		</>
	)

	function handleDescription(categoryName: string) {
		if (categoryName.toLowerCase().includes("ethereum")) {
			return ethereumDescription
		} else if (categoryName.toLowerCase().includes("bnb")) {
			return bnbChainDescription
		} else if (categoryName.toLowerCase().includes("solana")) {
			return solanaDescription
		} else if (categoryName.toLowerCase().includes("polkadot")) {
			return polkadotDescription
		} else if (categoryName.toLowerCase().includes("avalanche")) {
			return avalancheDescription
		} else if (categoryName.toLowerCase().includes("stablecoin")) {
			return stablecoinDescription
		} else if (categoryName.toLowerCase().includes("gaming")) {
			return gamingDescription
		} else if (categoryName.toLowerCase().includes("nft")) {
			return nftDescription
		} else if (categoryName.toLowerCase().includes("web3")) {
			return web3Description
		} else {
			return "No description available"
		}
	}

	const description = handleDescription(categoryData.data.name)

	return (
		<section className="w-full bg-transparent px-5 py-9">
			<div className="mx-auto flex w-full max-w-screen-xl flex-col gap-8 overflow-x-auto">
				<Link className="group cursor-pointer space-x-1 self-start text-xs" href={"/"}>
					<ChevronLeft className="inline-block h-3 w-3 transform align-middle text-emerald-500 transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:text-neutral-800 group-hover:dark:text-neutral-100" />
					<span className="inline-block align-middle font-medium text-emerald-500 transition-all duration-300 ease-out group-hover:text-neutral-800 group-hover:dark:text-neutral-100">
						Back to Home
					</span>
				</Link>
				<div className="space-y-2">{description}</div>
				{/* @ts-expect-error Async Server Component */}
				<DataTableCategory categoryData={categoryData} metaData={metaData} />
			</div>
		</section>
	)
}
