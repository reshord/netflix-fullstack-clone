import useSwr from 'swr'
import fetcher from '../lib/fetcher'

const useFavorites = () => {
    const { data, isLoading, error, mutate } = useSwr('/api/favorites', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    return {
        data,
        isLoading,
        error,
        mutate
    }
}

export default useFavorites