import { useLoaderData } from "react-router-dom"
import { Card } from "../components/UI/Card";

export const Movies = () => {

    const moviesData = useLoaderData();
    // console.log(moviesData)
    return (
        <>
        <ul className="container grid grid-four--cols">

        {moviesData?.Search?.map((curMovie) => (
  <Card key={curMovie.imdbID} curMovie={curMovie} />
))}
        </ul>
        </>
    )
}