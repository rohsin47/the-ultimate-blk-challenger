
export class Charity {
    charityId: number;
    charityName: string;
    description: string;

    constructor(id: number, name: string, description: string) {
        this.charityId = id;
        this.charityName = name;
        this.description = description;
    }
}
