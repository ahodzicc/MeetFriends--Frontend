export interface UserDTO {
    id: number;
    username: string;
    password: string;
    email: string;
    friends: UserDTO[];
}
