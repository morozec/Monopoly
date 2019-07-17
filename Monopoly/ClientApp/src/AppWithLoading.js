import React from 'react'
import { useAuth0 } from "./react-auto0-wrapper";
import Loading from "./components/Loading";
import App from './App'

export default function AppWithLoading() {
    const { loading } = useAuth0();
    return loading ? <Loading /> : <App />
}
