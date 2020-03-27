import { content } from '../assets/content/content';

const initalState = {
  device: window.innerWidth > 768 ? "desktop" : "mobile",
  deviceWidth: window.innerWidth,
  deviceHeight: window.innerHeight,
  displayContent: content.Projects,
  displayModeIsGrid: true,
  currentTab: 'all',
  searchBarInput: '',
  dropdownTabIsOpen: false,
  scrollPosition: 0
}

export const reducer = (state = initalState, action) => {
  const searchAlgo = () => {
    if (action.type === 'SET_CURRENT_TAB') {
      state.currentTab = action.current
    }
    const textboxValue = state.searchBarInput
      .replace(/\s/g, "")
      .replace(/[^a-zA-Z0-9!@#$%^&'" ]/g, "")
      .toLowerCase();
    let elimArray = [...content.Projects];
    elimArray.map((value, index) => {
      console.log(elimArray)


      // if (state.currentTab !== 'all' && !value.header.genre.includes(state.currentTab)) {
      //   elimArray.splice(index, 1)
      //   console.log("splice1")
      //   return null;
      // }


      // genre handling
      if (state.currentTab !== 'all') {
        console.log(state.currentTab)
        if (!value.header.genre.includes(state.currentTab)) {
          elimArray.splice(index, 1)
        }
      }

      // filtering with search
      if (textboxValue !== "") {
        const titleLC = value.header.title.replace(/\s/g, "").toLowerCase();
        const subtitleLC = value.header.subtitle
          .replace(/\s/g, "")
          .toLowerCase();
        const tagsLC = value.header.tags.map(value => {
          return value.replace(/\s/g, "").toLowerCase();
        });

        if (
          !(RegExp(textboxValue).test(titleLC) === true ||
            RegExp(textboxValue).test(subtitleLC) === true ||
            RegExp(textboxValue).test(tagsLC.map(value => value)) === true)) {
          elimArray.splice(index, 1)
          console.log(index)

          // return null;
        }
      }
    })
    return elimArray;
  }

  switch (action.type) {
    case 'UPDATE_DEVICE':
      return {
        ...state,
        device: window.innerWidth > 768 ? "desktop" : "mobile",
        deviceWidth: window.innerWidth,
        deviceHeight: window.innerHeight
      }
    case 'UPDATE_DISPLAY_CONTENT':
      return {
        ...state,
        displayContent: searchAlgo()
      }
    case 'TOGGLE_DISPLAY_MODE':
      return {
        ...state,
        displayModeIsGrid: !state.displayModeIsGrid
      }
    case 'SET_CURRENT_TAB':
      return {
        ...state,
        currentTab: action.current,
        displayContent: searchAlgo(),
      }
    case 'TOGGLE_DROPDOWN_TAB':
      return {
        ...state,
        dropdownTabIsOpen: !state.dropdownTabIsOpen
      }
    case 'SET_SEARCH_BAR_INPUT':
      return {
        ...state,
        searchBarInput: action.input,
      }
    case 'UPDATE_SCROLL_POSITION':
      return {
        ...state,
        scrollPosition: document.documentElement.scrollTop || document.body.scrollTop
      }
    default:
      return state
  }
}