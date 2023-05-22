class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9\-'\s]/gi, '');
  }

  static titleize(string) {
    const words = string.toLowerCase().split(' ');
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }
}

console.log(Formatter.capitalize('hello')); 
console.log(Formatter.capitalize('world')); 

console.log(Formatter.sanitize('Hello, world!')); 
console.log(Formatter.sanitize('This is a test#123.')); 

console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog')); 
console.log(Formatter.titleize('a tale of two cities')); 
console.log(Formatter.titleize('but I like coding'));
