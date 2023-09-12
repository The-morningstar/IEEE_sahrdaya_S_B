import React from 'react';

import sateesh from './images/satheesh.jpeg'
import sundar from './images/sundar.jpeg'
import safa from './images/safa.jpg'
import anson from './images/anson.jpeg'
import mani from './images/mani.jpeg'
import antony from './images/antony.jpeg'



const TeamSection = () => {
  return (
    <section className="py-6 dark:text-gray-100" style={{ backgroundColor: "#071952" }}>
	<div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
		<p className="p-2 text-sm font-medium tracki text-center uppercase">Office Bearers</p>
		<h1 className="text-4xl font-bold leadi text-center sm:text-5xl">The talented people behind the scenes</h1>




		<div className="flex flex-row flex-wrap-reverse justify-center mt-8">
			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={antony} />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leadi">Antony Paul</p>
					<p>Student Mentor</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					
				</div>
			</div>






			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={anson} />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leadi">Anson M J</p>
					<p>Student Mentor</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					
				</div>
			</div>




			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={safa} />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leadi">Safa Abdul Salam</p>
					<p>Chairperson</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
				
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					
				</div>
			</div>




			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={sundar}/>
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leadi">Sundar Ramaswamy</p>
					<p>Branch Councellor</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					
				</div>
			</div>




      <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={sateesh} />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leadi">Dr.Sateesh Kumar</p>
          <p>Advisor<br/>HOD-Dept.CSE</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					
				</div>
			</div>







			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={mani} />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leadi">Manishankar</p>
					<p>Advisor<br/>Dept.CSE</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					
				</div>
			</div>
		



    



		</div>
	</div>
</section>
  );
};

export default TeamSection;
