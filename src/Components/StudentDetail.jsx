

const StudentDetail = ({ initial, name, course, city }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='h-15 w-15 rounded-full bg-blue-100 flex justify-center items-center mb-2'>
        <p className='text-sky-600 font-semibold'>{initial}</p>
      </div>
      <p className='font-semibold'>{name}</p>
      <p className='text-[#999]'>{course}</p>
      <p className='text-[#999]'>{city}</p>
      <hr className="w-full border-t border-gray-300 my-3" />
    </div>
  )
}

export default StudentDetail
