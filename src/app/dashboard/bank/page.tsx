'use client'

import React, { useState } from 'react'


export default function MainBankPage() {
    const [ url ] = useState('https://www.bcv.org.ve/');
    const [ result, setResult ] = useState<object>();
    const [ cargando, setCargando ] = useState(false);
    async function handleOnClick() {
        setCargando(true)
        const results = await fetch('/api/scraper', {
            method: 'POST',
            body: JSON.stringify({ url })
        }).then(r => r.json())
        setResult(results)
        setCargando(false)
    }



    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Sistema de Consulta</h2>

                <button
                    onClick={handleOnClick}
                    disabled={cargando}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {cargando ? 'Consultando...' : 'Consultar'}
                </button>
                <pre>
                    {result && JSON.stringify(result, null, 2)}
                </pre>

            </div>
        </div>
    )
}
