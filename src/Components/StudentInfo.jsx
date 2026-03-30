
const StudentInfo = ({ status, rollNo, cgpa }) => {
  return (
    <div className='flex flex-col gap-1 '>
      <div className='flex justify-between'>
        <label className='text-[#999] font-medium'>Status</label>
        <span className={
          `${status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} px-3 py-0.5 rounded-3xl`}>
          {status ? "Active" : "Inactive"}
        </span>
      </div>
      <div className='flex justify-between'>
        <label className='text-[#999] font-medium '>Roll No</label>
        <span className='font-bold'>{rollNo}</span>
      </div>
      <div className='flex justify-between'>
        <label className='text-[#999] font-medium'>CGPA</label>
        <span className='font-bold'>{cgpa}</span>
      </div>
      <hr className="w-full border-t border-gray-300 my-3" />
    </div>
  )
}
export default StudentInfo

