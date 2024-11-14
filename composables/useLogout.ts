import Cookie from 'js-cookie'

export function useLogout () {
    return Cookie.remove('at');
}