// This File For Js Functions Tha is Shared Across Your Entire Application.

export const Cookies = {
    getCookie: (name) => {
        const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        return v ? v[2] : null;
    },

    setCookie: (name, value, days) => {
        var d = new Date();
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
        document.cookie =
            name + "=" + value + ";path=/;expires=" + d.toUTCString();
    },
    deleteCookie: (name) => {
        Cookies.setCookie(name, "", -1);
    },
};

export const updateObject = (oldObject, updatedObject) => {
    return {
        ...oldObject,
        ...updatedObject,
    };
};
