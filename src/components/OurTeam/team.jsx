import React from 'react';
import Card from './card/card'


const TeamSection = () => {
  return (
    <div className='con 'style={{ background: "#071952"  , padding: '10px' }}>
    <div className="container  my-24 px-6 mx-auto">

      <section className="mb-32  text-center" >
        <h2 className="text-3xl font-bold mb-12"style={{color:'#E8FFC2'}}>Meet the team</h2>

        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-x-6 gap-y-10 lg:gap-x-12">
          <Card/>
        </div>
      </section>
    </div>
    </div>
  );
};

export default TeamSection;
