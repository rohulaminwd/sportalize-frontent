
import HomeBanner from '@/components/home/HomeBanner'
import NavbarPrimary from '@/share/NavbarPrimary'
import NavbarSecondary from '@/share/NavbarSecondary'
import '../styles/Home.css'


import PrimaryFooter from '@/share/PrimaryFooter'
import CategorySports from '@/components/home/CategorySports'
import BookingItemCard from '@/components/home/BookingItemCard'
import SideBarModule from '@/modules/SideBarModule'
import LogOutModule from '@/modules/LogOutModule'

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
      <LogOutModule />

      <PrimaryFooter />
    </div>
  )
}
