export const site = {
  name: "Donkey Trump",
  ticker: "$DTRUMP",
  dossier: "The Donkey Files",
  chain: "Robinhood Chain",
  chainId: 4663,
  tagline: "Trump’s darkest files just hit Robinhood Chain.",
  blurb:
    "The secrets they buried just got a chain ID. $DTRUMP is the coin. Robinhood Chain is the vault.",
  contractAddress: "TBA — dropping at launch",
  buyUrl: "/#buy",
  chartUrl: "https://dexscreener.com",
  socials: {
    x: "https://x.com/",
    telegram: "https://t.me/",
  },
} as const;

export const nav = [
  { href: "/#leaks", label: "Secrets" },
  { href: "/#onchain", label: "Onchain" },
  { href: "/#token", label: "Token" },
  { href: "/#buy", label: "How to Buy" },
  { href: "/#channels", label: "Join" },
] as const;

export const breaking = [
  "EPSTEIN FILES · CLASSIFIED BOXES · HUSH MONEY · THE COIN DUMP",
  "TARIFF TWEETS MOVED MARKETS. NOW THE FILE MOVES ONCHAIN.",
  "MAR-A-LAGO BOXES. GEORGIA CALL. ACCESS HOLLYWOOD.",
  `${site.ticker} · TEN FILES. ONE CHAIN. ROBINHOOD.`,
] as const;

export const stats = [
  { label: "Ticker", value: "$DTRUMP" },
  { label: "Supply", value: "1B" },
  { label: "LP", value: "LOCKED" },
] as const;

export const mechanism = [
  {
    n: "01",
    title: "The files",
    copy: "Epstein pages. Mar-a-Lago boxes. Hush-money books. The names the news already screamed — parked where they can’t vanish.",
  },
  {
    n: "02",
    title: "The tape",
    copy: "Tariff posts that shook indexes. A meme coin that dumped on day one. If the market moved, the receipt is in the vault.",
  },
  {
    n: "03",
    title: "The coin",
    copy: `${site.ticker} is the ticket. Same chain as the files. Hold the donkey if you want a seat when the next page drops.`,
  },
] as const;

export const leaks = [
  {
    slug: "epstein",
    kicker: "File 001",
    title: "The Epstein pages.",
    dek: "Years of photos, flight talk, and a friendship he says went cold. The files kept his name. The vault keeps the pages.",
    image: "/images/secrets/secret-epstein.png",
    stamp: "LEAKED",
  },
  {
    slug: "boxes",
    kicker: "File 002",
    title: "The Mar-a-Lago boxes.",
    dek: "Classified paper in a club. Boxes in a bath. The raid was global news. The stack is onchain now.",
    image: "/images/secrets/secret-boxes.png",
    stamp: "REDACTED",
  },
  {
    slug: "hush",
    kicker: "File 003",
    title: "The hush-money books.",
    dek: "Thirty-four counts. A $130,000 silence. A jury said the records were fake. The ledger didn’t stay quiet.",
    image: "/images/secrets/secret-hush.png",
    stamp: "CONVICTED",
  },
  {
    slug: "tariffs",
    kicker: "File 004",
    title: "The tariff that moved the tape.",
    dek: "One post. Indexes cracked. Crypto bled. Traders called it the remote. We filed the timestamps.",
    image: "/images/secrets/secret-tariffs.png",
    stamp: "LIVE",
  },
  {
    slug: "memecoin",
    kicker: "File 005",
    title: "The $TRUMP dump.",
    dek: "Official coin. Opening pop. Then the floor vanished. Insiders ate. Retail held the bag. The chart is exhibit A.",
    image: "/images/secrets/secret-memecoin.png",
    stamp: "EXPOSED",
  },
  {
    slug: "taxes",
    kicker: "File 006",
    title: "The tax years that weren’t.",
    dek: "Billionaire on TV. Near-zero federal income tax on paper. The returns leaked. The math did not flatter.",
    image: "/images/secrets/secret-taxes.png",
    stamp: "FILED",
  },
  {
    slug: "georgia",
    kicker: "File 007",
    title: "“Find 11,780 votes.”",
    dek: "A recorded call. A state official. A number the country still repeats. The tape never needed a remix.",
    image: "/images/secrets/secret-georgia.png",
    stamp: "RECORDED",
  },
  {
    slug: "jan6",
    kicker: "File 008",
    title: "The January 6 hour.",
    dek: "A crowd. A Capitol. A president who watched the feed. The footage is public. The file still burns.",
    image: "/images/secrets/secret-jan6.png",
    stamp: "ARCHIVED",
  },
  {
    slug: "hollywood",
    kicker: "File 009",
    title: "Access Hollywood.",
    dek: "The bus tape the world heard. “Grab them.” He called it locker-room talk. The audio did not blink.",
    image: "/images/secrets/secret-hollywood.png",
    stamp: "CONFIRMED",
  },
  {
    slug: "university",
    kicker: "File 010",
    title: "Trump University & the Foundation.",
    dek: "A school that settled. A charity that got shut down. The brand sold the dream. The courts sold the ending.",
    image: "/images/secrets/secret-university.png",
    stamp: "SETTLED",
  },
] as const;

export const memos = [
  {
    classification: "TOP SECRET",
    re: "DONALD J. TRUMP — DARK FILES ON ROBINHOOD CHAIN",
    image: "/images/press/trump.jpg",
    caption: "Official portrait. The subject of every file.",
    body: [
      "Ten files the world already knows — Epstein, the boxes, hush money, the tariff tape, the official coin dump, the tax years, Georgia, January 6, Access Hollywood, the University.",
      "They used to live in headlines. They live on Robinhood Chain now. No editor. No weekend takedown.",
      "He will call it fake news. The vault does not take comments. $DTRUMP is the coin sitting on top of the stack.",
    ],
  },
  {
    classification: "EYES ONLY",
    re: "FILE 001 — THE EPSTEIN PAGES",
    image: "/images/press/epstein.jpg",
    caption: "Jeffrey Epstein. Court photograph. Public record.",
    body: [
      "Years of photos, flight talk, and a friendship Trump says went cold. The released files kept his name in the stack anyway.",
      "Washington argued over redactions. The vault does not. The pages are the story. The chain is the cabinet.",
      "This is not a courtroom. It is the record of a rumor that became a global file — and then an onchain one.",
    ],
  },
  {
    classification: "REDACTED",
    re: "FILE 002 — THE MAR-A-LAGO BOXES",
    image: "/images/press/maralago-club.jpg",
    caption: "Mar-a-Lago, Palm Beach. The club that became a warrant.",
    body: [
      "Classified paper left Washington and took a Florida vacation. Boxes in a storage room. Folders in a bath. The raid was global news.",
      "He called it a hoax. The photographs of the cartons did not. A club is not a SCIF.",
      "On Robinhood Chain the stack cannot be ‘relocated’ again. The address stays on the memo.",
    ],
  },
  {
    classification: "CONVICTED",
    re: "FILE 003 — THE HUSH-MONEY BOOKS",
    image: "/images/secrets/secret-hush.png",
    caption: "The ledger. Thirty-four counts. One payment that did not stay quiet.",
    body: [
      "A $130,000 silence in 2016. A Manhattan jury in 2024: falsifying business records, 34 times.",
      "Immunity arguments came later. The invoice came first. Hush money is an old sport. The docket number is new.",
      "The vault does not retry the case. It keeps the score where a weekend story cannot bury it.",
    ],
  },
  {
    classification: "MARKET",
    re: "FILE 004 — THE TARIFF THAT MOVED THE TAPE",
    image: "/images/press/nyse.jpg",
    caption: "New York Stock Exchange. Where a sentence becomes a candle.",
    body: [
      "One announcement. Indexes cracked. Crypto bled. Traders already treat the podium like a remote.",
      "If a post can move a market, the timestamp is the exhibit. Front-running is the rumor. The tape is the fact.",
      "Robinhood Chain is a strange place to file a tariff. It is the first place a meme looks when the next sentence hits.",
    ],
  },
  {
    classification: "ARCHIVED",
    re: "FILE 008 — THE JANUARY 6 HOUR",
    image: "/images/press/capitol.jpg",
    caption: "United States Capitol, west front. Public domain photograph.",
    body: [
      "A rally. A walk. A broken window. A president watching the feed. The footage is not a rumor.",
      "He changes the nouns depending on the week. The file keeps the date. The country still argues. The hour does not rewind.",
      "Onchain media cannot storm a building. It can refuse to let the hour become merch.",
    ],
  },
] as const;

export const buySteps = [
  {
    n: "01",
    title: "Get a wallet",
    copy: "MetaMask, Rabby, or Robinhood Wallet. Any EVM wallet works.",
    image: "/images/buy-wallet.png",
  },
  {
    n: "02",
    title: "Open Robinhood Chain",
    copy: "Chain ID 4663. Official RPC only. Gas is ETH — ignore anyone selling a fake “Robinhood coin.”",
    image: "/images/buy-eth.png",
  },
  {
    n: "03",
    title: "Bridge ETH",
    copy: "Use Relay, Across, or the Arbitrum portal. Land ETH on Robinhood Chain for gas and the swap.",
    image: "/images/buy-swap.png",
  },
  {
    n: "04",
    title: `Buy ${site.ticker}`,
    copy: "Open Uniswap, paste the contract from this site, and swap. After launch, this step goes live.",
    image: "/images/buy-hold.png",
  },
] as const;

export const channels = [
  { name: "X / Twitter", href: "https://x.com/", tag: "Follow" },
  { name: "Telegram", href: "https://t.me/", tag: "Community" },
  { name: "Uniswap", href: "https://app.uniswap.org/", tag: "Buy" },
  { name: "DexScreener", href: "https://dexscreener.com/", tag: "Chart" },
] as const;
