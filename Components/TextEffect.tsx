import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1500,
        'We produce food for Guinea Pigs',
        1500,
        'We produce food for Chinchillas',
        1500
      ]}
      speed={50}
      className='text-[20px] md:text-[20px] text-[#fff] font-semibold'
      repeat={Infinity}
    />
  );
};


export default TextEffect;