import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './AuthProvider/AuthProvider';
import { route } from './route/Route';

function App() {
  const { dark } = useContext(AuthContext);
  return (
    <div className={dark ? "bg-slate-100" : "bg-slate-900"}>
      <RouterProvider router={route} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
