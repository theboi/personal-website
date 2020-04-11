import { content } from '../assets/content/content';

const initalState = {
  device: window.innerWidth > 768 ? "desktop" : "mobile",
  deviceWidth: window.innerWidth,
  deviceHeight: window.innerHeight,
  displayContent: content.Projects,
  displayModeIsGrid: false,
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
      .replace(/[^a-zA-Z0-9!@#$%^&'"]/g, "")
      .toLowerCase()
    let searchResults = [...content.Projects]

    content.Projects.map((value, index) => {
      // genre filter algo
      if (state.currentTab !== 'all') {
        if (!value.header.genre.includes(state.currentTab)) {
          searchResults = searchResults.filter(element => element.header.title !== value.header.title);
        }
      }

      // search filter algo
      if (textboxValue !== "") {
        const title = value.header.title.replace(/\s/g, "").toLowerCase()
        const display = value.header.display.replace(/\s/g, "").toLowerCase()
        const subtitle = value.header.subtitle
          .replace(/\s/g, "")
          .toLowerCase()
        const tags = value.header.tags.map(value => {
          return value.replace(/\s/g, "").toLowerCase()
        })

        if (
          !(RegExp(textboxValue).test(title) ||
            RegExp(textboxValue).test(display) ||
            RegExp(textboxValue).test(subtitle) ||
            RegExp(textboxValue).test(tags.map(value => value)))) {
          searchResults = searchResults.filter(element => element.header.title !== value.header.title);
        }
      }
    })

    return searchResults;
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