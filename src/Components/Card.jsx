
const Card = ({ children }) => {
  return (
    <div className="w-full max-w-sm lg:max-w-lg p-4 bg-white rounded-xl border">
      {children}
    </div>
  )
}
export default Card;