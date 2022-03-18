import React
    , {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";

function App() {
    const {isLoading, users, error } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className="App">
            {/*{isLoading ? <h1>...Loadin</h1> : null}*/}
            {/*{error ? <h1>{error}</h1> : null}*/}
            {/*{JSON.stringify(users)}*/}
           <div style={{display: "flex", justifyContent: "space-around"}} >
               <PostContainer/>
               {/*<PostContainer2/>*/}
           </div>
        </div>
    );
}

export default App;
