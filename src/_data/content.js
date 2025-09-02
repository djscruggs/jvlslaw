const header = 'On Feb 29, 2024, Jonathan Last of the Bulwark coined JVL\'s law: Any person or institution not explicitly anti-Trump will become a tool for authoritarianism eventually.';
const footer = 'This page is not affiliated with the Bulwark. I\'m just a concerned subscriber.';
const scotusBlogImage = function(link) {
  const data = {
      link: link,
      src: 'https://thedispatch.com/wp-content/uploads/2025/04/SBTD-logo.png?w=160',
      alt: 'Logo for SCOTUSBlog',
    }
    return data;
  }
const bulwarkImage = function(link) {
  const data = {
      link: link,
      src: 'https://dg0nwpjirsscfc.archive.ph/7dnV1/fb0c9a2d9bc2c6e789af01fa1841f390bfe66b26.webp',
      alt: 'Logo for The Bulwak',
      caption: 'The Bulwark'
    }
  return data;
    
  }
const entries = [
  {
    id: 'naturalization-voter-reg',
    categories: ['politics'],
    color: 'black',
    faicon: 'skull-crossbones',
    date: '2025-09-01',
    title: 'USCIS Bars Voter Registration After Naturalization Ceremony',
    image: {
      link: 'https://www.lwv.org/newsroom/press-releases/league-women-voters-statement-uscis-policy-restricting-voter-registration',
      src: 'https://www.lwv.org/themes/custom/primary_bootstrap/img/lwv-logo-header-c4.svg',
      alt: 'Logo for the Leage of Women Voters',
    },
    body: "By shutting out the League and other civic partners, USCIS is making it harder for new citizens to register to vote, which is yet another intimidation tactic and attack on the immigrant community. Our democracy is stronger with the voices of new citizens.",
    links: [
      {
        href: 'https://www.lwv.org/newsroom/press-releases/league-women-voters-statement-uscis-policy-restricting-voter-registration',
        linkText: 'League of Women Voters Statement',
      },
    ],
  },
  {
    id: 'discourse-closes',
    categories: ['media'],
    color: 'black',
    faicon: 'skull-crossbones',
    date: '2025-09-01',
    title: 'Discourse Magazine Closes',
    image: {
      link: 'https://www.tracinskiletter.com/p/dont-let-it-go',
      src: 'https://substackcdn.com/image/fetch/$s_!Yt8m!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa61b176d-0978-41c5-aada-46575fccbe5e_1600x800.jpeg',
      alt: 'Logo for The Neo-Classical Liberal',
      caption: 'The Neo-Classical Liberal',
    },
    body: "This reflects a dilemma faced by Mercatus more broadly. In recent years, they have put a lot of effort (from which I benefitted) into a “pluralism” agenda, which was supposed to encourage people to find common ground and have productive conversations across the usual partisan divides. It’s not a bad idea, but at a Mercatus pluralism event about this time last year, the looming unreality of it began to sink in. Much of the discussion seemed useful and appropriate—in a world where Donald Trump had no chance of being elected again. And if Kamala Harris were president right now, it would still seem that way. But in a world where the political divide is between democracy and authoritarianism, between freedom and dictatorship, finding “common ground” with authoritarians just becomes a form of surrender.",
    links: [
      {
        href: 'https://www.tracinskiletter.com/p/dont-let-it-go',
        linkText: 'Don\'t Let It Go',
      },
    ],
  },
  {
    id: 'gabbard-fmic',
    categories: ['politics'],
    color: 'black',
    faicon: 'skull-crossbones',
    date: '2025-08-28',
    title: 'Gabbard Kills Foreign Malign Influence Center', image: {
      link: 'https://www.justsecurity.org/119653/wjh-dismantling-foreign-malign-influence-center/',
      src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-1/432879124_928689479263468_6636716747969601018_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=Tz_e6C0NbewQ7kNvwG4RQia&_nc_oc=Adn6NFx-nTDo_KqFL1BDHFABP2ipVKsBcIMF2Jgh5qMyunja4aNGmjLtzFulEUEi2WMkZYWsfQrfQGUE9QSJK5ir&_nc_zt=24&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GoZ2OMAONYhRaSWoiSnCkg&oh=00_AfWN-CCThtlVJeg-GIFW80BCMc5cM5XxcxiRRznSkif6dg&oe=68BD18DB',
      alt: 'Just Security Logo',
      caption: 'Just Security'
    },
    
    body: 'One would think the Trump administration would have an interest in preserving government functions that monitor nefarious foreign government activity targeting the president of the United States. Instead, in her Aug. 20 announcement of the broader ODNI reorganization and the dismantlement of FMIC, with its remaining work spread across other units, Gabbard claimed the office had politicized intelligence (a charge she also leveled at the intelligence community when the administration recently declassified materials purporting to support its claim that Russia did not interfere on behalf of Trump’s 2016 campaign). ',
    links: [
      {
        href: 'https://www.justsecurity.org/119653/wjh-dismantling-foreign-malign-influence-center/',
        linkText: 'What Just Happened? Dismantling the Intelligence Community’s Foreign Malign Influence Center',
      },
    ],
  },
  {
    id: 'abrego-uganda',
    categories: ['law'],
    color: 'black',
    faicon: 'skull-crossbones',
    date: '2025-08-23',
    title: 'DOJ Attempts Coercion With Uganda Threat', 
    image: {
      link: 'https://bsky.app/profile/annabower.bsky.social/post/3lx3ayeqsb225',
      src: 'https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:t4x2ruk2qmob2b2cx55h4v7r/bafkreicdapavja5viwr7nsqcawcc2s6ac77fhqeyus4ccgfmcncavrpffe@jpeg',
      alt: 'Anna Bower profile pic',
    },
    body: 'NEW: Kilmar Abrego Garcia’s defense team says that the government is attempting to coerce him to plead guilty to his criminal charges. Per filing, the government promised to deport him to Costa Rica if he pleads guilty — and is now threatening to remove him to Uganda if he doesn’t accept the deal.',
    links: [
      {
        href: 'https://bsky.app/profile/annabower.bsky.social/post/3lx3ayeqsb225',
        linkText: 'Anna Bower on BlueSky',
      },
    ],
  },
  {
    id: 'scotus-agencies',
    categories: ['law'],
    color: 'black',
    faicon: 'skull-crossbones',
    date: '2025-07-23',
    title: 'Independent Agencies Not Independent',
    image: scotusBlogImage('https://www.scotusblog.com/2025/07/supreme-court-sides-with-trump-administration-in-battle-over-cpsc-commissioners/'),
    body: "In her dissent, Kagan decried what she characterized as the court\’s repeated use of the emergency docket \“to destroy the independence of an independent agency, as established by Congress.\” She suggested that the court had \“all but overturned Humphrey’s Executor,\” and she stated that these actions have occurred \“with the scantiest of explanations.\” \“By means of such actions,\” she concluded, \“this Court may facilitate the permanent transfer of authority, piece by piece by piece, from one branch of Government to another.\”  ",
    links: [
      {
        href: 'https://www.scotusblog.com/2025/07/supreme-court-sides-with-trump-administration-in-battle-over-cpsc-commissioners/',
        linkText: 'Supreme Court sides with Trump administration in battle over ability to remove agency commissioners',
      },
    ],
  },
  {
    id: 'wapo-bezos',
    categories: ['media'],
    color: 'black',
    faicon: 'skull-crossbones',
    date: '2024-10-25',
    title: 'Jeff Bezos Kills Endorsement',
    image: bulwarkImage('https://www.thebulwark.com/p/bezos-kills-washington-post-endorsement-guardrails-falling'),
    body: "And that\’s what this story is about: It\’s about the most consequential American entrepreneur of his generation signaling his submission to Trump—and the message that sends to every other corporation and business leader in the country. In the world. Killing this editorial says, If Jeff Bezos has to be nice to Trump, then so do you. Keep your nose clean, bub.",
    links: [
      {
        href: 'https://www.thebulwark.com/p/bezos-kills-washington-post-endorsement-guardrails-falling',
        linkText: 'The Guardrails Are Already Crumpling',
      },
    ],
  },
  {
    id: 'scotus-immunity',
    categories: ['law'],
    color: 'black',
    faicon: 'skull-crossbones',
    date: '2024-07-01',
    title: 'SCOTUS Grants Sweeping Immunity',
    image: scotusBlogImage('https://www.scotusblog.com/2024/07/justices-rule-trump-has-some-immunity-from-prosecution/'),
    body: "Sotomayor contended that the majority’s decision might sweep more broadly than her colleagues acknowledged. First, she argued that the line that Roberts drew between official and unofficial conduct \“narrows the conduct considered ‘unofficial’ almost to a nullity. It says that whenever the President acts in a way that is not manifestly or palpably beyond his authority, he is taking official action.” And the majority takes an “expansive view” of the core powers of the presidency, she continued, that “will effectively insulate all sorts of noncore conduct from criminal prosecution.” “In every use of official power,\” she concluded, \“the President is now a king above the law.\”",
    links: [
      {
        href: 'https://www.scotusblog.com/2024/07/justices-rule-trump-has-some-immunity-from-prosecution/',
        linkText: 'Justices rule Trump has some immunity from prosecution',
      },
    ],
  },
  
  {
    id: 'mcconell-original-sin',
    categories: ['politics'],
    color: 'black',
    faicon: 'skull-crossbones',
    date: '2024-02-29',
    title: 'Mitch McConnell\'s Original Sin',
    image: {
      link: 'https://archive.ph/7dnV1',
      src: 'https://dg0nwpjirsscfc.archive.ph/7dnV1/fb0c9a2d9bc2c6e789af01fa1841f390bfe66b26.webp',
      alt: 'Logo the Bulwak',
      caption: 'The Bulwark',
    },
    body: "McConnell hates Trump. McConnell was never MAGA. McConnell is not in favor of authoritarianism. But none of that mattered because Trump was able to align McConnell’s primary goals with his own. And so in the end, McConnell became Trump’s tool just as surely as if he’d been a toadying true-believer.",
    links: [
      {
        href: 'https://arc.net/l/quote/myfeydlu',
        linkText: 'This Is How Democracy Dies',
      },
    ],
  },

];

// Page details
const pageTitle = 'JVL\'s Law'; // The title of the page that shows in the browser tab
const pageDescription = 'On Feb 29, 2024, Jonathan Last of the Bulwark coined JVL\'s Law: Any person or institution not explicitly anti-Trump will become a tool for authoritarianism eventually. This site documents the march toward dictatorship.'; // The description of the page for search engines
const pageAuthor = 'DJ Scruggs'; // Your name
const showMirrorLinks = false; // Whether to show links to the Wayback Machine and archive.is mirrors.

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  showMirrorLinks,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
