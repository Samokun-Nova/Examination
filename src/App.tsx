import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignUpForm from './SignUpForm';
import SignIn from './SignIn';
import Testimonials from './Testimonials';
import Reason from './Reason';
import Footer from './Footer';
import HospitalList from './HospitalList';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignIn />} /> C:\Users\USER\updated\my-react-app\src\.tsx
        </Routes>
      </Router>
      <HospitalList />
      <Testimonials />
      <Reason />
      <Footer />
    </div>
  );
}

export default App;
