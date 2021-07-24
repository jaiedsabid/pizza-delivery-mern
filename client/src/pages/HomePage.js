import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {load_All_Pizzas} from "../redux/ActionCreators";
import Pizza from "../components/Pizza";


function Home() {
    const dispatch = useDispatch();
    const {error, loading, pizzas} = useSelector(state => state.Pizza);

    useEffect(() => {
        dispatch(load_All_Pizzas());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row">
                {loading ?
                    <div className="col-12 p-3">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : error ?
                        <div className="col-12 p-3">
                            <div className="alert alert-danger">
                                Something went wrong.
                            </div>
                        </div> :
                        pizzas.map(pizza => (
                            <div key={pizza._id} className="col-md-4 p-3">
                                <div>
                                    <Pizza pizza={pizza}/>
                                </div>
                            </div>
                        ))

                }
            </div>
        </div>
    );
}

export default Home;