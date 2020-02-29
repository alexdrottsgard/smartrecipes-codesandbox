import React from "react";

export const Nav = () => {
  return (
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          Active
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Disabled
        </a>
      </li>
    </ul>
  );
};
