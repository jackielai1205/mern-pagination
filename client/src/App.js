import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import './App.css';
import history from './components/history';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const Createbookroute = withRouter(CreateBook);
const ShowBooklistroute = withRouter(ShowBookList);
const Showbookroute = withRouter(ShowBookDetails);
const Updatebookroute = withRouter(UpdateBookInfo);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes history = {history}>
            <Route exact path='/' element={<ShowBooklistroute/>} />
            <Route path='/create-book' element={<Createbookroute/>} />
            <Route path='/edit-book/:id' element={<Updatebookroute/>} />
            <Route path='/show-book/:id' element={<Showbookroute/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;