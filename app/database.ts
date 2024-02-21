export const users = [
    { id: 0, email: 'wjones@clearc2.com', password: 'password' },
    { id: 1, email: 'apratt@clearc2.com', password: 'password' },
];

export const bookList = [
    { id: '0', title: 'The House in the Cerulean Sea' },
    { id: '1', title: 'The Eye of the World' },
    { id: '2', title: 'All Systems Red' },
];

interface BookDetails {
    title: string;
    author: string;
    cover: string;
    blurb: string;
    date: string;
    like: string;
}

export const allBookDetails: Record<string, BookDetails> = {
    0: {
        like: '',
        title: 'The House in the Cerulean Sea',
        author: 'T.J. Klune',
        cover: 'house.jpg',
        blurb: `A magical island. A dangerous task. A burning secret.

        Linus Baker leads a quiet, solitary life. At forty, he lives in a tiny house with a devious cat and his old records. As a Case Worker at the Department in Charge Of Magical Youth, he spends his days overseeing the well-being of children in government-sanctioned orphanages.
        
        When Linus is unexpectedly summoned by Extremely Upper Management he's given a curious and highly classified assignment: travel to Marsyas Island Orphanage, where six dangerous children reside: a gnome, a sprite, a wyvern, an unidentifiable green blob, a were-Pomeranian, and the Antichrist. Linus must set aside his fears and determine whether or not they’re likely to bring about the end of days.
        
        But the children aren’t the only secret the island keeps. Their caretaker is the charming and enigmatic Arthur Parnassus, who will do anything to keep his wards safe. As Arthur and Linus grow closer, long-held secrets are exposed, and Linus must make a choice: destroy a home or watch the world burn.
        
        An enchanting story, masterfully told, The House in the Cerulean Sea is about the profound experience of discovering an unlikely family in an unexpected place—and realizing that family is yours.`,
        date: 'March 16, 2020',
    },
    1: {
        like: '',
        title: 'The Eye of the World',
        author: 'Robert Jordan',
        cover: 'WoT01_TheEyeOfTheWorld.jpg',
        blurb: `The Wheel of Time turns and Ages come and pass, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth returns again. What was, what will be, and what is, may yet fall under the Shadow.

        Moiraine Damodred arrives in Emond’s Field on a quest to find the one prophesized to stand against The Dark One, a malicious entity sowing the seeds of chaos and destruction. When a vicious band of half-men, half beasts invade the village seeking their master’s enemy, Moiraine persuades Rand al’Thor and his friends to leave their home and enter a larger unimaginable world filled with dangers waiting in the shadows and in the light.`,
        date: 'January 15, 1990',
    },
    2: {
        like: '',
        title: 'All Systems Red',
        author: 'Martha Wells',
        blurb: `"As a heartless killing machine, I was a complete failure."

      In a corporate-dominated space-faring future, planetary missions must be approved and supplied by the Company. For their own safety, exploratory teams are accompanied by Company-supplied security androids. But in a society where contracts are awarded to the lowest bidder, safety isn’t a primary concern.
      
      On a distant planet, a team of scientists is conducting surface tests, shadowed by their Company-supplied ‘droid--a self-aware SecUnit that has hacked its own governor module and refers to itself (though never out loud) as “Murderbot.” Scornful of humans, Murderbot wants is to be left alone long enough to figure out who it is, but when a neighboring mission goes dark, it's up to the scientists and Murderbot to get to the truth.`,
        cover: 'murderbot.jpg',
        date: 'May 2, 2017',
    },
};
