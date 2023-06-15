import genres from '../data/genres';

export interface Genre {
    id:number;
    name:string;
    image_background:string;
}
 const UseGenres = () => ({data:genres, isLoading:false, error:null})

export default UseGenres;