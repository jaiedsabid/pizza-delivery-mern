import React from 'react';
import PIZZAS from "../static_data/pizza_data";
import Pizza from "../components/Pizza";

function Home() {
    return (
        <div className="container">
            <div className="row">
                { PIZZAS.map(pizza => (
                    <div className="col-md-4 p-3">
                        <div>
                            <Pizza pizza={pizza} />
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default Home;