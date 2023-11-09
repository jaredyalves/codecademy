import {createSlice} from '@reduxjs/toolkit';
import {addQuizToTopic} from '../topics/topicsSlice';

const quizzesSlice = createSlice({
  name: 'quizzes', initialState: {}, reducers: {
    addQuiz: (state, action) => ({
      ...state, [action.payload.id]: action.payload,
    }),
  },
});

export const thunkAddQuiz = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(addQuizToTopic({quizId: payload.id, topicId: payload.topicId}));
  };
};

export const selectQuizzes = state => state.quizzes;

export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;