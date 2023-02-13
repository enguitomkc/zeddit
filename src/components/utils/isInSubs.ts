const isInSubs = (search: string, subs: []) => {
    const isIn = subs.some((sub:any)=>(
        sub.hasOwnProperty(search)
    ))
    return isIn;
}
 
export default isInSubs;