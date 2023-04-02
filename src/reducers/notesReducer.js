import {
  Note_List_Failure,
  Note_List_Success,
  Note_List_Request,
  Note_Create_Success,
  Note_Create_Failure,
  Note_Create_Request,
  Note_Update_Failure,
  Note_Update_Request,
  Note_Update_Success,
  Note_Delete_Failure,
  Note_Delete_Request,
  Note_Delete_Success,
} from "../constants/notesConstants";

export const notesReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case Note_List_Request:
      return { loading: true };
    case Note_List_Success:
      return {
        notes: action.payload,
        loading: false,
      };

    case Note_List_Failure:
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const noteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case Note_Create_Request:
      return { loading: true };

    case Note_Create_Success:
      return { loading: false, succes: true };
    case Note_Create_Failure:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const noteUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case Note_Update_Request:
      return { loading: true };

    case Note_Update_Success:
      return { loading: false, success: true };
    case Note_Update_Failure:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
export const noteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case Note_Delete_Request:
      return { loading: true };

    case Note_Delete_Success:
      return { loading: false, success: true };
    case Note_Delete_Failure:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
