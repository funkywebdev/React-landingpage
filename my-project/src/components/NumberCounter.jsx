import React from 'react';
import CountUp from 'react-countup';

const NumberCounter = () => {
  return (
    <div className="bg-[#163156] text-white py-8">
      <div className="container grid grid-cols-2 gap-5 px-4 mx-auto text-center sm:grid-cols-3 md:grid-cols-5">
        
        {/* Box 1 */}
        <div className="flex flex-col items-center">
          <CountUp
            start={0}
            end={90}
            duration={10}
            suffix="%"
            className="text-3xl font-bold"
          />
          <p className="mt-2 text-sm sm:text-base opacity-80">
            Student satisfaction rate
          </p>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center">
          <CountUp
            start={0}
            end={100}
            duration={10}
            suffix="%"
            className="text-3xl font-bold"
          />
          <p className="mt-2 text-sm sm:text-base opacity-80">
            Real world projects
          </p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center">
          <CountUp
            start={0}
            end={20}
            duration={10}
            suffix="+"
            className="text-3xl font-bold"
          />
          <p className="mt-2 text-sm sm:text-base opacity-80">
            Hired by Top Companies
          </p>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center">
          <CountUp
            start={0}
            end={20}
            duration={10}
            suffix="+"
            className="text-3xl font-bold"
          />
          <p className="mt-2 text-sm sm:text-base opacity-80">
            Internship placements
          </p>
        </div>

        {/* Box 5 */}
        <div className="flex flex-col items-center">
          <CountUp
            start={0}
            end={20}
            duration={10}
            suffix="+"
            className="text-3xl font-bold"
          />
          <p className="mt-2 text-sm sm:text-base opacity-80">
            Expert instructors
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
