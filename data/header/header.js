import logo from '../../public/assets/img/logo/logo.png';

const extra_info = [
  {
    class:'my-account',
    title:'My Account',
    listItems : [
      {link:'/login',title:'My Account'},
      {link:'/wishlist',title:'Wishlist'},
      {link:'/cart',title:'Cart'},
      {link:'/checkout',title:'Checkout'},
      {link:'/register',title:'Create Account'},
    ]
  },
  {
    class:'lang',
    title:'Language',
    listItems : [
      {link:'/',title:'English'},
      {link:'/',title:'France'},
      {link:'/',title:'Germany'},
      {link:'/',title:'Bangla'},
    ]
  },
  {
    class:'currency',
    title:'Currency',
    listItems : [
      {link:'/',title:'USD - US Dollar'},
      {link:'/',title:'EUR - Ruro'},
      {link:'/',title:'GBP - Britis Pound'},
      {link:'/',title:'INR - Indian Rupee'},
    ]
  },
]

export {
  logo,
  extra_info
} ;

// export default header;