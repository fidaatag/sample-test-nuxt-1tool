import Cookie from "js-cookie";

export interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  body?: any
  requireAuth?: boolean
}

export interface FetchResponse<T> {
  data?: T
  api_token?: string
}

export function useTemplateFetch<T>(url: string, options: FetchOptions = {}): Promise<FetchResponse<T>> {
  const token = Cookie.get('at'); // Get token from cookies if available
  const router = useRouter(); // Get the router instance for navigation

  // Add headers and token if necessary
  const headers: Record<string, string> = options.headers || {};
  if (token && options.requireAuth) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Default method is GET if not specified
  const method = options.method || 'GET';

  // Fetch data using Nuxt's useFetch with custom settings
  return $fetch(url, {
    ...options,
    method,
    headers,
    body: options.body || null,
  })
    .then((response: any) => {  // response type is 'unknown' initially
      const res = response as FetchResponse<T>;  // Explicitly cast it to FetchResponse<T>
      const { data, api_token } = res;

      // Check if the data is valid
      if (data || api_token) {
        return response;
      } else {
        return { success: false, message: response };
      }
    })
    .catch(err => {
      return { success: false, message: err.message };
    });
}
