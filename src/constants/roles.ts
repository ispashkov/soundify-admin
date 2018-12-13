export enum Role {
  Admin = 1,
  Artist = 2,
  User = 3
}

interface Roles {
  ADMIN: number,
  ARTIST: number,
  USER: number
}

export default <Roles> {
  ADMIN: Role.Admin,
  ARTIST: Role.Artist,
  USER: Role.User
}
