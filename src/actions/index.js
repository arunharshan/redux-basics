 export const FETCH_ALL_PERSON = 'fetch_all_person';
export const DELETE_PERSON = 'delete_a_person';
export const UPDATE_PERSON ='update_a_person';
export const SAVE_PERSON = 'save_person';


export const fetchAllPerson = () => {
  //  console.log(savedPerson)
    return {
        type : FETCH_ALL_PERSON
    }
}

export const deletePerson = (id) => {
    return {
        type : DELETE_PERSON,
        payload : id
    }
}

export const updatePerson = (id) => {
    return {
        type : UPDATE_PERSON,
        payload : id
    }
}

export const savePerson = (data) => {
    console.log(data)
    return {
        type : SAVE_PERSON,
        payload : data
    }
}
