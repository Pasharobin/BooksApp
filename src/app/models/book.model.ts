export class Book {
    constructor(
        public name: string,
        public gener: string,
        public image: string,
        public description: string,
        public links: string[],
        public selected: boolean = false
    ) {}
}