import { useTemplateFetch } from "./useTemplateFetch";

export function useGetCourse() {
    return useTemplateFetch<{ courseId: number; courseName: string }[]>('/api/auth/course', {
      method: 'GET',
      requireAuth: true, // Memerlukan token
    })
      .then(response => {
        if (response.data) {
          return { success: true, message: 'Courses fetched successfully', data: response.data }
        }
        return { success: false, message: 'Failed to fetch courses' }
      })
      .catch(err => {
        return { success: false, message: err.message }
      })
  }
  