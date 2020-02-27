import { content } from '../assets/content/content';

const initalState = {
  device: window.innerWidth > 768 ? "desktop" : "mobile",
  displayContent: content.Projects,
  displayModeIsGrid: true,
  currentDisplayPage: {
    header: {
      display: "Thunkable November Hackathon 2019",
      title: "Total Defence Logo Design Competiton 2019",
      subtitle: "ChangeMakers Programme",
      date: "29/08/19",
      tags: ["SST", "Design"],
      image: "https://unsplash.it/200",
      link: "https://npgcc.org/?p=628",
    },
    // type: paragraph, image, link, button, quote, iframe
    body: [
      {
        type: "paragraph",
        value:
          "The InnoScience Challenge 2019 is an intra-school competiton held by my secondary school, SST, together with 3M Singapore. In teams of three to four, teams had to come up with a product to solve a real world problem, regarding the year's theme: Safety and Transport.",
      },
      {
        type: "image",
        value: "https://unsplash.it/200",
        meta: "3M InnoScience Logo",
      },
      {
        type: "link",
        value: "https://npgcc.org/?p=628",
        meta: "NPGCC 2016 Website",
      },
    ],
  },
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
    case 'SET_CURRENT_DISPLAY_PAGE':
      console.log(action.current)
        return {
          ...state,
          currentDisplayPage: action.current
        }
    default:
      return state
  }
}