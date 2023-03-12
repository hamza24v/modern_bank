import React, {useEffect, useRef} from 'react'
import styles from '../style'
import {stats} from '../constants'
import Incrementer from './animations/Incrementer';

const Stats = () => {
  const texts = ["+", "M", "$"];
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            <Incrementer 
            textBefore= {stat.id == 3 ? "$": ""}
            textAfter = {stat.id == 3 ? "M": ""}
            start={0} 
            end={stat.value}/>
            </h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
            {stat.title}
            </p>
        </div>
      ))}
    </section>
      
  )
}

export default Stats