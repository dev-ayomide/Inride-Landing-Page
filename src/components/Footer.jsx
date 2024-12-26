import React from "react";

const Footer = () => {
    return (
			<div className="footer py-10 md:px-8 md:py-8 xl:px-32">
				<div className="footer flex flex-col items-center justify-between pt-12 border-t-[2px] border-gray-200 md:flex-row md:items-start">
					<div className="footerlogo ">
						<h1 className="font-extrabold text-[20px]">Logo</h1>
						<div className="footerlinks flex flex-col m-auto gap-6 text-[12px] mt-4 md:flex-row ">
							<a href="./home.html">Home</a>
							<a href="./home.html">About</a>
							<a href="./home.html">Contact</a>
							<a href="./home.html">Support</a>
						</div>
						<div className="icons"></div>
					</div>
					<div className="newsletter flex flex-col gap-4 items-center md:items-start">
						<hr className="m-auto mt-8 w-10/12 md:hidden" />
						<h2 className="font-bold">Join Our Newsletter</h2>
						<p className="text-xs text-center md:text-start">
							Be the first to know about our latest updates, exclusive offers,
							and more.
						</p>
						<div className="email-sub flex gap-2 items-center">
							<input
								type="email"
								name=""
								id=""
								placeholder="Enter your email"
								className="border-[2px] border-gray-200 p-2 rounded-md text-xs md:w-5/6"
							/>
							<div className="button justify-center items-center">
								<a
									href="./home.html"
									className="bg-[#2667FF;] py-2 px-2 rounded-md text-white text-xs "
								>
									Subscribe
								</a>
							</div>
						</div>
					</div>
				</div>
				<hr className="m-auto mt-8 w-10/12 md:w-full" />
				<div className="flex flex-col gap-4 justify-between items-center md:flex-row">
					<div className="footerlinks flex gap-6 text-[12px] mt-4">
						<a href="./home.html">English</a>
						<a href="./home.html">Privacy</a>
						<a href="./home.html">Legal</a>
					</div>
					<p className="text-xs">© 2024 Indrive. All Rights Reserved.</p>
				</div>
			</div>
		);
};

export default Footer;
