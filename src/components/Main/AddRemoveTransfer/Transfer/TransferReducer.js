export const reducer = (state, action) => {
  switch (action.type) {
    case "setSelectedSite":
      return { ...state, selectSite: action.payload };
    case "setSelectedCategory":
      return { ...state, selectedCategory: action.payload };
    case "setSelectedType":
      return { ...state, selectedType: action.payload };
    case "setNumberOfItems":
      return { ...state, numberOfItems: action.payload };
    case "setFiltredArray":
      return { ...state, filtredArray: action.payload };
    case "setSuccess":
      return { ...state, success: action.payload };
    case "setShowAllItemsAvailable":
      return { ...state, showAllItemsAvailable: action.payload };
    default:
      throw new Error();
  }
};
