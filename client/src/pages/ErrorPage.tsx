import React,  { FC } from 'react'
import { Link } from 'react-router-dom'
import ReactImg from '../assets/react.svg'
const ErrorPage: FC = () => {
  return (
		<div className="min-h-screen dg-slate-900 font-roboto text-white flex justify-center items-center flex-col gap-10 bg-slate-900">
			<img src={ReactImg} alt="React" />
			<Link
				to={'/'}
				className="dg-sky-500 rounded-md px-6 py-2 hover: bg-sky-600"
			>
				Home Page
			</Link>
		</div>
	)
}

export default ErrorPage