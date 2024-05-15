import { UserModel } from "./userModel"

export class WalletModel {
    id: number
    balance: number
    points: number
    users: UserModel
}