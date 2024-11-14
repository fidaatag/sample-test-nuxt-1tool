import Cookie from 'js-cookie'
import { useTemplateFetch } from './useTemplateFetch'; // Pastikan untuk menyesuaikan path impor

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;

export function useLogin(credentials: { email: string; password: string }) {
  // Menggunakan custom fetch untuk memanggil API login

  return useTemplateFetch(`${apiUrl}/auth/user`, {
    method: 'POST',
    body: credentials,
    requireAuth: false,
  })
    .then(response => {

      if (response.api_token) {
        // Menyimpan token ke cookies jika login berhasil
        Cookie.set('at', response.api_token)
      }
      return response
    })
    .catch(err => {
        console.log(err)
      return { success: false, message: err.message }
    })
}
