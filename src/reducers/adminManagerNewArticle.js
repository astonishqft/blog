const initialState = {
    title: '',
    subTitle: '',
    content: '',
    id: ''
};

export const actionTypes = {
    UPDATING_TITLE:"UPDATING_TITLE",
    UPDATING_SUB_TITLE: "UPDATING_SUB_TITLE",
    UPDATING_CONTENT:"UPDATING_CONTENT",
    UPDATING_TAGS:"UPDATING_TAGS",
    UPDATING_DESC:"UPDATING_DESC",
    SAVE_ARTICLE:"SAVE_ARTICLE",
    SET_ARTICLE_ID:"SET_ARTICLE_ID"
};

export const actions = {
    update_title: function (title) {
        return {
            type: actionTypes.UPDATING_TITLE,
            payload: {title}
        }
    },
    update_sub_title: function (subTitle) {
        return {
            type: actionTypes.UPDATING_SUB_TITLE,
            payload: {subTitle}
        }
    },
    update_content: function (content) {
        return {
            type: actionTypes.UPDATING_CONTENT,
            payload: {content}
        }
    },
    update_desc: function (desc) {
        return {
            type: actionTypes.UPDATING_DESC,
            payload: {desc}
        }
    },
    update_tags: function (tags) {
        return {
            type: actionTypes.UPDATING_TAGS,
            payload: { tags }
        }
    },
    save_article: function (data) {
        return {
            type: actionTypes.SAVE_ARTICLE,
            payload: {data}
        }
    }
};

export function reducer(state=initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATING_TITLE:
            return {
                ...state, title: action.payload.title
            };
        case actionTypes.UPDATING_SUB_TITLE:
            return {
                ...state, subTitle: action.payload.subTitle
            };
        case actionTypes.UPDATING_CONTENT:
            return {
                ...state, content: action.payload.content
            };
        case actionTypes.UPDATING_DESC:
            return {
                ...state, desc: action.payload.desc
            };
        case actionTypes.UPDATING_TAGS:
            return {
                ...state, tags: action.payload.tags
            };
        case actionTypes.SET_ARTICLE_ID:
            return {
                ...state, id: action.payload.id
            };
        default:
            return state;
    }
}