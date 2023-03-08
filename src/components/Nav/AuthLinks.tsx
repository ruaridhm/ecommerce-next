import Link from 'next/link'
import Image from 'next/image'
import { IUser } from './Nav';





const AuthLinks = (user: IUser) => {
    
    const onLogout = () => {
        // logout();
        // clearRecords();
      };
    return (
    <>
      <li>
        <Link href='/user'>Hello {user.name}</Link>
      </li>
      <li>
        <Link href='/library'>Cart</Link>
      </li>
      <li>
        <Link href='/sort'>Profile</Link>
      </li>
      <li>
        <Link
          onClick={onLogout}
          href='#!'
        >
          <Image src='/icons/right-from-bracket-solid.svg' alt='logout' />
          <span className=''>Logout</span>
        </Link>
      </li>
    </>
    )
  };

  export default AuthLinks