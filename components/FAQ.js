import React, { useState } from 'react';

const Item = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-gradient-br-indigo-purple-pink-gray-900 border-transparent border-solid border-2 rounded-xl ">
			<button
				type="button"
				aria-label="Open item"
				title="Open item"
				className="flex items-center justify-between w-full p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className="md:text-sm sm:text-sm  text-lg font-medium">{title}</p>
				<div className="flex items-center justify-center w-8 h-8 border rounded-full">
					<svg
						viewBox="0 0 24 24"
						className={`w-3 text-white-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
							}`}
					>
						<polyline
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeMiterlimit="10"
							points="2,7 12,17 22,7"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</button>
			{isOpen && (
				<div className="p-4 pt-0">
					<p className="text-gray-700">{children}</p>
				</div>
			)}
		</div>
	);
};

export const FAQ = () => {
	return (
		<section id="faq">
			<div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">


				<p className="font-barcade text-center text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 p-10">
					FAQ
				</p>

				<div class=" grid overflow-hidden grid-cols-12 grid-rows-3 grid-flow-row gap-8 gap-x-1 gap-y-9">
					<div class="box col-start-1 col-end-7">
						<Item title="What is AnonymousPeeps?" className="text-white">
							<a className="text-lg text-white">It is an NFT project with the possibility to earn passive income besides unique art and other incentives.</a>
						</Item>
					</div>
					<div class="box col-start-8 col-end-12">
						<Item title="How much is your purchase price?">
							<a className="text-lg text-white">To be announced.</a>
						</Item>
					</div>
					<div class="box row-start-2 col-start-1 col-end-5">
						<Item title="Where can i get NFT?">
							<a className="text-lg text-white">You will be able to purchase it here on our website</a>
						</Item>
					</div>
					<div class="box row-start-2 col-start-6 col-end-12">
						<Item title="Do the characters have a different rarity structure?">
							<a className="text-lg text-white">Yes, each character has different attributes that determines their rarity.</a>
						</Item>
					</div>
					<div class="box row-start-3 col-start-1 col-end-7">
						<Item title="Do I own the NFT after purchase?">
							<a className="text-lg text-white">Yes, you can do whatever you like with your digital asset without limitation.</a>
						</Item>
					</div>
					<div class="box row-start-3 col-start-8 col-end-12">
						<Item title="Who is the artist?">
							<a className="text-lg text-white">The artist is PRM, a well know sculptor and digital artist who has created commissioned artwork for individuals around the world.</a>
						</Item>
					</div>
				</div>

			</div>
		</section>
	);
};