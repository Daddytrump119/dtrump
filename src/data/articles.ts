export type EvidenceShot = { src: string; caption: string };

export type ArticleSection = {
  heading: string;
  paras: string[];
  figure?: EvidenceShot;
  pull?: string;
};

export type ArticleBlock = {
  cover: string;
  date: string;
  read: string;
  quote: string;
  lede: string[];
  timeline?: { date: string; event: string }[];
  sections: ArticleSection[];
  evidence: EvidenceShot[];
};

export const articles: Record<string, ArticleBlock> = {
  epstein: {
    cover: "/images/secrets/secret-epstein.png",
    date: "Filed · Vault 001",
    read: "8 min read",
    quote: "The friendship was public. The falling-out was public. The pages kept the name anyway.",
    lede: [
      "Before it was a congressional fight and a hashtag, it was a social circuit: Palm Beach, Manhattan, a private jet that tabloids treated like a character. Donald Trump and Jeffrey Epstein moved through the same rooms for years. That is not a rumor invented for this vault. It was photographed, written up in the society pages, and later explained away as a friendship that “went cold.”",
      "Trump has said he was not a fan of Epstein, that he was not a crawler, that he banned him from Mar-a-Lago after a falling-out in the mid-2000s. He has denied any knowledge of Epstein’s crimes. Epstein’s victims have not accused Trump of those crimes in court. Hold those sentences. The vault is not a prosecutor. It is a filing cabinet for the part that will not stay buried: his name kept showing up in the paper.",
      "After Epstein died in a Manhattan jail in 2019, the public got drips — flight logs, contact books, civil filings — then a much larger dump after Congress forced a transparency fight and the Justice Department missed its own deadline. Some entries are social. Some are hearsay. Some, the department itself later called unverified tip-line noise. A vault that pretends every PDF is a guilty verdict is doing the same trick as a campaign ad. The honest version is colder.",
    ],
    timeline: [
      { date: "1980s–2000s", event: "Same Palm Beach and Manhattan rooms. Photos. Gossip columns. A jet that became folklore." },
      { date: "Mid-2000s", event: "Trump says the friendship ended and Epstein was barred from Mar-a-Lago." },
      { date: "2019", event: "Epstein is arrested, dies in jail. The first public drips of logs and books begin." },
      { date: "2024–2025", event: "Congress pushes a broader release. The name count climbs. The argument moves to the floor." },
    ],
    sections: [
      {
        heading: "What the cameras already knew",
        paras: [
          "The oldest layer of this file is not a leak. It is a lifestyle section. Trump and Epstein were photographed together at parties, written about as men who ran in the same Florida and New York circles, and later quoted distancing themselves as if the earlier pictures had been taken by somebody else. A falling-out can be real. A falling-out does not delete a decade of introductions.",
          "Mar-a-Lago sits in the middle of that circuit like a club with a guest list and a press office. Palm Beach is small when the money is large. The later story — that Epstein was thrown out after a dispute — is Trump’s version, repeated often. The earlier story is the one the photographs still tell: they were not strangers.",
        ],
        figure: {
          src: "/images/press/palmbeach.jpg",
          caption: "Palm Beach from the air. The circuit was never a secret neighborhood.",
        },
      },
      {
        heading: "What the releases actually did",
        paras: [
          "When the bigger document sets landed, cable news treated every highlight like a verdict. That is how television works. The paper is messier. Trump’s name appears hundreds of times across the released stack. Appearance is not the same as a charge. Some pages are contact lists. Some are third-hand tips. Some are the kind of mention you get when you are famous and a trafficker collected famous names the way other men collect watches.",
          "The Department of Justice later flagged a slice of the dump as unverified noise — including material that had circulated as rumor before an election. That disclaimer matters. So does the other fact: a president who once posed for pictures with Epstein spent years saying the files should come out, then spent a year arguing about how they came out. The documents did not vanish. They multiplied.",
        ],
        figure: {
          src: "/images/press/doj.jpg",
          caption: "Robert F. Kennedy Department of Justice Building. The cabinet that kept missing its own deadline.",
        },
        pull: "A name in a file is not a conviction. A name that will not leave the file is still a story.",
      },
      {
        heading: "Congress, redactions, and the weekend delete button",
        paras: [
          "Washington’s fight was never only about what the pages said. It was about who got to hold the Sharpie. Redactions became the plot. Deadlines became the punchline. Members waved binders. Lawyers talked about victim privacy and then talked about politics, often in the same sentence.",
          "Web2 is a delete button with a press office. A story trends, a lawyer calls, a platform “contextualizes” it into the basement. That is why this file sits on a chain instead of a blog that can be quietly unpublished on a Sunday. The portraits, the timeline, the stills — they get a hash on Robinhood Chain, chain ID 4663. No editor. No weekend takedown.",
        ],
        figure: {
          src: "/images/press/capitol.jpg",
          caption: "The floor where the release fight stopped being a rumor and became a vote.",
        },
      },
      {
        heading: "What this vault is not",
        paras: [
          "If you want a courtroom, go to one. If you want this site to invent a charge the victims did not bring, you are in the wrong building. The Donkey Files keep the public part: the friendship that was photographed, the falling-out that was advertised, the pages that kept the name, and the year Washington argued about the Sharpie.",
          "$DTRUMP is the coin sitting on the cabinet. It is not a jury. It is how the cabinet gets a ticker. Open the evidence. Then buy a seat or walk out. The pages do not need your comment to stay filed.",
        ],
      },
    ],
    evidence: [
      { src: "/images/press/epstein.jpg", caption: "Jeffrey Epstein. Court photograph. Public record." },
      { src: "/images/press/trump.jpg", caption: "Official portrait. The name that kept appearing in the stack." },
      { src: "/images/secrets/secret-epstein.png", caption: "Vault still — the folder that would not stay closed." },
      { src: "/images/press/palmbeach.jpg", caption: "Palm Beach. Where the social circuit was never theoretical." },
      { src: "/images/press/maralago-club.jpg", caption: "Mar-a-Lago. The club in the later version of the story." },
      { src: "/images/press/doj.jpg", caption: "Main Justice. The building that kept promising a fuller dump." },
    ],
  },
  boxes: {
    cover: "/images/secrets/secret-boxes.png",
    date: "Filed · Vault 002",
    read: "7 min read",
    quote: "Classified paper does not belong in a club. The boxes did not get the memo.",
    lede: [
      "In August 2022 the FBI searched Mar-a-Lago. The affidavit and later filings described boxes of records taken from the White House — some marked classified — stored in a club that sells memberships and wedding photos. The pictures that leaked into the public were almost banal: cardboard, tape, a tiled floor, banners that say SECRET and TOP SECRET like a movie prop department had a sale.",
      "A bathroom became a punchline because the country needed one. A storage room became a crime scene because the banners were real. Trump said he had declassified everything with his mind, that it was a plant, that every president does this. The National Archives did not agree. A special counsel took the case. The world watched a former president get booked in Miami.",
      "Cases against sitting or returning presidents have a habit of going quiet when the building changes hands. The special-counsel track faded. The photographs did not. Once a box is on television it is a cultural object. You cannot unsell a still of classified folders next to a toilet.",
    ],
    timeline: [
      { date: "Jan 2021", event: "The White House empties. Boxes leave with the man. Archives starts asking where the paper went." },
      { date: "2021–2022", event: "NARA recovers some cartons. A subpoena follows. Negotiations do not end the story." },
      { date: "Aug 8, 2022", event: "FBI search of Mar-a-Lago. The warrant photos become a global still." },
      { date: "Jun 2023", event: "Miami booking. The mugshot becomes merch. The classified banners stay in the exhibit." },
    ],
    sections: [
      {
        heading: "The warrant and the photographs",
        paras: [
          "The raid was not a rumor invented on Telegram. It was a search warrant executed at a private club that also happens to be a residence, a political stage, and a tourist postcard. Agents carted out records. Filings later described markings that are not supposed to live next to a pool cabana. The public got a set of photographs that did more work than any closing argument: boxes, folders, gold tile, a chandelier doing comedy it did not audition for.",
          "Trump’s defense was a stack of sentences that could not all be true at once. He declassified it by thinking. It was his paper. It was planted. Everybody does this. The National Archives’ job is to disagree with that kind of poetry. A special counsel’s job was to turn the poetry into counts.",
        ],
        figure: {
          src: "/images/press/maralago-club.jpg",
          caption: "Mar-a-Lago, Palm Beach. The club on the warrant.",
        },
      },
      {
        heading: "A club is not a SCIF",
        paras: [
          "A Sensitive Compartmented Information Facility is a room with rules. Mar-a-Lago is a room with a wine list. Members come and go. Phones come and go. Wedding photographers come and go. If the paper mattered enough to stamp, it mattered enough not to leave it by the sink.",
          "The bathroom still is the one that traveled because it was simple. You do not need a clearance to understand a toilet and a classified banner in the same frame. That is why the picture outlived the docket. Dockets get postponed. Pictures get screenshots.",
        ],
        figure: {
          src: "/images/press/fbi.jpg",
          caption: "J. Edgar Hoover Building. The headquarters that sent the search.",
        },
        pull: "A bathroom is not a reading room. A membership club is not a vault — unless this one is.",
      },
      {
        heading: "What happened after the cameras left",
        paras: [
          "Miami booked him. The mugshot printed on hats. Then the case did what big cases do when the same man walks back into the White House: it lost oxygen. That is politics wearing a robe. It is not the same thing as the boxes never existing.",
          "This vault does not pretend to retry the Espionage Act. It keeps the exhibit the evening news already ran. The rumor after every raid is that the “real” boxes were somewhere else. Maybe. The public file is the one we have: the warrant, the photos, the booking, the arguments.",
        ],
        figure: {
          src: "/images/press/archives.jpg",
          caption: "National Archives Building. The office that said the paper was not his to keep.",
        },
      },
      {
        heading: "Onchain, the stack cannot move again",
        paras: [
          "Robinhood Chain does not store nuclear codes. It stores the story so a club manager cannot relocate it a second time. The clay still, the club façade, the Hoover Building, the Archives — they sit in one folder with a ticker on top.",
          "Open the evidence. Then buy $DTRUMP or don’t. The boxes are not waiting for your opinion.",
        ],
      },
    ],
    evidence: [
      { src: "/images/press/maralago-club.jpg", caption: "Mar-a-Lago. The address on the warrant." },
      { src: "/images/secrets/secret-boxes.png", caption: "Vault still — cartons, folders, gold tile." },
      { src: "/images/press/fbi.jpg", caption: "FBI headquarters. The search was not a blog post." },
      { src: "/images/press/archives.jpg", caption: "National Archives. The paper had a legal home. It was not a ballroom." },
      { src: "/images/press/whitehouse.jpg", caption: "The building the boxes left." },
      { src: "/images/press/palmbeach.jpg", caption: "Palm Beach from above. A club with a zip code and a guest list." },
    ],
  },
  hush: {
    cover: "/images/secrets/secret-hush.png",
    date: "Filed · Vault 003",
    read: "7 min read",
    quote: "Thirty-four counts. One payment. A jury that did not buy the invoice.",
    lede: [
      "In the last stretch of the 2016 campaign, a $130,000 payment went to Stormy Daniels through a lawyer and a shell so a story about a 2006 encounter would stay off the front page. Trump denied the encounter. The payment was real. The paperwork that followed — reimbursements booked like legal fees — is what a Manhattan jury later called a crime.",
      "May 2024: 34 counts of falsifying business records. It was the first time an American president was convicted of felonies. He called it a witch hunt, a rigged court, a Democrat city. The verdict did not ask for a comment.",
      "After the Supreme Court drew a line around official presidential acts, his lawyers tried to pull the hush-money case across it. The trial judge said no: the scheme was about a campaign and a private life, not the operation of the United States. Appeals kept the politics loud. The docket stayed a docket.",
    ],
    timeline: [
      { date: "2006", event: "The encounter Daniels described. Trump denied it then and later." },
      { date: "Oct 2016", event: "$130,000 moves through Michael Cohen and a shell to buy silence before Election Day." },
      { date: "2018", event: "Cohen pleads. The reimbursement story stops being a tabloid and becomes a file." },
      { date: "May 30, 2024", event: "Manhattan jury: guilty on 34 counts of falsifying business records." },
    ],
    sections: [
      {
        heading: "The $130,000 silence",
        paras: [
          "Hush money is not new in New York. Putting it through a company like a retainer is how it gets a count number. The plot is almost boring until you remember the calendar: October 2016, Access Hollywood still ringing in the walls, a second story about a porn actress that the campaign did not want on the same chyron.",
          "Cohen made the payment. Trump reimbursed him in chunks booked as legal expenses. That is the state’s case in one sentence. The defense called it standard bookkeeping and a political prosecution. The jury heard both and came back with thirty-four.",
        ],
        figure: {
          src: "/images/press/manhattan-court.jpg",
          caption: "New York County Courthouse. Where the invoice got a docket number.",
        },
      },
      {
        heading: "A verdict, then a theory of immunity",
        paras: [
          "The conviction was historic and, in the same week, treated like weather. He was already campaigning. The sentence was delayed, appealed, argued as something that should evaporate because a president’s official acts are shielded. The hush-money books were not an official act. They were a private reimbursement dressed as legal work.",
          "That distinction is the whole second half of the file. If every campaign cover-up can be renamed an official act, the invoice dies. The trial judge did not rename it. Higher courts became the next stage. The vault does not retry the jury. It keeps the score where a Saturday interview cannot launder it into a fundraising joke.",
        ],
        figure: {
          src: "/images/press/scotus.jpg",
          caption: "The Supreme Court. Official acts got a shield. This invoice was not one.",
        },
        pull: "Hush money is an old sport. The docket number is new.",
      },
      {
        heading: "Why the books are onchain",
        paras: [
          "A conviction can be spun. A photograph of the courthouse and a clay ledger sitting next to it is harder to spin if they live in the same folder. Robinhood Chain is not the District Attorney. It is the photocopier that does not get tired.",
          "Lower Manhattan is where the tape already knew how to price a headline. The same skyline that hosts the Exchange hosted the trial. Money is the plot. Always was. $DTRUMP is how the photocopier gets a ticker. Read the counts. Then decide if you want a seat.",
        ],
        figure: {
          src: "/images/press/nyc.jpg",
          caption: "Lower Manhattan. The city that booked the records and the tape.",
        },
      },
    ],
    evidence: [
      { src: "/images/secrets/secret-hush.png", caption: "The ledger. Cash. A gavel. The invoice that talked." },
      { src: "/images/press/manhattan-court.jpg", caption: "New York County Courthouse. Thirty-four counts lived here." },
      { src: "/images/press/nyc.jpg", caption: "The skyline that hosted the trial and the tape." },
      { src: "/images/press/trump.jpg", caption: "Defendant and candidate, often in the same week." },
      { src: "/images/press/scotus.jpg", caption: "Immunity arguments came later. The books came first." },
      { src: "/images/tokenomics-coins.png", caption: "Money is the plot. The clay already knew." },
    ],
  },
  tariffs: {
    cover: "/images/secrets/secret-tariffs.png",
    date: "Filed · Vault 004",
    read: "7 min read",
    quote: "One announcement. Indexes cracked. Somebody always knew the minute.",
    lede: [
      "Tariffs are supposed to be legislation and hearings. In the Trump years they often arrived like a phone alert: a percentage, a country, a deadline, posted before Tokyo finished lunch. Desks in Chicago and Singapore built models around the cadence. That is not a conspiracy. That is how the tape started to breathe.",
      "When a Liberation Day-style blast landed, equities and crypto took the punch together. Liquidations printed in the billions. People who were long the rumor got flattened by the timestamp. The remote in the hero film is a joke. The candles were not.",
      "The rumor that never dies is simple: if a sentence can move a market, the sentence is an instrument. Who heard it first is the part regulators mumble about and Telegram rooms scream about. This vault does not have subpoena power. It has the exhibit — announcement, crash, recovery, repeat.",
    ],
    timeline: [
      { date: "2018–2019", event: "First-term tariff wars. China, steel, soy. The podium learns it can move a close." },
      { date: "2025", event: "Liberation Day-style blasts. Broad percentages. Indexes and crypto print the same bruise." },
      { date: "Same hour", event: "Ports and options desks feel it before the speechwriters finish the encore." },
      { date: "Every cycle", event: "Recovery narratives. Then another sentence. The remote stays on the desk." },
    ],
    sections: [
      {
        heading: "Policy as a push notification",
        paras: [
          "A tariff is a tax on a crate. It is also a headline with a number in it. When the number arrives as a social post instead of a committee print, the people who unload ships are not the first to know. The people who trade the rumor are.",
          "That is the file. Not a secret handshake in a gold bathroom. A public instrument used like a private timing tool. Trump sold tariffs as patriotism. Traders sold them as volatility. Retail sold them as screenshots. All three can be true at once.",
        ],
        figure: {
          src: "/images/press/whitehouse.jpg",
          caption: "The South Portico. Where a percentage becomes a worldwide alert.",
        },
      },
      {
        heading: "The tape, the port, and the bruise",
        paras: [
          "The New York Stock Exchange is where a sentence becomes a candle. You can watch it. You do not need a leak. Liberation Day-style announcements shoved indexes and crypto in the same direction because leverage does not care whether the story is about Detroit or a memecoin.",
          "Then there is the slower picture: containers stacked at the Port of Los Angeles, contracts rewritten, importers who cannot hedge a mood. The hero film drops bombs because the joke is visual. The real wreckage is a close and a crate that suddenly costs more.",
        ],
        figure: {
          src: "/images/press/port.jpg",
          caption: "Port of Los Angeles. A tariff is a tax on a crate before it is a tweet.",
        },
        pull: "If a post can move a market, the timestamp is the exhibit.",
      },
      {
        heading: "The front-run rumor",
        paras: [
          "Front-running is the word rooms use when they do not have a subpoena. Sometimes it is just people reading the same account at different speeds. Sometimes it is not. This vault will not pretend it opened the phone. It will keep the pattern in public: announcement, crack, bounce, encore.",
          "Keep this page next to the $TRUMP dump. Same man. Same instinct: a public moment that prints a private winner. Robinhood Chain is a funny place to archive a tariff. It is the first place a meme looks when the next sentence hits the wire.",
        ],
        figure: {
          src: "/images/press/nyse.jpg",
          caption: "New York Stock Exchange. Where a sentence becomes a candle.",
        },
      },
    ],
    evidence: [
      { src: "/images/press/nyse.jpg", caption: "The Exchange. The close that learned to fear a percentage." },
      { src: "/images/secrets/secret-tariffs.png", caption: "Vault still — the remote and the red tape." },
      { src: "/images/press/whitehouse.jpg", caption: "The portico that moved more than votes." },
      { src: "/images/press/port.jpg", caption: "Containers. The slow bruise under the fast candle." },
      { src: "/images/gallery-bombs.png", caption: "The sky after the click. The film is a joke. The liquidations were not." },
      { src: "/images/press/trump.jpg", caption: "The podium. The instrument." },
    ],
  },
  memecoin: {
    cover: "/images/secrets/secret-memecoin.png",
    date: "Filed · Vault 005",
    read: "6 min read",
    quote: "Official coin. Opening fireworks. Then the floor disappeared.",
    lede: [
      "When an official Trump meme coin lit the tape in January 2025, it did what meme coins do when a celebrity is the liquidity: a vertical open, a victory lap on television, and a staircase down that left late buyers holding the bag. Early wallets and insider-shaped curves ate. The chart became a punchline with a contract address.",
      "He did not need a dark web. The launch was the spectacle. The dump was the afterparty. Every cycle pretends the next official coin will be different. The wallets do not pretend.",
      "A president’s brand on a token is a marketing event, not a fiduciary duty. Unlocks, insider allocations, and the first ninety minutes are the whole story. If you did not read them, you were the exit.",
    ],
    timeline: [
      { date: "Jan 17, 2025", event: "Official $TRUMP coin launches into a vertical open. Television treats it like a rally." },
      { date: "First hours", event: "Early wallets and the curve eat. Late money arrives for the screenshot." },
      { date: "The week after", event: "The floor vanishes. Unlocks and allocations become the only chapter that mattered." },
      { date: "This vault", event: "$DTRUMP files the exhibit so nobody confuses the two donkeys." },
    ],
    sections: [
      {
        heading: "The launch that was the product",
        paras: [
          "Official is a hell of a word on a token. It sounds like a treasury. It is a brand license with a bonding curve. The open printed numbers that made people who had never read a liquidity pool feel like they had missed a generational trade. They had. They were the trade.",
          "Trump Tower is a useful photograph here. The building sold a name long before a contract address did. The coin was the same sale at block speed: look up, buy the letters, discover the balcony already sold.",
        ],
        figure: {
          src: "/images/press/trump-tower.jpg",
          caption: "Trump Tower. The name was the product before the ticker was.",
        },
      },
      {
        heading: "Official is not the same as fair",
        paras: [
          "Read the unlocks. Then read them again. Then look at who transferred in the first block. That is the entire due diligence. Everything else is a hat.",
          "This page is not financial advice and it is not a hit piece dressed as one. It is the exhibit: official coin, opening pop, vanished floor. $DTRUMP is a different donkey on a different chain. This file exists so nobody confuses the two — and so nobody forgets how the last circus ended.",
        ],
        figure: {
          src: "/images/press/nyse.jpg",
          caption: "The same tape, different ticker. A candle does not care about the last name.",
        },
        pull: "If you did not read the unlocks, you were the exit.",
      },
      {
        heading: "Why the dump sits in the vault",
        paras: [
          "Campaigns will tell you the coin was a joke that got out of hand. The wallets will tell you it went exactly as designed. The vault keeps both sentences next to the chart.",
          "If you buy anything with a famous last name on it, look at who got out in the first hour. The vault will still be here when you come back. $DTRUMP is optional. The warning is not.",
        ],
      },
    ],
    evidence: [
      { src: "/images/secrets/secret-memecoin.png", caption: "Retail looked up. The balcony looked down." },
      { src: "/images/press/trump-tower.jpg", caption: "The building that taught the world to buy a last name." },
      { src: "/images/press/nyse.jpg", caption: "Opening pop. Then the floor." },
      { src: "/images/buy-hold.png", caption: "A clay win. The chain did not agree." },
      { src: "/images/token-logo.png", caption: "$DTRUMP — a different donkey. Same warning." },
      { src: "/images/press/trump.jpg", caption: "The brand on the token. Not a fiduciary." },
    ],
  },
  taxes: {
    cover: "/images/secrets/secret-taxes.png",
    date: "Filed · Vault 006",
    read: "6 min read",
    quote: "Billionaire on television. A near-zero on the federal line.",
    lede: [
      "The New York Times spent years reconstructing Trump’s tax returns after Congress pried a set loose. The portrait was not a patriot writing a fat check to the Treasury. It was a man who, in multiple years, paid little or nothing in federal income tax while selling the country a gold-plated myth of success.",
      "Losses, depreciation, and refunds are legal sports if the forms are clean. The politics of a billionaire lecturing workers about paying their share are not. A $750 line item became a chant. He said it was smart. The Times said it was the math.",
      "The brand required a genius who wins so hard the IRS should thank him. The paper required a story about carryforwards and write-offs. Both can exist. Only one of them was on the ads.",
    ],
    timeline: [
      { date: "1990s–2000s", event: "Huge reported losses and carryforwards. The myth of endless winning starts to need a footnote." },
      { date: "2016–2017", event: "Reporting later puts federal income tax near $750 in key years. The number becomes a chant." },
      { date: "2020", event: "The Times reconstruction lands. Congress fights over the returns themselves." },
      { date: "This vault", event: "The contradiction stays public: the man on television and the line on the return." },
    ],
    sections: [
      {
        heading: "The returns that escaped",
        paras: [
          "Presidents used to release their returns because the country had a habit. Trump broke the habit and called it privacy. The paper came out anyway — first as reporting, then as a political fight over the actual forms. What spilled was not a single cartoon of a deadbeat. It was a long pattern: years where the federal income-tax line looked like a rounding error next to the gold letters on the building.",
          "You can be good at depreciation and still be a lousy sermon. The file is the sermon. A man who sold himself as the richest kind of success paid, in some years, less federal income tax than a teacher with a second job.",
        ],
        figure: {
          src: "/images/press/treasury.jpg",
          caption: "Treasury Building. The office that was supposed to get the check.",
        },
      },
      {
        heading: "What the myth needed",
        paras: [
          "The ads never showed a carryforward. They showed a penthouse and a jet and a finger pointed at people who “don’t win.” The returns showed a different sport: paper losses doing years of work. Legal if clean. Ugly if you are the one giving the speech about makers and takers.",
          "This vault does not audit you. It keeps the contradiction in public. Robinhood Chain is a strange place for a 1040. It is a good place for a myth that keeps trying to close the folder.",
        ],
        figure: {
          src: "/images/press/nyc.jpg",
          caption: "The skyline that hosted the brand and the reporting.",
        },
        pull: "He said it was smart. The returns said it was the math.",
      },
      {
        heading: "Filed next to the coins",
        paras: [
          "Look at the clay coins after you look at the Treasury. One photographs better. That is the whole brand. $DTRUMP does not claim to be a tax policy. It claims the folder stays open.",
          "If you came for a gotcha that the man never paid a bill, you will be disappointed by the finer print. If you came for the gap between the television and the line, you are in the right cabinet.",
        ],
      },
    ],
    evidence: [
      { src: "/images/secrets/secret-taxes.png", caption: "The return that did not match the brand." },
      { src: "/images/press/treasury.jpg", caption: "United States Treasury. Where the fat check was supposed to land." },
      { src: "/images/press/trump.jpg", caption: "The salesman of the gold-plated myth." },
      { src: "/images/press/nyc.jpg", caption: "The city that printed the reconstruction." },
      { src: "/images/about-farm.png", caption: "A clay fortune. A paper zero." },
      { src: "/images/tokenomics-coins.png", caption: "Coins photograph better than deductions." },
    ],
  },
  georgia: {
    cover: "/images/secrets/secret-georgia.png",
    date: "Filed · Vault 007",
    read: "7 min read",
    quote: "A recorded line. A number the country still recites.",
    lede: [
      "January 2, 2021. A president on the phone with Georgia’s secretary of state, Brad Raffensperger, and a room full of lawyers. The sentence that escaped: find 11,780 votes — one more than he needed. The official on the other end did not find them. Someone recorded the hour. The audio found everyone else.",
      "Trump said he was asking for an honest count. Fulton County prosecutors heard a pressure campaign. A grand jury later returned an indictment that named him and a circle of allies. The politics around the case kept moving. The number did not.",
      "This is not a rumor that needs a blogger. It is a recording. You can hear the ask. You can hear the refusal. Remixes are for campaigns. The vault keeps the raw line.",
    ],
    timeline: [
      { date: "Nov 2020", event: "Georgia certifies Biden. Trump’s team files challenges. The math does not move enough." },
      { date: "Jan 2, 2021", event: "The call. “Find 11,780 votes.” Raffensperger does not find them. The tape exists." },
      { date: "Aug 2023", event: "Fulton County indictment. A mugshot. A calendar that politics will try to outrun." },
      { date: "After", event: "The case bends with the national weather. The number stays a number." },
    ],
    sections: [
      {
        heading: "The call",
        paras: [
          "An hour is a long time to stay on a line if you are only asking a clerical question. The recording is the reason this file does not need adjectives. Trump walks through theories, names, precincts. He lands on a number that is not poetry. It is arithmetic: one more than the margin.",
          "Raffensperger and the lawyers on his side keep saying the data is the data. That refusal is the other half of the exhibit. A president asked a state official to find votes. The official said the votes were not there. Someone hit record.",
        ],
        figure: {
          src: "/images/press/georgia-capitol.jpg",
          caption: "Georgia State Capitol, Atlanta. The state that would not find the number.",
        },
      },
      {
        heading: "The indictment and the weather",
        paras: [
          "Fulton County put the call inside a larger racketeering story about fake electors and a pressure campaign that did not stop at one phone. Trump called it a witch hunt from a Democrat prosecutor. The mugshot became another merch drop. Then the national weather changed, and big cases against him learned how to stall.",
          "The vault is not the Fulton calendar. The vault is the sentence. Cases can be delayed. Audio does not forget a number.",
        ],
        figure: {
          src: "/images/press/whitehouse.jpg",
          caption: "The other end of the line. A president asking a state to find a margin.",
        },
        pull: "“Find 11,780 votes.” The official did not. The tape did.",
      },
      {
        heading: "Why the tape is the file",
        paras: [
          "On Robinhood Chain the voicemail does not get lost. You can argue about intent in a classroom. You cannot argue the recording out of existence without sounding like a man arguing with a microphone.",
          "$DTRUMP is optional. The 11,780 is not. The clay red phone is a joke that tells the truth faster than a brief. Open the evidence. Then decide if you still think it was just a clerical question.",
        ],
      },
    ],
    evidence: [
      { src: "/images/secrets/secret-georgia.png", caption: "The red phone. The number on the pad." },
      { src: "/images/press/georgia-capitol.jpg", caption: "Georgia State Capitol. The refusal lived here." },
      { src: "/images/press/trump.jpg", caption: "The voice on the line." },
      { src: "/images/press/whitehouse.jpg", caption: "The building that placed the call." },
      { src: "/images/press/capitol.jpg", caption: "The week the count was still a national fight." },
      { src: "/images/gallery-remote.png", caption: "Another remote. Same instinct." },
    ],
  },
  jan6: {
    cover: "/images/secrets/secret-jan6.png",
    date: "Filed · Vault 008",
    read: "8 min read",
    quote: "A crowd at the door. A feed in the dining room. An hour that still is not over.",
    lede: [
      "January 6, 2021 is not a theory. It is video. A rally at the Ellipse. A walk down Pennsylvania Avenue. Broken glass. A gallows joke that stopped being a joke. Officers injured. Deaths in the orbit of the day. A president who watched television while the building filled.",
      "Committees published timelines. Phones were subpoenaed. Impeachments happened and failed to remove him. He now calls the rioters hostages or patriots depending on the week. The file calls them a date.",
      "This page does not retry the Senate. It does not decide the nouns. It keeps the hour where the world’s most famous democracy looked like a livestreamed riot — and where the man with the nuclear codes was a spectator with a remote.",
    ],
    timeline: [
      { date: "Morning", event: "Ellipse rally. The crowd is told to fight and told they will walk to the Capitol." },
      { date: "Afternoon", event: "The building is breached. The House and Senate stop the count. Officers bleed." },
      { date: "The dining room", event: "He watches the feed. Calls go out. The delay becomes its own exhibit." },
      { date: "Night", event: "The count finishes. The footage does not." },
    ],
    sections: [
      {
        heading: "The footage, not the slogan",
        paras: [
          "You can argue about the speech like a literature seminar. You cannot argue the broken window. The west front of the Capitol is a public-domain photograph for a reason: it is the country’s building. On that Wednesday it was a set for a mob that had been invited down the avenue.",
          "Some people walked. Some people smashed. Some people died in the orbit of the day. Officers were beaten. The vice president was moved. The count stopped. Those are not vibes. Those are minutes on a clock.",
        ],
        figure: {
          src: "/images/press/capitol.jpg",
          caption: "United States Capitol, west front. Public domain. The building does not move.",
        },
      },
      {
        heading: "The remote in the dining room",
        paras: [
          "The darkest simple fact in the hour is boredom as power. A president with a television, a crowd he had pointed at the building, and a stretch of time where the people asking him to call it off were not the first priority. The hero film puts a remote in a clay hand because that is the image the country already has.",
          "He later reframed the rioters as hostages, patriots, tourists, depending on the merch drop. The file does not reframe. It keeps the date. Onchain media cannot storm a building. It can refuse to let the hour get memory-holed into a T-shirt.",
        ],
        figure: {
          src: "/images/press/whitehouse.jpg",
          caption: "The other end of the avenue. The feed was on.",
        },
        pull: "The building is public domain. The hour is not a merch drop.",
      },
      {
        heading: "What this vault is not",
        paras: [
          "This page is not a Senate. It is not a pardon office. It is not a place that will tell you every person in the crowd had the same intent. It is a place that will not let the west front get replaced by a slogan.",
          "The clay still of the dome under a storm sits next to the real stone. Together they are the exhibit. $DTRUMP is the coin on the folder. Buy it or don’t. January 6 does not need a ticker to have happened.",
        ],
        figure: {
          src: "/images/press/capitol2.jpg",
          caption: "The west front, again. If you need two photographs, the first one already worked.",
        },
      },
    ],
    evidence: [
      { src: "/images/press/capitol.jpg", caption: "United States Capitol, west front. Public domain." },
      { src: "/images/press/capitol2.jpg", caption: "Same building. The file does not get tired." },
      { src: "/images/secrets/secret-jan6.png", caption: "Vault still — the dome under a clay storm." },
      { src: "/images/press/whitehouse.jpg", caption: "The dining-room end of the avenue." },
      { src: "/images/press/trump.jpg", caption: "The man who watched the feed." },
      { src: "/images/press/doj.jpg", caption: "Main Justice. The cases, the delays, the weather." },
    ],
  },
  hollywood: {
    cover: "/images/secrets/secret-hollywood.png",
    date: "Filed · Vault 009",
    read: "6 min read",
    quote: "The bus tape did not blink. The country did.",
    lede: [
      "A hot mic on an Access Hollywood bus. Donald Trump and Billy Bush, recorded in 2005, talking about women the way a certain kind of man talks when he thinks the tape is off. The tape was on. “Grab them by the pussy” became a global sentence in a single Friday news cycle in October 2016.",
      "He released a video apology. He called it locker-room talk. He won the Electoral College the next month. That is the American plot twist. The audio did not get quieter because the map did not care.",
      "This file is not a discovery and it is not a rumor. It is a reminder that some of the worst material in the vault is not a leak. It is a recording he made of himself. Campaigns bury it under the next outrage. The cassette does not.",
    ],
    timeline: [
      { date: "2005", event: "Access Hollywood bus. Hot mic. The sentences that would wait eleven years." },
      { date: "Oct 7, 2016", event: "The Washington Post publishes the tape. A Friday that felt like an ending." },
      { date: "Oct 8, 2016", event: "A video apology. “Locker-room talk.” The map starts pretending it did not hear." },
      { date: "Nov 2016", event: "He wins. The audio does not get quieter. It just gets filed under “already priced in.”" },
    ],
    sections: [
      {
        heading: "October 2016",
        paras: [
          "Newsrooms treated the tape like a career-ender because, in another country, it might have been. Donors fled for a weekend. Surrogates tried the word banter. Trump read an apology from a camera and then went back to rallies that treated the apology like a parking ticket.",
          "Hollywood’s sign is a useful picture here. The industry that named the show also named the shrug. Entertainment and politics had already merged. A bus tape was content. Content can be survived if the base wants it survived.",
        ],
        figure: {
          src: "/images/press/hollywood-sign.jpg",
          caption: "The Hollywood Sign. The show was named. The tape was the product.",
        },
      },
      {
        heading: "The darkest things he said out loud",
        paras: [
          "The vault has files that take a lawyer to explain. This one takes a speaker. He said what he said. He said it was a joke, a locker, a long time ago. The women in the sentences were not a long time ago to themselves.",
          "Robinhood Chain is an odd home for a 2005 tape. It is a good home if you are tired of watching the same audio get “recontextualized” every four years. Recontextualize is the word you use when you want the cassette to die of old age.",
        ],
        figure: {
          src: "/images/press/trump.jpg",
          caption: "The voice on the bus. The apology was a video. The tape was the file.",
        },
        pull: "Some of the worst material in the vault is not a leak. It is a recording he made of himself.",
      },
      {
        heading: "Why it stays filed",
        paras: [
          "Because the next campaign will call it old news, and old news is how a country trains itself to forget a sentence it already learned by heart. The clay still of the locker is a joke. The audio is not.",
          "The ride continued. The tape stayed. $DTRUMP does not claim to be a morals police. It claims the cassette stays in the cabinet when the chyron moves on.",
        ],
      },
    ],
    evidence: [
      { src: "/images/secrets/secret-hollywood.png", caption: "Locker-room talk, captured in plasticine." },
      { src: "/images/press/hollywood-sign.jpg", caption: "Hollywood. The show, the shrug, the survival." },
      { src: "/images/press/trump.jpg", caption: "The voice on the bus." },
      { src: "/images/mascot-portrait.png", caption: "The brand that outlived the apology." },
      { src: "/images/gallery-ride.png", caption: "The ride continued. The tape stayed." },
      { src: "/images/press/nyc.jpg", caption: "The city that heard it and priced it in." },
    ],
  },
  university: {
    cover: "/images/secrets/secret-university.png",
    date: "Filed · Vault 010",
    read: "7 min read",
    quote: "A school that settled. A charity that got padlocked.",
    lede: [
      "Trump University sold the dream of getting rich like him: seminars, three-day packages, a hard upsell into a “gold” mentorship. Students said they bought an education and got a timeshare pitch with better lettering. New York’s attorney general called it a fraud. In 2016, days after the election, he settled for $25 million without admitting the word.",
      "Settlements are not convictions. They are also not innocence. They are how a brand puts a number on a complaint and keeps the gold letters.",
      "The Trump Foundation was the other half of the costume: a charity regulators said was a checkbook for the man, not the mission — portraits, legal bills, a political stunt with a giant check. A New York judge ordered it dissolved. The letters came off the door.",
    ],
    timeline: [
      { date: "2005–2010", event: "Trump University sells seminars and “gold” mentorships. Students later call it a pitch, not a school." },
      { date: "2013", event: "New York’s attorney general sues. The word fraud enters the caption." },
      { date: "Nov 2016", event: "$25 million settlement, days after the election. No admission. The letters stay on the merch." },
      { date: "2018–2019", event: "The Foundation is dissolved by a New York judge. The charity costume comes off." },
    ],
    sections: [
      {
        heading: "Trump University",
        paras: [
          "It was never a university. That is the first exhibit. No campus that mattered. No degree that a registrar would honor. A sales floor with a last name on the slide deck. People flew in, sat down, and were walked toward a more expensive room.",
          "The AG’s case said the whole thing was a bait. Trump’s lawyers said customers who complained were bad students. The settlement split the difference the American way: pay, deny, keep the brand. $25 million is a lot of money until you remember what the name was already worth on a building.",
        ],
        figure: {
          src: "/images/press/trump-tower.jpg",
          caption: "Trump Tower. The school sold a last name that already had a zip code.",
        },
      },
      {
        heading: "The Foundation",
        paras: [
          "Charity is a costume if the checks go to the wearer. Regulators said the Foundation paid for portraits of the man, legal bills, and a political stunt that belonged in a campaign, not a 501. A judge in New York agreed hard enough to shut it down and ban him from running a New York charity for a stretch.",
          "These are not midnight Telegram rumors. They are court papers. The vault files them next to the louder scandals because the quieter ones are how a brand trains people to pay for the myth. A diploma mill and a hollow charity are the same joke in two fonts.",
        ],
        figure: {
          src: "/images/press/manhattan-court.jpg",
          caption: "New York courts. The school settled. The charity was padlocked.",
        },
        pull: "Settlements are not convictions. They are also not innocence.",
      },
      {
        heading: "The paper trail under the joke",
        paras: [
          "If $DTRUMP is a joke, it is a joke with exhibits. Read the settlements. Read the dissolution. Then buy whatever you want. The donkey does not need you to pretend the school was real.",
          "The clay diploma is funnier once you know the letters never made it to a wall that mattered. The coins still photograph well. That was always the business.",
        ],
      },
    ],
    evidence: [
      { src: "/images/secrets/secret-university.png", caption: "The diploma that did not make it to the wall." },
      { src: "/images/press/trump-tower.jpg", caption: "The building that sold the dream the seminar was copying." },
      { src: "/images/press/manhattan-court.jpg", caption: "New York courts. $25 million. A padlock on the charity." },
      { src: "/images/press/trump.jpg", caption: "The salesman of the seminar." },
      { src: "/images/press/nyc.jpg", caption: "The city that sued the school and buried the Foundation." },
      { src: "/images/tokenomics-coins.png", caption: "$25 million later, the coins still photograph well." },
    ],
  },
};
