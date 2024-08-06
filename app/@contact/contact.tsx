"use client";
import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    const rand = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const enhance = (id) => {
      const element = document.getElementById(id),
        text = element.innerText.split("");

      element.innerText = "";

      text.forEach((value, index) => {
        const outer = document.createElement("span");

        outer.className = "outer";

        const inner = document.createElement("span");

        inner.className = "inner";

        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const letter = document.createElement("span");

        letter.className = "letter";

        letter.innerText = value;

        letter.style.animationDelay = `${index * 1000}ms`;

        inner.appendChild(letter);

        outer.appendChild(inner);

        element.appendChild(outer);
      });
    };

    enhance("channel-link");
  }, []);

  return (
    <div
      id="text"
      className="flex items-center justify-center h-screen uppercase text-5xl md:text-7xl font-bold"
    >
      <div className="min-w-sm">
        <div className="line flex justify-between w-full">
          <p className="word">Intéressez</p>
          <p className="word">?</p>
        </div>

        <div className="line flex justify-between w-full">
          <p className="word">une</p>
          <p className="word">mission</p>
        </div>

        <div className="line flex justify-between w-full">
          <p className="word">Contact</p>
          <p className="word">Moi</p>
        </div>

        <div className="line flex justify-between w-full text-8xl">
          <a
            id="channel-link"
            href="https://www.linkedin.com/in/robin-lanfranchi-905293231/"
            target="_blank"
            className="word fancy"
          >
            @Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
