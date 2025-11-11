import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CheckoutPage from "./pages/CheckoutPage";
import QuizPage from "./pages/QuizPage";

export type Gender = 'male' | 'female';

const App: React.FC = () => {
    const [selectedGender, setSelectedGender] = React.useState<Gender | null>(null);

    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route
                      path="/"
                      element={<LandingPage selectedGender={selectedGender} setSelectedGender={setSelectedGender}/>}
                  />
                  <Route
                      path="/checkout"
                      element={<CheckoutPage selectedGender={selectedGender} />}
                  />
                  <Route path="/quiz" element={<QuizPage/>} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
