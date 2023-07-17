import { TEMİZLE } from "../actions";

const INITIAL_STATE = {
    liste: [
        { id: 1, baslik: "", tamamlandi: false, },
        { id: 2, baslik: "", tamamlandi: true, },
        { id: 3, baslik: "", tamamlandi: false, }
    ]
};

export const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EKLE':
            return {
                ...state,
                liste: [
                    ...state.liste,
                    {
                        id: state.liste.length + 1,
                        baslik: action.payload,
                        tamamlandi: false,
                        
                    }
                ]
            };
        case "ISARETLE":
            return {
                ...state,
                liste: state.liste.map(item =>
                    item.id === action.payload ? { ...item, tamamlandi: !item.tamamlandi } : item
                )
            };
        case TEMİZLE:
            return {
                ...state,
                liste: state.liste.filter(item => !item.tamamlandi)
            };
        default:
            return state;
    }
};
