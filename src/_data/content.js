const header = 'On Feb 29, 2024, Jonathan Last of the Bulwark coined JVL\'s law: Any person or institution not explicitly anti-Trump will become a tool for authoritarianism eventually.';
const footer = 'This page is not affiliated with the Bulwark. I\'m just a concerned subscriber.';
const entries = [
  {
    id: 'discourse-closes',
    categories: ['media'],
    color: 'green',
    faicon: 'cat',
    datetime: '2025-09-01 15:15',
    title: 'Discourse Magazine closes',
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

];

// Page details
const pageTitle = 'JVL\'s Law in action'; // The title of the page that shows in the browser tab
const pageDescription = 'On Feb 29, 2024, Jonathan Last of the Bulwark coined JVL\'s law: Any person or institution not explicitly anti-Trump will become a tool for authoritarianism eventually.'; // The description of the page for search engines
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
