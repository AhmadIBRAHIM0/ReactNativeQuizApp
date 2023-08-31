const useHttp = () => {

    const makeHttpGetRequest = async (url) => {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error(error);
            return error;
        }
    }
    return {
        makeHttpGetRequest
    }
}

export default useHttp


