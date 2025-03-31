const Footer = () => {
  return (
    <footer className='py-6 text-center border-t'>
      <div className='container mx-auto'>
        <p className='text-sm'>&copy; {new Date().getFullYear()} A.T. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
