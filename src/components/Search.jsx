import React, { useState, useRef, useEffect } from "react";

function Search() {
	const [ingredients, setIngredients] = useState("");
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [selectedAllergies, setSelectedAllergies] = useState([]);
	const allergies = [
		"Peanuts",
		"Gluten",
		"Dairy",
		"Shellfish",
		"Soy",
		"Eggs",
		"Tree Nuts",
	];

	const dropdownRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setDropdownOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef]);

	const handleInputChange = (event) => {
		setIngredients(event.target.value);
		setDropdownOpen(true);
	};

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleAllergyChange = (event) => {
		const { value, checked } = event.target;
		setSelectedAllergies((prev) =>
			checked ? [...prev, value] : prev.filter((allergy) => allergy !== value)
		);
	};

	const acceptAllergies = () => {
		setDropdownOpen(false);
	};

	const handleSearch = () => {
		console.log("Ingredients:", ingredients);
		console.log("Selected Allergies:", selectedAllergies);
		// Implement your search logic here
	};

	return (
		<div className="flex flex-col items-center w-full max-w-lg mx-auto p-4 space-y-4">
			{/* Search Bar Container */}
			<div className="flex flex-col sm:flex-row items-stretch w-full relative">
				{/* Ingredients Input */}
				<input
					type="text"
					placeholder="Enter available ingredients..."
					className="border border-gray-300 p-2 rounded-md sm:rounded-r-none flex-1"
					value={ingredients}
					onChange={handleInputChange}
					onFocus={() => setDropdownOpen(true)}
				/>

				{/* Allergies Dropdown Button */}
				<button
					onClick={toggleDropdown}
					className="border border-gray-300 p-2 bg-white rounded-md sm:rounded-l-none"
				>
					{/* Dropdown Icon */}
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 9l-7 7-7-7"
						></path>
					</svg>
				</button>

				{/* Search Button */}
				<button
					onClick={handleSearch}
					className="bg-blue-500 text-white p-2 rounded-md mt-2 sm:mt-0 sm:ml-2"
				>
					Search
				</button>

				{/* Allergies Dropdown */}
				{dropdownOpen && (
					<div
						ref={dropdownRef}
						className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-20"
					>
						<div className="p-4">
							<p className="font-semibold mb-2">Select Allergies:</p>
							<div className="flex flex-col space-y-2 max-h-60 overflow-y-auto">
								{allergies.map((allergy) => (
									<label key={allergy} className="flex items-center">
										<input
											type="checkbox"
											className="mr-2"
											value={allergy}
											checked={selectedAllergies.includes(allergy)}
											onChange={handleAllergyChange}
										/>
										{allergy}
									</label>
								))}
							</div>
							<button
								onClick={acceptAllergies}
								className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
							>
								Accept
							</button>
						</div>
					</div>
				)}
			</div>

			{/* Display Selected Allergies (Optional) */}
			{selectedAllergies.length > 0 && (
				<div className="w-full flex flex-wrap gap-2">
					{selectedAllergies.map((allergy) => (
						<span
							key={allergy}
							className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm"
						>
							{allergy} &times;
						</span>
					))}
				</div>
			)}
		</div>
	);
}

export default Search;
