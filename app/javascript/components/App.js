import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"
import ProtectedIndex from "./pages/ProtectedIndex"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = (props) => {
  const [apartments, setApartments] = useState([])
  useEffect(() => {
    readApartments()
  }, [])

  const readApartments = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }

  const createApartment = (apartment) => {
    console.log(apartment)
    // fetch("http://localhost:3000/apartments", {
    //   body: JSON.stringify(apartment),
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   method: "POST"
    // })
    // .then((response) => response.json())
    // .then((payload) => readApartments())
    // .catch((errors) => console.log("Apartment create errors:", errors))
  }


  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route path="/apartmentindex"element={<ApartmentIndex apartments={apartments} />} />
        <Route path="/protectedindex"element={<ProtectedIndex apartments={apartments} {...props} />} />
        <Route path="/apartmentshow" element={<ApartmentShow />} />
        <Route path="/apartmentnew" element={<ApartmentNew createApartment={createApartment} {...props}/>} />
        <Route path="/apartmentedit" element={<ApartmentEdit />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
