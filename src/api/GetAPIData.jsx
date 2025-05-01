export const getMoviesData = async()=>{
    try {
       const response = await fetch(
            "https://www.omdbapi.com/?i=tt3896198&apikey=576b136c&s=Avengers"
        )

        const data = response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}