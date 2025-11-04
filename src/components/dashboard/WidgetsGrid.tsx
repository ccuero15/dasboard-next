'use client'
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import {  IoCartOutline } from 'react-icons/io5'




export const WidgetsGrid = () => {

    const count = useAppSelector(state => state.counter.count)
    //const dispatch = useAppDispatch()
    return (
        <div className="flex flex-wrap justify-center p2">
            <SimpleWidget
                title={`Contador: ${count}`}
                subTitle='test'
                href='/dashboard/counter'
                label='Contador'
                icon={<IoCartOutline size={50} className="text-blue-500" />}
            />
            {/* <SimpleWidget /> */}
        </div>
    )
}
