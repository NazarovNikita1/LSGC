<template>
  <div class="homepage-container">
    <h1>News</h1>
    <ul
      style="
        gap: 2vh;
        display: flex;
        flex-direction: column;
        margin-top: 3vh;
        margin-bottom: 3vh;
        list-style-type: disc;
        color: #fff;
        margin-left: 1vw;
      "
    >
      <li>
        <a
          href="https://dstc11.dstc.community/calls/call-for-dstc12-track-proposals"
        >
          Sep 11, 2023 - We continue to welcome DSTC 12 track proposals
          (deadline TBA).
        </a>
      </li>
      <li>
        <a href="https://dstc11.dstc.community/workshop-program">
          Aug 23, 2023 - Workshop program updated to align coffee breaks with
          other workshops.
        </a>
      </li>
      <li>
        <a href="https://dstc11.dstc.community/workshop-program">
          Aug 29, 2023 - Presentation instructions for talks and posters posted
          along the workshop program.
        </a>
      </li>
      <li>
        <a href="https://dstc11.dstc.community/workshop/accepted-papers">
          Aug 8, 2023 - List of accepted and best papers along with presentation
          format has been posted.
        </a>
      </li>
    </ul>
    <h1>Overview</h1>
    <h2 style="margin-top: 2vh">Full program of the event:</h2>
    <div
      style="gap: 2vh; display: flex; flex-direction: column; margin-top: 3vh"
    >
      <p class="program-step">
        <strong>Step 1 (from Sep, 2023):</strong> The shared task is announced
        at the INLG 2023 conference, and the data are available on the shared
        task website; participants can register to the task.
      </p>
      <p class="program-step">
        <strong>Step 2 (from Dec, 2023):</strong> The leaderboard is open;
        participants can submit their systems to the organizers, and the online
        leaderboard keeps updating the best performance using automatic
        evaluation metrics.
      </p>
      <p class="program-step">
        <strong>Step 3 (from Mar, 2024):</strong> The submission is closed;
        organizers conduct manual evaluation.
      </p>
      <p class="program-step">
        <strong>Step 4 (Jul, 2024):</strong> The LSG Challenge shared task is
        fully completed. Organizers submit participant reports and challenge
        reports to INLG 2024 and present at the conference.
      </p>
    </div>
  </div>
</template>

<style>
.homepage-container {
  z-index: 10;
  height: 100vh;
  padding: 5vh;
}

.program-step {
  color: #ffffff;
  font-size: 1.2em;
  margin-bottom: 1em;
}
</style>
