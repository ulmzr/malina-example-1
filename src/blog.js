let articles = [ {
      id: 1,
      title: `Write Less Code`,
      subtitle: `The most important metric you're not paying attention to`,
      content: `
      <p>All code is buggy. It stands to reason, therefore, that the more code you have to write the buggier your apps will be.</p>
      <p>Writing more code also takes more time, leaving less time for other things like optimisation, nice-to-have features, or being outdoors instead of hunched over a laptop.</p>
      <p>In fact it's widely acknowledged that  and  grow quadratically, not linearly, with the size of a codebase. That tracks with our intuitions: a ten-line pull request will get a level of scrutiny rarely applied to a 100-line one. And once a given module becomes too big to fit on a single screen, the cognitive effort required to understand it increases significantly. We compensate by refactoring and adding comments — activities that almost always result in more code. It's a vicious cycle.</p>
      <p>Yet while we obsess — rightly! — over performance numbers, bundle size and anything else we can measure, we rarely pay attention to the amount of code we're writing.</p>
   `
   },
   {
      id: 2,
      title: `Virtual DOM is pure overhead`,
      subtitle: `Let's retire the 'virtual DOM is fast' myth once and for all`,
      content: `
      <p>If you've used JavaScript frameworks in the last few years, you've probably heard the phrase 'the virtual DOM is fast', often said to mean that it's faster than the real DOM. It's a surprisingly resilient meme — for example people have asked how Svelte can be fast when it doesn't use a virtual DOM.</p>
      `
   },
   {
      id: 3,
      title: `Rethinking reactivity`,
      subtitle: `It's finally here`,
      content: `
      <p>Malina.js builds your web-application to use it without framework on frontend side. Therefore your web-app becomes thinner and faster, and the application itself consist of vanilla JavaScript, look at examples. TodoMVC example 2.7kb (gzipped) and source code</p>
      `
   }
]

export default articles