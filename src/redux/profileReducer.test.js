import { addPostActionCreator, profileReducer } from "./profileReducer";
import "@testing-library/jest-dom";

test("new post should be added", () => {
  let action = addPostActionCreator("newText");
  let state = {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 23 },
      { id: 2, message: "Hi boys", likesCount: 12 },
    ],
  };
  let newState = profileReducer({ state }, action);

  expect(newState.posts.lengtn).toBe(5);
});
