
import index from './components/Index'
import cart from './components/Cart'


/*export default function(router){
  router.map({
    '/':{
      component:index
    },
    '/index':{
      component:index,
    },
    '/cart':{
      component:cart
    }
  }) 
}*/
export default[
  {
    path:'/',
    name:'Home',
    component:index
  },
  {
    path:'/cart',
    name:'Cart',
    component:cart,
  },
  {
    path:'*',
    redirect:'/'
  }
]
