export default function Skills({ url, title }) {
  return (
    <div className="flex justify-center py-4 items-center rounded-xl fill-white">
      <img
        className='fill-white'
        src={url || ''}
        alt={title}
        width={60}
        height={60}
      />
      <h2 className='ml-6 font-sans font-semibold'>{title}</h2>
    </div>
  )
}