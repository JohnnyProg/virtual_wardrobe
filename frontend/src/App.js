import './App.css';
import { Route, Routes, Navigate } from "react-router-dom"
import Login from './components/login';
import Register from './components/register';
import Navbar from './components/navbar';
import ClothesList from './components/clothes/list';
import AddClothes from './components/clothes/add';
import ClothesShow from './components/clothes/show';
import EditClothes from './components/clothes/edit'
import AddOutfits from './components/outfits/add';
import OutfitsList from './components/outfits/show';

function App() {
  const user = localStorage.getItem("token")

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {user && <> 
        <Route path='/' element={<Navigate replace to='clothes'/>}/>
        <Route path="/clothes" element={<Navbar />}>
          {/* list of clothes */}
          <Route index element={<ClothesList />} />
          {/* show form for adding new clothes */}
          <Route path="add" element={<AddClothes />} />
          {/* show 1 clothes (probably with edit)*/}
          <Route path="show/:id" element={<ClothesShow />} />
          <Route path="edit/:id" element={<EditClothes />} />
        </Route>
          <Route path="/outfits" element={<Navbar />}>
            {/* list of clothes */}
            <Route index element={<OutfitsList/>}/>
            {/* show 1 clothes (probably with edit)*/}
            <Route path=":id" />
            {/* show form for adding new clothes */}
            <Route path="add" element={<AddOutfits />}/>
          </Route>
          <Route path="/profile" element={<Navbar />}>
            {/* show user data (with possibility to edit) */}
            <Route index />
          </Route>

        </>}
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
      <br></br>
    </>
  );
}

export default App;
