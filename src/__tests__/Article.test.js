import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";



test("renders a <small> with the date of the post", () => {
  render(
    <Article
      title="Components 101"
      date="December 15, 2020"
      preview="Setting up the building blocks of your site"
      minutes={5}
    />
  );
  const small = screen.queryByText(/December 15, 2020/);
  expect(small).toBeInTheDocument();
  expect(small.tagName).toBe("SMALL");
});

test("uses a default value for the date if no date is passed as a prop", () => {
  render(
    <Article
      title="No Date Post"
      preview="Testing default date"
      minutes={2}
    />
  );
  const small = screen.queryByText(/January 1, 1970/); // since minutes=2
  expect(small).toBeInTheDocument();
});

test("renders the article title", () => {
  render(
    <Article
      title="React Basics"
      date="April 10, 2025"
      preview="Intro to components and props"
      minutes={5}
    />
  );

  const titleElement = screen.getByText(/React Basics/);
  expect(titleElement).toBeInTheDocument();
});
