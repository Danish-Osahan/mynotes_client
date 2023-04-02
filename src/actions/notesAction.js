import {
  Note_List_Failure,
  Note_List_Success,
  Note_List_Request,
  Note_Create_Failure,
  Note_Create_Request,
  Note_Create_Success,
  Note_Update_Failure,
  Note_Update_Request,
  Note_Update_Success,
  Note_Delete_Failure,
  Note_Delete_Request,
  Note_Delete_Success,
} from "../constants/notesConstants";

import axios from "axios";

export const listNotes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Note_List_Request,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/notes`, config);

    dispatch({
      type: Note_List_Success,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Note_List_Failure,
      payload: message,
    });
  }
};

export const createNote =
  (title, content, category, picture) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Note_Create_Request,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/notes/create`,
        { title, content, category, picture },
        config
      );

      dispatch({
        type: Note_Create_Success,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: Note_Create_Failure,
        payload: message,
      });
    }
  };

export const updateNoteAction =
  (id, title, content, category, picture) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Note_Update_Request,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/notes/${id}`,
        { title, content, category, picture },
        config
      );

      dispatch({
        type: Note_Update_Success,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: Note_Update_Failure,
        payload: message,
      });
    }
  };

export const deleteNoteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Note_Delete_Request,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/notes/${id}`, config);

    dispatch({
      type: Note_Delete_Success,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Note_Delete_Failure,
      payload: message,
    });
  }
};
