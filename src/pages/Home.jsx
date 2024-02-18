import React, { Suspense } from 'react'
import useAppRoutes from '../hooks/useAppRoutes'
import { Routes, Route } from 'react-router-dom';

export default function Home() {
    const routes = useAppRoutes();
  return (
    <div className='flex'>
        <Suspense>
            <Routes>
                {routes.map(({id, path, component: Component, isIndex, isExact}) => (
                    <Route 
                        key={id}
                        path={path}
                        element={
                            <Component />
                        }
                        index={isIndex}
                        isExact={isExact}
                    />
                ))}
            </Routes>
        </Suspense>
    </div>
  )
}
