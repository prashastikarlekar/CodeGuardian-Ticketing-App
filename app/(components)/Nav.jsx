/** @format */

import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
	return (
		<nav className='flex justify-between bg-nav p-4'>
			<div className='flex items-center space-x-6 align-middle'>
				<Link href='/'>
					<FontAwesomeIcon icon={faHome} className='icon' />
				</Link>
				<Link href='/TicketPage/new'>
					<FontAwesomeIcon icon={faTicket} className='icon' />
				</Link>
			</div>
			<div>
				<p className='text-default-text text-2xl font-bold font-sans'>
					Ticket Management Application
				</p>
			</div>
			<div>
				<p className='text-default-text'> admin@ticketing.com</p>
			</div>
		</nav>
	);
};

export default Nav;
