import React from 'react';

function ComplaintsTimeView (props) {
  return (
    <div class="w-full flex text-2xs">
      <div class="w-1-8">
        {props.data.map((days_times, i) =>
          i < 1 ? days_times.map((times, i2) =>
            <div class="w-full h-4-1 mt-1 text-center light-gray-text p1">
              {Object.keys(times)[0]}
            </div>) : null
        )}
      </div>
      {props.data.map((days, i) =>
        <div class="w-1-8">
          {days.map((values, i2) =>
            <div class="w-full h-4-1 mt-1 pl-1">
              <div class={"w-full h-full " + (Number(Object.values(values)[0]) < 101 ? 'bg-0-100' : Number(Object.values(values)[0]) < 201 ? 'bg-101-200' : Number(Object.values(values)[0]) < 301 ? 'bg-201-300' : Number(Object.values(values)[0]) > 300 ? 'bg-301-400' : 'bg-0-100')}></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ComplaintsTimeView;
