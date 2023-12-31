import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBtc, FaSignOutAlt } from 'react-icons/fa'

const Header: FC = () => {
	const isAuth = true
	return (
		<header className="flex items-center justify-between bg-slate-800 px-4 py-2 shadow-sm backdrop-blur-sm">
			<Link to="/">
				<FaBtc size={20} />
			</Link>
			{isAuth && (
				<nav>
					<ul className="flex items-center gap-5 mi-auto mr-10">
						<li>
							<NavLink
								to={'/'}
								className={({ isActive }) =>
									isActive ? 'text-white' : 'text-white/50'
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/transactions'}
								className={({ isActive }) =>
									isActive ? 'text-white' : 'text-white/50'
								}
							>
								Transactions
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/categories'}
								className={({ isActive }) =>
									isActive ? 'text-white' : 'text-white/50'
								}
							>
								Categories
							</NavLink>
						</li>
					</ul>
				</nav>
			)}
			{isAuth ? (
				<button className="btn btn-red hover:bg-sky-700">
					<span>Log Out</span>
					<FaSignOutAlt />
				</button>
			) : (
				<Link to={'/auth'} className="py-2 text-white/50" hover: text-white>
                    Log In
                </Link>
			)}
		</header>
	)
}

export default Header
