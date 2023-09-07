import React from 'react';

const Stats = () => {
  return (
<section className="p-6" style={{ background: "#071952", color: "#E8FFC2" }}>
	<div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">200+</p>
			<p className="text-sm sm:text-base">Members</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">10</p>
			<p className="text-sm sm:text-base">Societies</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">3</p>
			<p className="text-sm sm:text-base">Student Affinity GRoups</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">50+</p>
			<p className="text-sm sm:text-base">Execom Members</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">20</p>
			<p className="text-sm sm:text-base">Years of experience</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">60+</p>
			<p className="text-sm sm:text-base">Events</p>
		</div>
	</div>
</section>
  )
};
export default Stats;