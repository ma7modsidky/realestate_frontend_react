import React from 'react'
import { useQuery } from 'react-query'
import { getAllProperties } from '../utils/api'
function useProperties() {
    // const {data, isError, isLoading, refetch} = useQuery({
    //     queryKey: "allProperties",
    //     getAllProperties,
    //     refetchOnWindowFocus: false,
    // })
    const {data, isError, isLoading, refetch} = useQuery(
        "allProperties",getAllProperties,{refetchOnWindowFocus: false,}
    )
    return {data, isError, isLoading, refetch}
}

export default useProperties