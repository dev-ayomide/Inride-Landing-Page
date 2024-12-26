import React from "react";

const AdminDashboard = () => {
	return (
		<div className="lg:flex">
			{/* Sidebar - Full height, fixed, and only visible on large screens */}
			<aside className="hidden lg:flex lg:flex-col lg:w-1/4 bg-gray-800 text-white h-screen fixed">
				<div className="flex flex-col h-full">
					{/* Navigation Links */}
					<nav className="flex-1 p-4 overflow-auto">
						<ul>
							<li className="mb-4">
								<a
									href="#link1"
									className="block p-4 bg-[#3F8EFC] hover:bg-gray-600 rounded"
								>
									Dashboard
								</a>
							</li>
							<li className="mb-4">
								<a
									href="#link2"
									className="block p-4 bg-[#3F8EFC] hover:bg-gray-600 rounded"
								>
									Drivers
								</a>
							</li>
							<li className="mb-4">
								<a
									href="#link3"
									className="block p-4 bg-[#3F8EFC] hover:bg-gray-600 rounded"
								>
									Students
								</a>
							</li>
						</ul>
					</nav>

					{/* Bottom links for Settings and Logout */}
					<div className="p-4 mt-auto">
						<a
							href="#settings"
							className="block p-4 mb-[4.2rem] bg-red-600 hover:bg-red-500 rounded"
						>
							Logout
						</a>
						
					</div>
				</div>
			</aside>

			<main className="lg:ml-[25%] p-4">
				<h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
				<div className="cards pt-6 flex flex-col gap-4 md:flex-row">
					<div className="card flex flex-col gap-4  bg-white shadow-lg shadow-blue-200 p-4 px-16  rounded-lg md:flex-row">
						<div className="card-image">
							<img
								src="/images/ticksquare.png"
								alt="Description"
								className="max-w-full h-[auto]"
							/>
						</div>
						<div className="card-text text-left">
							<p>
								Drivers <br /> <span className="text-[1.2rem]">55</span>
							</p>
						</div>
					</div>

					<div className="card flex flex-col gap-4  bg-white shadow-lg shadow-blue-200 p-4 px-16 rounded-lg md:flex-row">
						<div className="card-image">
							<img
								src="/images/ticksquare.png"
								alt="Description"
								className="max-w-full h-[auto]"
							/>
						</div>
						<div className="card-text text-left">
							<p>
								Students <br /> <span className="text-[1.2rem]">5000</span>
							</p>
						</div>
                    </div>
                    
					<div className="card flex flex-col gap-4  bg-white shadow-lg shadow-blue-200 p-4 px-16 rounded-lg md:flex-row">
						<div className="card-image">
							<img
								src="/images/ticksquare.png"
								alt="Description"
								className="max-w-full h-[auto]"
							/>
						</div>
						<div className="card-text text-left">
							<p>
								App Visitors <br /> <span className="text-[1.2rem]">4000</span>
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default AdminDashboard;
