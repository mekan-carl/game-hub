import useData from "./useData";
export interface Genre {
    id:number;
    name:string;
    image_background:string;
}
 const UseGenres = () => useData<Genre>('../genres');

export default UseGenres;