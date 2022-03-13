import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import Card from './components/shared/Card';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
            {/*<Route path='/post/:id/:name' element={<Post />} />*/}
            {/*<Route path='/post' element={<Post />} />*/}
            <Route path='/post/*' element={<Post />} />
          </Routes>

          {/*<Card>*/}
          {/*  <NavLink to='/' activeClassName='active'>*/}
          {/*    Home*/}
          {/*  </NavLink>*/}
          {/*  <NavLink to='/about' activeClassName='active'>*/}
          {/*    About*/}
          {/*  </NavLink>*/}
          {/*</Card>*/}

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
