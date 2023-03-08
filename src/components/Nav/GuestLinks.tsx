import Link from 'next/link'

const GuestLinks = () =>{
    return (
    <>
      <li>
        <Link href='/register'>Register</Link>
      </li>
      <li>
        <Link href='/login'>Login</Link>
      </li>
      <li>
        <Link href='/about'>About</Link>
      </li>
    </>
    )
  };

  export default GuestLinks