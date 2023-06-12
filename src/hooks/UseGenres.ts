import useData from "./useData";
export interface Genre {
    id:number;
    name:string;
}
 const UseGenres = () => useData<Genre>('../genres');

export default UseGenres;