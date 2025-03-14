interface RequestOptions {
  headers?: HeadersInit;
  params?: Record<string, string>;
}

interface PostOptions extends RequestOptions {
  body: Record<string, unknown>;
}

interface Response<T> {
  code: number;
  data: T;
  msg: string;
}

const BASE_URL = '';

/**
 * Add query parameters to URL
 */
function addQueryParams(url: string, params?: Record<string, string>): string {
  if (!params) return url;
  const queryString = new URLSearchParams(params).toString();
  return `${url}${url.includes('?') ? '&' : '?'}${queryString}`;
}

/**
 * Wrapper for HTTP GET requests
 */
function get<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const url = addQueryParams(BASE_URL + path, options.params);
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((apiResponse) => (apiResponse as Response<T>).data);
}

/**
 * Wrapper for HTTP POST requests
 */
function post<T>(path: string, options: PostOptions): Promise<T> {
  const url = addQueryParams(BASE_URL + path, options.params);
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(options.body),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((apiResponse) => (apiResponse as Response<T>).data);
}

/**
 * Wrapper for HTTP GET requests with authentication
 */
async function getWithAuth<T>(
  path: string,
  token: string,
  options: RequestOptions = {}
): Promise<T> {
  return get<T>(path, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * Wrapper for HTTP POST requests with authentication
 */
async function postWithAuth<T>(
  path: string,
  token: string,
  options: PostOptions
): Promise<T> {
  return post<T>(path, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}

export { get, post, getWithAuth, postWithAuth };
