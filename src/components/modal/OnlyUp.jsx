import { ChevronUp } from 'lucide-react'

export default function OnlyUp() {
  return (
    <a href='#Inicio' className='fixed z-40 bottom-5 right-5 bg-sky-800 w-12 h-12 hidden lg:flex items-center justify-center rounded '>
      <ChevronUp color='white' size='28' />
    </a>
  )
}