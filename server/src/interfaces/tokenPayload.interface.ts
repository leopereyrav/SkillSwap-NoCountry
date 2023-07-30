export interface TokenPayload {
  userId: string;
  role: string[] | undefined;
  username?: string;
  email?: string;
}
