import { data } from "@/lib/fake/data";

const getData = (path: string) => {
    const pathArr = path.slice(1).split("/");
    const postID = pathArr[2];
    const subPath = pathArr.slice(0,2).join("/");

    const subData = data.filter((item)=>{
        return item.hasOwnProperty(subPath)
      })[0][subPath];

    if(!!postID) {
        return subData.filter((post)=>(
            post.id === parseInt(postID)
        ))[0]
    }

    return subData;
}
 
export default getData;