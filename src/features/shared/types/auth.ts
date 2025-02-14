export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: null | { id: string; email: string };
  loading: boolean;
  error: string | null;
}
