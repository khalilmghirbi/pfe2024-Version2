import { UserDetail } from "./user-detail";

export interface TokenDetail extends UserDetail {
    token: string;
}
