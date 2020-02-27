import { content } from '../assets/content/content';

const initalState = {
  device: window.innerWidth > 768 ? "desktop" : "mobile",
  displayContent: content.Projects,
  displayModeIsGrid: true
}

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'UPDATE_DEVICE':
      return {
        ...state,
        device: window.innerWidth > 768 ? "desktop" : "mobile"
      }
    case 'UPDATE_DISPLAY_CONTENT':
      const textboxValue = action.display
        .replace(/\s/g, "")
        .replace(/[^a-zA-Z0-9!@#$%^&'" ]/g, "")
        .toLowerCase();
      let searchResults = [];
      if (textboxValue !== "") {
        content.Projects.map(value => {
          const titleLC = value.header.title.replace(/\s/g, "").toLowerCase();
          const subtitleLC = value.header.subtitle
            .replace(/\s/g, "")
            .toLowerCase();
          const tagsLC = value.header.tags.map(value => {
            return value.replace(/\s/g, "").toLowerCase();
          });

          if (
            RegExp(textboxValue).test(titleLC) === true ||
            RegExp(textboxValue).test(subtitleLC) === true ||
            RegExp(textboxValue).test(tagsLC.map(value => value)) === true
          ) {
            searchResults.push(value);
          }
          return null;
        });
      } else {
        searchResults = content.Projects
      }
      return {
        ...state,
        displayContent: searchResults
      }
    case 'TOGGLE_DISPLAY_MODE':
      return {
        ...state,
        displayModeIsGrid: !state.displayModeIsGrid
      }
    default:
      return state
  }
}