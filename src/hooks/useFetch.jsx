import { useState, useEffect } from "react"

export const useFetch = (url) => {
    
    // loading
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            // loading
            setLoading(true)

            setLoading(false)

        }
    })
}