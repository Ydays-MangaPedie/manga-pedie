import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MangaPage from "./pages/MangaPage";
// import MenuPage from "./pages/MenuPage";
import './styles/App.css';

function App() {
  const haku = {imageUrl:"https://static.wikia.nocookie.net/p__/images/c/ca/Haku_Render.png/revision/latest?cb=20200514154731&path-prefix=protagonist",name:"Haku"}
 const mangaData = {
    imageUrl:
    "https://fr.web.img2.acsta.net/pictures/19/08/02/15/12/4423178.jpg",
    title: "naruto",
    resume:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur aspernatur dignissimos, consequatur soluta ratione officiis repellendus veniam voluptate aut totam quasi minima, quod, illum quos aperiam rerum temporibus nobis. Deleniti.",
    personnages:Array(5).fill({imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqE87vQ4Qm9dzfQ6bWDi8XALcWrAwfGpsyLqZQL_Mty3eNvOWjnKOHmV9VheHrBaf-Uk&usqp=CAU",name:"Naruto"}),
    arc:Array(5).fill({imageUrl:"https://cdn.shopify.com/s/files/1/0046/2779/1960/files/kirigakure_naruto.jpg?v=1582118135",title:"MissionKiri",personnages:Array(5).fill(haku)}),
};

const [mangas, setMangas] = React.useState(Array(15).fill(mangaData));

  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<HomePage mangas={mangas}/>}></Route>
      <Route path="manga/:mangaName" element={<MangaPage />}></Route>
      {/* <Route path='/menu' element={<MenuPage />}></Route> */}
    </Routes>
  </div>
  );
}

export default App;
