import React from "react";

const HeaderSection = () => {
	return (
		<>
			<div className="header-section grid m-auto pb-3 px-5 w-full mt-4  md:grid-cols-2 md:px-16 md:mt-0  xl:px-32">
				<div className="header-text xl:pt-32  md:pt-16 ">
					<div className="text-line flex flex-row items-center m-auto pb-4 gap-2">
						<p className="text-[12px] text-[#3F8EFC] font-bold ">
							We are the Best
						</p>
						<div className="line bg-[#3F8EFC] w-20 h-[0.12rem]"></div>
					</div>
					<h2 className="text-[28px] font-extrabold leading-16 tracking-[0.15rem] pb-4 md:text-[24px] lg:text-[30px]">
						Get the best riding <br></br> experience with{" "}
						<span className="text-[#3F8EFC]">InDrive</span>.
					</h2>
					<p className="text-[13px] text-[#90A3B4]">
						Experience the ride of a lifetime with InDrive! Our top-notch fleet
						and friendly drivers will ensure your journey is not just
						comfortable but also unforgettable. At InDrive, we strive to exceed
						your expectations and make every ride a delight. Sit back, relax,
						and let us take the wheel. <br></br>We're the cream of the crop in
						rides!
					</p>
					<div className="button justify-center items-center pt-8">
						<a
							href="./home.html"
							className="bg-[#2667FF;] text-[16px] py-4 px-16 rounded-md text-white"
						>
							Download
						</a>
					</div>
				</div>

				<div className="header-image">
					<img
						src="/images/HeroImage.png"
						alt="Description"
						className="max-w-full h-[auto]"
					/>
				</div>
			</div>

			<div className="header-section grid m-auto pb-3 px-5 w-full mt-4 md:grid-cols-2 md:px-16 md:mt-0  xl:px-32">
				<div className="header-text  xl:pt-32  md:pt-16 ">
					<h2 className="text-[28px] font-extrabold leading-16 tracking-[0.15rem] pb-4 md:text-[24px] lg:text-[30px]">
						Effortless Rides and Payments with{" "}
						<span className="text-[#3F8EFC]">InDrive</span>.
					</h2>
					<p className="text-[13px] text-[#90A3B4]">
						At InDrive, finding a driver and making payments is quick and easy.
						Our user-friendly app lets you book a ride with a few taps, matching
						you with a nearby driver in seconds.
						<br></br>
						<br></br>
						Payments are seamless too, with secure options like credit/debit
						cards, digital wallets, and in-app payments. With InDrive,
						convenience and reliability are just a tap away.
					</p>
					<div className="button-side flex flex-row gap-2">
						<div className="button justify-center items-center pt-8">
							<a
								href="./home.html"
								className="bg-[#2667FF;] text-[16px] py-4 px-8 rounded-md text-white"
							>
								Download
							</a>
						</div>
						<div className="button justify-center items-center pt-8">
							<a
								href="./home.html"
								className="border-2 border-[#2667FF;] rounded-lg text-[16px] py-4 px-8 text-[#2667FF;]"
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>

				<div className="header-image ">
					<img
						src="/images/image-2.png"
						alt="Description"
						className="max-w-full h-[auto]"
					/>
				</div>
			</div>

			<div className="header-section grid m-auto pb-3 px-5 w-full mt-4 md:grid-cols-2 md:px-8 md:mt-0 md:gap-4 xl:px-32  ">
				<div className="header-text order-2 ">
					<p className="text-[13px] text-[#90A3B4]">
						InDrive makes finding a driver and paying effortless. Our app
						quickly matches you with a nearby driver and offers secure payment
						options, all with just a few taps. Enjoy a smooth, hassle-free
						experience.
					</p>
					<div className="cards pt-6 flex flex-col gap-4">
						<div className="card flex gap-4 bg-white shadow-lg shadow-blue-200 p-4 rounded-lg ">
							<div className="card-image">
								<img
									src="/images/marksquare.png"
									alt="Description"
									className="max-w-full h-[auto] m-auto"
								/>
							</div>
							<div className="card-text md:text-start">
								<p>
									<b>Effortless Booking</b> <br />. Find a driver in seconds and
									enjoy a seamless ride experience.
								</p>
							</div>
						</div>

						<div className="card flex gap-4 bg-white shadow-lg shadow-blue-200 p-4 rounded-lg">
							<div className="card-image">
								<img
									src="/images/marksquare.png"
									alt="Description"
									className="max-w-full h-[auto] m-auto"
								/>
							</div>
							<div className="card-text md:text-start">
								<p>
									<b>Smooth Payments</b> <br />. Choose from secure payment
									options with just a few taps.
								</p>
							</div>
						</div>

						<div className="card flex gap-4 bg-white shadow-lg shadow-blue-200 p-4 rounded-lg">
							<div className="card-image">
								<img
									src="/images/marksquare.png"
									alt="Description"
									className="max-w-full h-[auto] m-auto"
								/>
							</div>
							<div className="card-text md:text-start">
								<p>
									<b>Instant Convenience</b> <br /> . Booking and paying for
									your ride has never been easier.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="header-image hidden xl:order-2 md:order-2 xl:block md:block"> */}
				<div className="header-image hidden md:block md:m-auto xl:block xl:mx-0">
					<img
						src="/images/image.png"
						alt="Description"
						className="max-w-full h-[auto]"
					/>
				</div>
			</div>

			<div className="header-section grid m-auto pb-3 px-5 w-full mt-4 md:grid-cols-2 md:px-8 md:mt-0 md:gap-4 md: mb-6 xl:mb-0 xl:px-32">
				<div className="header-text order-2  xl:pt-32 md:pt-16 ">
					<h2 className="text-[28px] font-extrabold leading-16 tracking-[0.15rem] pb-4 md:text-[24px] lg:text-[30px]">
						Flexible Payment Choices
					</h2>
					<p className="text-[13px] text-[#90A3B4]">
						<b>Your Payment, Your Way</b>
						<br></br>
						Enjoy the convenience of selecting the payment method that works
						best for you, ensuring a smooth and flexible ride experience.
					</p>
					<div className="cards pt-6 flex flex-col gap-4">
						<div className="card flex flex-col m-auto gap-4 bg-white shadow-lg shadow-blue-200 p-4 rounded-lg md:flex-row">
							<div className="card-image">
								<img
									src="/images/ticksquare.png"
									alt="Description"
									className="max-w-full h-[auto] m-auto"
								/>
							</div>
							<div className="card-text text-center md:text-start">
								<p>
									<b>Pay with Cash</b> <br />. Opt for cash payment at the end
									of your ride for a straightforward transaction.
								</p>
							</div>
						</div>

						<div className="card flex flex-col gap-4 bg-white shadow-lg shadow-blue-200 p-4 rounded-lg md:flex-row">
							<div className="card-image">
								<img
									src="/images/ticksquare-b.png"
									alt="Description"
									className="max-w-full h-[auto] m-auto"
								/>
							</div>
							<div className="card-text text-center md:text-start">
								<p>
									<b>Pay with Cash</b> <br />. Opt for cash payment at the end
									of your ride for a straightforward transaction.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="header-image xl:order-2 md:order-2 md:m-auto xl:mx-0">
					<img
						src="/images/Cards.png"
						alt="Description"
						className="max-w-full h-[auto]"
					/>
				</div>
			</div>

			<div className="header-section grid m-auto pb-3 px-5 w-full mt-4 md:grid-cols-2 md:px-8 md:mt-0 md:gap-4 xl:px-32 ">
				<div className="header-text order-2  ">
					<h2 className="text-[28px] font-extrabold leading-16 tracking-[0.15rem] pb-4 md:text-[24px] lg:text-[30px]">
						How <span className="text-[#3F8EFC]">InDrive</span> Empowers Driver
					</h2>
					<p className="text-[13px] text-[#90A3B4]">
						inDrive enhances your driving experience by providing real-time
						notifications tailored to your preferences. Receive instant alerts
						for specific locations and have the flexibility to accept or reject
						rides that fit your schedule.
					</p>
					<div className="cards pt-6 flex flex-col gap-4">
						<div className="card flex flex-col m-auto gap-4 bg-white shadow-lg shadow-blue-200 p-4 rounded-lg md:flex-row">
							<div className="card-image">
								<img
									src="/images/location.png"
									alt="Description"
									className="max-w-full h-[auto] m-auto"
								/>
							</div>
							<div className="card-text text-center md:text-start">
								<p>
									<span className="text-[#3F8EFC]">Location-Based Alerts</span>
									<br></br>
									Get instant notifications about nearby ride opportunities
									based on your preferred locations, ensuring you never miss a
									potential fare.
								</p>
							</div>
						</div>

						<div className="card flex flex-col gap-4 bg-white shadow-lg shadow-blue-200 p-4 rounded-lg md:flex-row ">
							<div className="card-image">
								<img
									src="/images/porsche.png"
									alt="Description"
									className="max-w-full h-[auto] m-auto"
								/>
							</div>
							<div className="card-text text-center md:text-start">
								<p>
									<span className="text-[#3F8EFC]">Ride Control</span>
									<br></br>
									With inDrive, you decide which rides to accept, giving you
									more control over your schedule and earnings.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="header-image md:m-auto xl:mx-0">
					<img
						src="/images/image-3.png"
						alt="Description"
						className="max-w-full h-[auto]"
					/>
				</div>
			</div>
		</>
	);
};

// export default HeaderSection;

export default HeaderSection;
