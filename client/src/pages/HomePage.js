import React, {lazy, Suspense} from 'react';
import PIZZAS from "../static_data/pizza_data";

const Pizza = lazy(() => import ("../components/Pizza"));

function Home() {
    return (
        <div className="container">
            <div className="row">
                { PIZZAS.map(pizza => (
                    <div className="col-md-4 p-3">
                        <div>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Pizza pizza={pizza} />
                            </Suspense>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default Home;