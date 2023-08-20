export interface HttpResponse<T> {
  disallowed_reason?: string;
  error?: string;
  error_code?: number;
  ok: boolean;
  result: T;
}
