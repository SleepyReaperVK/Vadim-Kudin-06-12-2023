const themeReducer = (state = { isDarkTheme: false }, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return { ...state, isDarkTheme: !state.isDarkTheme };
      default:
        return state;
    }
  };
  
  export default themeReducer;