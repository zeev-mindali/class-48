//npm install redux

//state of Cats
export class CatState{
    public allCat:String[] = [];
}

//what action i will use...
export enum CatActionType{
    addCat = "addCat",
    deleteCat = "deleteCat",
    searchCat = "searchCat",
    downloadCats = "downloadCats",
}

//action data structure
export interface CatAction{
    type: CatActionType,
    payload?:any;
}

//which functions i will use
export function addCatFunction(newCat:String):CatAction{
    return {type: CatActionType.addCat, payload:newCat}
}

export function deleteCatAction(catName:string):CatAction{
    return {type: CatActionType.deleteCat}
}

export function searchCatAction(CatName:string):CatAction{
    return {type: CatActionType.searchCat, payload:CatName}
}

export function downloadCatAction(allCats:String[]):CatAction{
    return {type: CatActionType.downloadCats, payload:allCats}
}

//reducer - by it's unique function signature
export function CatReducer(
    currentState: CatState = new CatState(),
    action: CatAction):CatState
{
    const newState = {...currentState};
    switch(action.type){
        case CatActionType.addCat:
            newState.allCat = [...newState.allCat,action.payload];
        break;
        case CatActionType.deleteCat:
            newState.allCat = [...newState.allCat].filter(
                (item)=> item==action.payload
            )
        break;
        case CatActionType.downloadCats:
            newState.allCat = action.payload;
        break;
        case CatActionType.searchCat:

        break;
    }

    return newState;
}