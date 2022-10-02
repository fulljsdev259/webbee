import React from 'react';
import { useCustomRoutes } from '../custom-hooks';

export function MainRouter() {
    const { router } = useCustomRoutes()
  return router
}
