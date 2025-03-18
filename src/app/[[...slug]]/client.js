'use client'
 
import dynamic from 'next/dynamic'
 

{/*
    
    The 'use client' directive makes this file a Client Component.
    The dynamic import with ssr: false disables server-side rendering for the <App /> component, 
    making it truly client-only (SPA).
    */}

const App = dynamic(() => import('../../App'), { 
    ssr: false,
    loading: () => <div>Loading...</div>
 })
 
export function ClientOnly() {
  return <App />
}