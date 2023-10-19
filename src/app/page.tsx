
import HomeBanner from '@/components/home/HomeBanner'
import NavbarPrimary from '@/share/NavbarPrimary'
import NavbarSecondary from '@/share/NavbarSecondary'
import '../styles/Home.css'


import PrimaryFooter from '@/share/PrimaryFooter'
import CategorySports from '@/components/home/CategorySports'
import BookingItemCard from '@/components/home/BookingItemCard'
import SideBarModule from '@/modules/SideBarModule'
import LogOutModule from '@/modules/LogOutModule'
import UpcomeingEvents from '@/components/home/upcomeingEvents'
import Feedback from '@/components/home/Feedback'
import Review from '@/components/home/Reviews'

export default function Home() {
  return (
    <div className=" bg-[#d7ebe4]">
      <NavbarSecondary />

      <HomeBanner />
      <div className='w-full flex bgGradient py-5 items-center justify-center border-x-0 border-2 border-[#6131a1a9]'>
        <CategorySports />
      </div>
      <div className='bg-[#382383] py-10'>
        <BookingItemCard />
      </div>
      <div className='bg-[#3e2791] py-10'>
        <UpcomeingEvents />
      </div>
      <div className='w-full h-full sidebar-bg bg-cover'>
        <div className='bg-[#1e0e79e5] py-10'>
          <Feedback />
        </div>
      </div>
      <div className='bg-[#3e2791] py-10'>
        <Review />
      </div>
      <LogOutModule />

      <PrimaryFooter />
    </div>
  )
}
