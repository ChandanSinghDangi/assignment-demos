'use client';
import React from 'react';

type WaiterShiftsProps = {
  dark:boolean;
}

interface Shift {
  time: string;
  duration?: string;
  pay?: string;
  type: 'normal' | 'approved-leave' | 'absent' | 'evening';
  details?: string;
}

interface Employee {
  id: string;
  name: string;
  initials: string;
  role: string;
  hours: string;
  salary: string;
  avatarColor: string;
  schedule: (Shift | null)[][];
}

const WaiterShifts: React.FC<WaiterShiftsProps> = ({dark}) => {

  const employees: Employee[] = [
    {
      id: '1',
      name: 'Carol Saragosa',
      initials: 'CS',
      role: 'Waitress',
      hours: '16h',
      salary: '$800',
      avatarColor: 'from-indigo-500 to-purple-600',
      schedule: [
        [
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          null,
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: 'Approved leave', details: '08:00-16:00', type: 'approved-leave' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: '18:30-23:30', duration: '3.5h', pay: '$80', type: 'evening' }
        ],
        [
          null,
          null, 
          null, 
          { time: '18:30-23:30', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' }, 
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          null,
        ],
      ]
    },
    {
      id: '2',
      name: 'John Smith',
      initials: 'JS',
      role: 'Waitress',
      hours: '16h',
      salary: '$800',
      avatarColor: 'from-teal-400 to-green-500',
      schedule: [
        [
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: 'Approved leave', details: 'All day', type: 'approved-leave' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: 'Approved leave', details: '08:00-16:00', type: 'approved-leave' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' }
        ],
        [
          { time: '08:00-12:00', type: 'absent', details: 'Absent' },
          null,
          null,
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          null, null, null
        ]
      ]
    },
    {
      id: '3',
      name: 'Carol Saragosa',
      initials: 'CS',
      role: 'Waitress',
      hours: '16h',
      salary: '$800',
      avatarColor: 'from-indigo-500 to-purple-600',
      schedule: [
        [
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          null,
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: 'Approved leave', details: '08:00-16:00', type: 'approved-leave' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: '18:30-23:30', duration: '3.5h', pay: '$80', type: 'evening' }
        ],
        [
          null,
          null, 
          null, 
          { time: '18:30-23:30', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' }, 
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          null,
        ],
      ]
    },
    {
      id: '4',
      name: 'John Smith',
      initials: 'JS',
      role: 'Waitress',
      hours: '16h',
      salary: '$800',
      avatarColor: 'from-teal-400 to-green-500',
      schedule: [
        [
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: 'Approved leave', details: 'All day', type: 'approved-leave' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: 'Approved leave', details: '08:00-16:00', type: 'approved-leave' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' }
        ],
        [
          { time: '08:00-12:00', type: 'absent', details: 'Absent' },
          null,
          null,
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          null, null, null
        ]
      ]
    },
    {
      id: '5',
      name: 'Carol Saragosa',
      initials: 'CS',
      role: 'Waitress',
      hours: '16h',
      salary: '$800',
      avatarColor: 'from-indigo-500 to-purple-600',
      schedule: [
        [
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          null,
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: 'Approved leave', details: '08:00-16:00', type: 'approved-leave' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: '18:30-23:30', duration: '3.5h', pay: '$80', type: 'evening' }
        ],
        [
          null,
          null, 
          null, 
          { time: '18:30-23:30', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' }, 
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          null,
        ],
      ]
    },
    {
      id: '6',
      name: 'John Smith',
      initials: 'JS',
      role: 'Waitress',
      hours: '16h',
      salary: '$800',
      avatarColor: 'from-teal-400 to-green-500',
      schedule: [
        [
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: 'Approved leave', details: 'All day', type: 'approved-leave' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'normal' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: 'Approved leave', details: '08:00-16:00', type: 'approved-leave' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' }
        ],
        [
          { time: '08:00-12:00', type: 'absent', details: 'Absent' },
          null,
          null,
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          { time: '08:00-12:00', duration: '3.5h', pay: '$80', type: 'evening' },
          null, null, null
        ]
      ]
    },
  ];

  const getShiftStyles = (type: Shift['type'], dark:boolean) => {
    switch (type) {
      case 'normal':
        return dark ? 'bg-[#89B6AD] border-[#6E918A]' : 'bg-[#5F8A80] border-[#4C6F67]';
      case 'approved-leave':
        return dark ? 'bg-[#A78BFA] text-zinc-800 border-purple-300' : 'bg-[#7B5EDB] text-zinc-100 border-purple-700';
      case 'absent':
        return dark ? 'bg-[#EF4444] text-white border-red-300' : 'bg-[#B91C1C] text-zinc-100 border-red-700';
      case 'evening':
        return dark ? 'bg-[#FBCBA4] border-orange-300' : 'bg-[#D9976F] border-orange-700';
      default:
        return dark ? 'bg-gray-50 text-gray-700 border-gray-200' : 'bg-gray-800 text-gray-100 border-gray-700';
    }
  };

  const renderShift = (shift: Shift) => (
    <div
      key={shift.time}
      className={`p-2 rounded-md text-xs border ${getShiftStyles(shift.type, dark)}`}
    >
      <div className="font-semibold text-center">{shift.time}</div>
      <div className="flex items-center gap-1 mt-1 text-xs opacity-80">
        {shift.type === 'absent' ? (
          <span>🚫 {shift.details}</span>
        ) : shift.duration && shift.pay ? (
          <>
            <div className="w-2 h-2 rounded-full bg-current opacity-60 border-4"></div>
            <span className=''>{shift.duration}</span>
            <span>{shift.pay}</span>
          </>
        ) : shift.details ? (
          <>
            <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
            <span>{shift.details}</span>
          </>
        ) : null}
      </div>
    </div>
  );

  return (

    <div className={`p-1 border rounded-lg 
      h-full ${dark ? 'bg-[#472a52] border-[#795088]' : 'bg-gray-100 border-gray-200'}`}>
      <div className={`rounded-xl shadow-sm overflow-hidden ${dark ? 'bg-[#2f1a36]' : 'bg-white'}`}>
        {employees.map((employee) => (
          <div key={employee.id} className=''>
            {employee.schedule.map((week, weekIndex) => (
              <div key={`${employee.id}-${weekIndex}`} className={`grid grid-cols-[100px_1fr] 
                md:grid-cols-[150px_1fr] lg:grid-cols-[200px_1fr] xl:grid-cols-[250px_1fr] 
                border-b first:border-b-0 gap-1 ${dark ? 'border-[#795088]' : 'border-gray-300'}`}>

                <div className={`p-4 rounded 
                  border-r ${dark ? 'border-[#795088] bg-[#54345f]' : 'border-gray-200 bg-white'}`}>
                  {weekIndex === 0 ? (
                    <div className="flex items-center gap-3 ">
                      <div className='p-1'>
                        <div  className={`rounded-full bg-gradient-to-br ${employee.avatarColor} flex items-center 
                          justify-center text-white font-semibold aspect-squarew-5 text-sm sm:w-5 
                          md:w-5 lg:w-7 xl:w-10 xl:h-9`}
                        >
                          {employee.initials}
                        </div>
                      </div>
                      <div className=''>
                        <h3 className={`font-semibold lg:text-lg text-sm ${dark ? 'text-white' : 'text-black'}`}>{employee.name}</h3>
                        <div className={`flex items-center gap-10 text-xs ${dark ? 'text-white' : 'text-gray-600'}`}>
                          <span>{employee.role} • {employee.hours}</span>
                          <span className={`font-semibold  ${dark ? 'text-white' : 'text-gray-900'}`}>{employee.salary}</span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className={`grid grid-cols-7 md:min-h-[80px]
                  rounded-lg ${dark ? 'border-[#795088]' : 'border-gray-200'}`}>
                {week.map((shift, dayIndex) => (
                  <div key={dayIndex} className={`p-2 border-r
                  last:border-r-0 flex flex-col gap-1 ${dark ? 'border-[#795088]' : 'border-gray-200'}`}>
                  {shift && renderShift(shift)}
                  </div>
                ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button className="fixed bottom-6 right-6 w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white 
      rounded-full shadow-lg   hover:shadow-xl transition-all duration-200 flex items-center justify-center text-xl font-light hover:scale-105">
        +
      </button>

    </div>
  );
};

export default WaiterShifts;




