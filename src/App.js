/* eslint-disable react/jsx-no-comment-textnodes */
import "../src/styles/App.css";
import "../src/styles/responsive.css";
import HomePageWrapper from "./pages/home";

function App() {

  //sebelum login
  // return (
  //   <div className="App">
  //     <header className='contact-app__header'>
  //        Nav sebelum login. kalo klik halaman favorit masuknya ke login
  //       </header>
  //       <main>
  //         <Routes>
  //           <Route path='/' element={<Home />} />
  //           <Route path='/favorite' element={<Favorite />} />
  //           <Route path='/logout' element={<LoginPage />} />
  //           <Route path='*' element={<ErrorNotFound />} />
  //         </Routes>
  //       </main>
  //   </div>
  // );


  // sesudah login
  return (
    <div className="App">
      <header className='contact-app__header'>
        //Nav sesudah login. bisa masuk halaman favorit
        //dan ada button logout
        </header>
        <main>
          <HomePageWrapper />
        </main>
    </div>
  );
}

export default App;
