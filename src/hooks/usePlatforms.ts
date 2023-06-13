import { Platform } from "./UseGames";
import useData from "./useData";

interface Platforms{
    id:number;
    name:string;
    slug:string;
}

const usePlatforms = () => useData<Platform>('../platforms/lists/parents')

export default usePlatforms;