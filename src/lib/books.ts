export interface Book {
  id: string;
  name: string;
  title: string;
  cover: { src: string; width: number; height: number };
}

export const books: Book[] = [
  {
    id: "sicp",
    name: "SICP",
    title: "Structure and Interpretation of Computer Programs",
    // Cover: https://covers.openlibrary.org/b/id/9325174-L.jpg
    cover: { src: "/book-sicp.webp", width: 345, height: 500 },
  },
  {
    id: "csapp",
    name: "CSAPP",
    title: "Computer Systems: A Programmer's Perspective",
    // Cover: https://csapp.cs.cmu.edu/3e/images/csapp3e-cover.jpg
    cover: { src: "/book-csapp.webp", width: 498, height: 640 },
  },
  {
    id: "ladr",
    name: "LADR",
    title: "Linear Algebra Done Right",
    // Cover: https://linear.axler.net/coverLADR4e.png
    cover: { src: "/book-ladr.webp", width: 404, height: 640 },
  },
  {
    id: "mythical-man-month",
    name: "The Mythical Man-Month",
    title: "The Mythical Man-Month: Essays on Software Engineering",
    // Cover: https://www.informit.com/ShowCover.aspx?isbn=0201835959
    cover: { src: "/book-mythical-man-month.webp", width: 430, height: 640 },
  },
];
