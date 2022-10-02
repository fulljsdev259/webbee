import React from 'react'
import { Categories } from '../categories'
import { CategoryType } from '../category-type'

interface DashboardInterface {

}

export const Dashboard: React.FC<DashboardInterface> = () => {
    return (
        <div>
            <Categories/>
        </div>
    )
}