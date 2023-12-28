
import { AccordionDemo } from './accordian'

export const repertoires = 
    {
        "Frédéric Chopin: Ballades, Nocturnes, Waltzes":
                            {
                                    "Ballades": [
                                            {"Op. 23": ["Ballade No. 1 in G minor (composed 1835–36):(09:30)"]}
                                    ], 
                                    "Nocturnes": [
                                            {"Op. 9 (1830–32):": [ "Nocturne in B♭ minor:(05:45)", "Nocturne in E♭ major:(05:30)"]}, 
                                            {"Op. 55 (1843–44):": ["Nocturne in F minor:(04:53)"]},
                                            {"Op. posth. (1830):": [ "Nocturne in C♯ minor:(05:14)"]}, 
                                    ],
                                    "Waltzes": [
                                        {"Op. 34, Trois grandes valses brillantes:": ["Waltz in A♭ major (1835)", "Waltz in A minor (1831)", "Waltz in F major (1838)"]},
                                        {"Op. 42:": ["Waltz in A♭ major (1840)"]},
                                        {"Op. 64:": ["Waltz in D♭ major (Minute Waltz) (1847)", "Waltz in C♯ minor (1847)"]},
                                        {"1852: Two Waltzes, Op. posth. 69:": ["Waltz in A♭ major, L'Adieu (1835; WN 47)", "Waltz in C♯ minor (1847)"]},
                                        {"1855: Three Waltzes, Op. posth. 70:": ["Waltz in F minor (1841; WN 55)","Waltz in D♭ major (1829; WN 20)"]},
                                        {"Without opus number" : ["1868: Waltz in E minor (1830), B. 56, KK IVa/15, P. 1/15, WN 29", "1871–72: Waltz in E major (c. 1830), B. 44, KK IVa/12, P. 1/12, WN 18","1902: Waltz in A♭ major, B. 21, KK IVa/13, P. 1/13, WN 28","Waltz in A minor"]}

                                    ]
                            },
        "Ludwig van Beethoven: Sonatas":
                            {
                                    "Piano sonatas": [
                                        { "Op.13": ["No.8 'Pathétique' in C minor"] },
                                        {"Op. 27, No. 2": ["No.14 'Moonlight' in C sharp minor"]}
                                    ],
                                    "misc":[
                                        {"WoO 59, Bia 515":[" Bagatelle No. 25 'Für Elise' in A minor"]}
                                    ]
                            },
        "Wolfgang Amadeus Mozart: Sonatas":
                            {
                                    "Piano sonatas": [
                                        { "K. 545": ["No.16 in C major"] },
                                        { "K. 331 / 300i": ["No.11 in A major, Alla turca"]}
                                    ]
                            },
        "Claude Debussy: Suite bergamasque":
                            {
                                    "Suite bergamasque":[
                                        {"L. 75": ["No.3 Clair de lune"]}
                                    ]
                            },
        "Johann Sebastian Bach: Goldberg Variations, The Well-Tempered Clavier":
                            {
                                "Goldberg Variations":[
                                    {"BWV 988": ["Aria","Variatio 1. a 1 Clav.","Variatio 2. a 1 Clav.","Variatio 3. Canone all'Unisono. a 1 Clav.","Variatio 4. a 1 Clav.","Variatio 5. a 1 ô vero 2 Clav.","Variatio 6. Canone alla Seconda. a 1 Clav.","Variatio 7. a 1 ô vero 2 Clav. al tempo di Giga","Variatio 8. a 2 Clav.","Variatio 9. Canone alla Terza. a 1 Clav.","Variatio 10. Fughetta. a 1 Clav."]}
                                ],
                                "The Well-Tempered Clavier":[{"BWV 846": ["No. 1: Prelude and Fugue in C major"]}]
                            },
        "Pyotr Ilyich Tchaikovsky: The Seasons":
                            {
                                "The Seasons":[
                                    {"Op. 37a (or 37b)": ["June: Barcarolle"]}
                                ]
                            }
    }

export default function repertoire() {
    return (
    <div><AccordionDemo repertoires={repertoires} /></div>
    )
  }