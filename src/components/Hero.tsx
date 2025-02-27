import WIDButton from "./WidButton";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type Props = {
	userID: any;
	setUserID: any;
};

const Hero = (props: Props) => {
	const [loading, setLoading] = useState(false);
	let navigate = useNavigate();

	const validID = new RegExp("^[a-zA-Z0-9]+@wagpay$");
	// const specialChar = new RegExp("^/[`~!#$%^&*()_|+-=?;:'\",.<>{}[]\\/]/gi");

	const onSubmit = (e: any) => {
		setLoading(true);
		e.preventDefault();
		if (!validID.test(props.userID)) {
			toast.error("Invalid ID", {
				id: "Invalid ID",
				duration: 3000,
				style: {
					background: "linear-gradient(to right, #4B74FF, #9281FF)",
					color: "white",
				},
			});
		} else {
			navigate("/claim", { replace: true });
			toast.success("Valid ID", {
				id: "success",
				duration: 3000,
				style: {
					background: "linear-gradient(to right, #4B74FF, #9281FF)",
					color: "white",
				},
			});
		}
		setLoading(false);
	};

	return (
		<>
			<div className="w-full mt-12 sm:mt-32 space-y-6">
				<div className="text-4xl lg:text-5xl font-bold inline-block leading-tight">
					Powering your finances with the Next{" "}
					<span className="lg:block">Chapter of Internet</span>
				</div>
				<div className="text-gray-400 lg:text-lg inline-block px-2 ms:px-0">
					A payment solution that simplifies payment acceptance for
					the{" "}
					<span className="md:block">
						next chapter of the internet.
					</span>
				</div>
				{/* claim id section */}
				<form
					className="w-5/6 sm:w-4/6 lg:w-5/12 mx-auto"
					onSubmit={onSubmit}
				>
					<div className="mt-1 relative flex items-center">
						<input
							autoFocus
							type="text"
							name="search"
							id="search"
							value={props.userID}
							onChange={(e) => props.setUserID(e.target.value)}
							placeholder="username"
							className="block w-full pl-4 border-none outline-none pr-12 sm:text-sm h-14 bg-[#4F4F4F66] opacity-75 rounded-md"
						/>
						<div className="absolute inset-y-0 right-0 flex py-2 pr-1.5">
							<WIDButton
								loading={loading}
								setLoading={setLoading}
							/>
						</div>
					</div>
				</form>
			</div>
			{/* iphone */}
			<div className="w-full flex items-center justify-center mt-16">
				<img src="/iphone.svg" alt="iphone_image" />
			</div>
		</>
	);
};

export default Hero;
