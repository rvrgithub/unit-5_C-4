// action types
export const ADD_DATA ="ADD_DATA";
export const SORT ="SORT";
// Action Creators
export const addData =(data)=>({
    type:ADD_DATA,
    payload:data,
});
export const getData =()=> async (dispatch)=>{
    const data= await fetch("http://localhost:8080/users").then((x)=>x.json());
    dispatch(addData(data));

}
export const sort=(by)=>{
    return {
        type:SORT,
        payload:by,
    }
}