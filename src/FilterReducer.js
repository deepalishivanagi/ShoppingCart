export const initialstate = {
  PriceVal: 0,
  FilterState: { highestValue: 0, sortway: "", rate: "", categoryValue: [] },
};

export const FilterReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ClearBtnHandler":
      return {
        ...state,
        FilterState: {
          ...state.FilterState,
          priceFilter: "",
          highestValue: "",
          sortfilter: "",
          sortway: "",
          ratefilter: "",
          rate: "",
          categoryValue: [],
        },
      };

    case "PriceRangeHandler":
      return {
        ...state,
        FilterState: {
          ...state.FilterState,
          priceFilter: true,
          highestValue: action.value,
        },
      };

    case "LowtoHighHandler":
      return {
        ...state,
        FilterState: {
          ...state.FilterState,
          sortfilter: true,
          sortway: "lowtohigh",
        },
      };

    case "HightoLowHandler":
      return {
        ...state,
        FilterState: {
          ...state.FilterState,
          sortfilter: true,
          sortway: "hightolow",
        },
      };

    case "HighRateHandler":
      return {
        ...state,
        FilterState: { ...state.FilterState, ratefilter: true, rate: "high" },
      };

    case "MidRateHandler":
      return {
        ...state,
        FilterState: { ...state.FilterState, ratefilter: true, rate: "mid" },
      };

    case "LowRateHandler":
      return {
        ...state,
        FilterState: { ...state.FilterState, ratefilter: true, rate: "low" },
      };

    case "CategoryHandler":
      if (action.event.target.checked) {
        return {
          ...state,
          FilterState: {
            ...state.FilterState,
            sortbycategory: true,
            categoryValue: [
              ...state.FilterState.categoryValue,
              action.event.target.value,
            ],
          },
        };
      } else {
        return {
          ...state,
          FilterState: {
            ...state.FilterState,
            sortbycategory: true,
            categoryValue: state.FilterState.categoryValue.filter(
              (item) => item !== action.event.target.value
            ),
          },
        };
      }

    default:
      return state;
  }
};
