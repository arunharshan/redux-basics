import { 
    FETCH_ALL_PERSON, 
    DELETE_PERSON,
    UPDATE_PERSON,
    SAVE_PERSON
  } from "../actions";


  const initialState =  
      {
    person: [
        {'id': 100, 'name': 'Arun Harshan', 'title' : 'Developer'},
        {'id': 101, 'name': 'Doe John', 'title' : 'Manager'},
        {'id': 102, 'name': 'Peter', 'title' : 'QA Tester'}
      ],
      toupdate :[]

  }
;

const personReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_ALL_PERSON : 
        console.log(FETCH_ALL_PERSON , action.type)
            return [
                ...state,
                { person: action.payload } 
                
            ]
        case  DELETE_PERSON : 
        let result = [...state.person];
            result = result.filter((item) => item.id !== action.payload  );
            return {person:result}
        case  UPDATE_PERSON : 
            let toUpdate = [...state.person];
            toUpdate =  toUpdate.filter((item) => item.id === action.payload);
            //    console.log(UPDATE_PERSON , {...state,toupdate : toUpdate });
                return {...state,toupdate : toUpdate };
        case SAVE_PERSON :
        console.log("saving", {person:[...state.person,action.payload]});
        //     {person:[...state.person,action.payload]}
        // ]);
        return { ...state ,person:[...state.person,action.payload]};
        default:
        console.log('default' , action.type)
        return state;

    }

} 

export default personReducer;