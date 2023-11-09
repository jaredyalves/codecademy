import {createSlice} from '@reduxjs/toolkit';

const topicsSlice = createSlice({
  name: 'topics', initialState: {}, reducers: {
    addTopic: (state, action) => ({
      ...state, [action.payload.id]: {...action.payload, quizIds: []},
    }), addQuizToTopic: (state, action) => ({
      ...state, [action.payload.topicId]: {
        ...state[action.payload.topicId], quizIds: [
          ...state[action.payload.topicId].quizIds, action.payload.quizId],
      },
    }),
  },
});

export const selectTopics = state => state.topics;

export const {addTopic, addQuizToTopic} = topicsSlice.actions;
export default topicsSlice.reducer;