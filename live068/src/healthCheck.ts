export type HttpRequest = {
  ip: string;
  body: Record<string, any>;
}

export async function healthCheck(_request: HttpRequest) {
  return { statusCode: 201 };
}
