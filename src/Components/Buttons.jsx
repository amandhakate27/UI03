

const Buttons = ({ viewProfile, message }) => {
  return (
    <div className='flex flex-col gap-2'>
      <button
        onClick={viewProfile}
        className='w-full text-blue-500 border rounded-xl py-1.5'>View Profile</button>
      <button
        onClick={message}
        className='w-full bg-blue-400 py-1.5 rounded-xl'>Send Message</button>
    </div>
  )
}
export default Buttons

