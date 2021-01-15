import React, { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export const renderRoutes = (routes) => (
    <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
            {routes.map((route, i) => {
                const Layout = route.layout || Fragment;
                const Component = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={props => (
                            <Layout>
                                {route.routes ? (
                                    renderRoutes(route.routes)
                                ) : (
                                        <Component {...props} />
                                    )}
                            </Layout>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
);

const routes = [
    {
        exact: true,
        path: '/questions/:questionId',
        component: lazy(() => import('./components/QuestionDetail'))
    },
    {
        exact: true,
        path: '/',
        component: lazy(() => import('./views/Home'))
    }
];

export default routes;
