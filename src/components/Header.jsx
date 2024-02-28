import logo from '../assets/shared/logo.svg'
import Nav from './Nav'


const Header = () => {
    return (
        <div className='relative header flex items-center justify-between py-10'>
                <img className='mt-6 ml-[55px]' src={logo} alt="logo"/>
                <Nav/>
        </div>
    )
}

export default Header