import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Form from './ADMIN/Form';
import Form2 from './USER/Form2';
import Form3 from './ORDER/Form3';
import Form4 from './CART/Form4';
import Form5 from './CATEGORIES/Form5';
import ShowAdmin from './ADMIN/ShowAdmin';
import ShowCart from './CART/ShowCart';
import ShowCategory from './CATEGORIES/ShowCategory';
import ShowOrder from './ORDER/ShowOrder';
import ShowUser from './USER/ShowUser';
import EditAdmin from './ADMIN/EditAdmin';
import EditCart from './CART/EditCart';
import EditCategories from './CATEGORIES/EditCategories';
import EditOrder from './ORDER/EditOrder';
import EditUser from './USER/EditUser';

function App() {

  const route = createBrowserRouter([
    
    {
      path:"/admin",
      element: <Form/>,
    },
    {
      path:"/user",
      element: <Form2/>
    },
    {
      path:"/order",
      element: <Form3/>
    },
    {
      path:"/cart",
      element: <Form4/>
    },
    {
      path:"/category",
      element: <Form5/>
    },
    {
      path:"/showadmin",
      element: <ShowAdmin/>
    },
    {
      path:"/showcart",
      element: <ShowCart/>
    },
    {
      path:"/showcategory",
      element: <ShowCategory/>
    },
    {
      path:"/showorder",
      element: <ShowOrder/>
    },
    {
      path:"/showuser",
      element: <ShowUser/>
    },
    {
      path:"/editadmin/:id",
      element: <EditAdmin/>
    },
    {
      path:"/editcart/:id",
      element: <EditCart/>
    },
    {
      path:"/editcategory/:id",
      element: <EditCategories/>
    },
    {
      path:"/editorder/:id",
      element: <EditOrder/>
    },
    {
      path:"/edituser/:id",
      element: <EditUser/>
    }
  ])

  return (
    <div className="App">
       <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;