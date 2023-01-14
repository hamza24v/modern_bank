import {features, stats} from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

 const Business = () => {
  return (
    <div className='flex flex-center flex-row'>
      <div className='flex flex-col'>
        <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] mt-20 text-white'>
          You do the business, we'll handle the money
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          With the right credit card, you can improve your financial life by building
          credit, earning rewards and saving money. But with hundreds of credit on the 
          market.
        </p>
      </div>

      {/* cards*/}
      <div className='flex flex-col'>
        <section className='flex-row flex-wrap sm:mb-20 mb-6'>
          {features.map((feature) => (
            <div key={feature.id} className={`flex-1 flex justify-start items-center flex-row`}>
              <div className='w-[64px] h-[64px] mt-1148 ml-855'> {feature.icon}</div>
              <div className='flex flex-col'>
                <h1 className='font-poppins font-semibold xs:text-[18px] text-[15px] xs:leading-[53px] leading-[43px] text-white'>
                  {feature.title}
                </h1>
                <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </section> 

      </div>
    </div>
  )
}

export default Business
