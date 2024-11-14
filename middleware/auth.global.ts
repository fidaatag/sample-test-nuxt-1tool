// middleware/auth.js

import Cookie from "js-cookie";

export default defineNuxtRouteMiddleware((to, from) => {
    const token = Cookie.get('at') // atau menggunakan cookies jika menggunakan cookies
    
    // Jika tidak ada token, pengguna tidak boleh mengakses halaman member
    if (!token && to.path.startsWith('/member')) {
      return navigateTo('/login');
    }
  
    // Jika ada token dan mencoba mengakses halaman login, arahkan ke halaman utama (/) atau halaman lainnya
    if (token && to.path.startsWith('/login')) {
      return navigateTo('/');
    }
  });
  