
export class Bet {
    constructor(
        public title: string,
        public owner__username: string,
        public amount: number,
        public apply_partial: boolean
        ){}
}