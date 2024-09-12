<template>
  <div class="homepage-container">
   <h1>NEWS</h1>
      <p class="program-step">
        SEP 12, 2024 - All three generated texts are now available:
      <a href="src/views/Text1.txt" download="Text1.txt">Text 1</a>
      <a href="src/views/Text2.txt" download="Text2.txt">Text 2</a>
      <a href="src/views/Text3.txt" download="Text3.txt">Text 3</a>
      </p>
      <p class="program-step">
        DEC 25, 2023 - The Long Story Geeration Challenge website is up and running
      </p>
      <p class="program-step">
        JUNE 19, 2024 - Added <a href="https://github.com/nickm197/GAPELMAPER/tree/main" target="_blank">reference implementation</a> (GAPELMAPER)
      </p>
      <p class="program-step">
        JUNE 21, 2024 - Two <a href="https://github.com/nickm197/GAPELMAPER/tree/main" target="_blank">new</a> notebooks added
      </p>
      <p class="program-step highlight-red">
        JULY 2, 2024 - Deadline for applications is extended to July 15
      </p>  
    <h1>IMPORTANT DATES:</h1>
    <div style="gap: 2vh; display: flex; flex-direction: column; margin-top: 3vh">
      <p class="program-step">
        <strong>SEP, 2023:</strong> The shared task is announced at the INLG 2023 conference.
      </p>
      <p class="program-step">
        <strong>DEC, 2023:</strong> The task website is up; participants can register to the task.
      </p>
      <p class="program-step">
        <strong>FEB, 2024:</strong> The leaderboard is open; participants can submit their systems to the organizers, and the online leaderboard keeps updating the best performance using automatic evaluation metrics.
      </p>
      <p class="program-step">
        <strong>JULY 15, 2024:</strong> The submission is closed; organizers conduct manual evaluation.
      </p>
      <p class="program-step">
        <strong>AUG, 2024:</strong> The LSG Challenge shared task is fully completed. Organizers submit participant reports and challenge reports to INLG 2024 and present at the conference.
      </p>
      <p class="program-step">
        <strong> around SEP 25, 2024:</strong> The LSG Challenge workshop is held at INLG 2024 conference in Tokyo, Japan.
      </p>
      <p class="program-step">
        All submission deadlines are 11:59 PM AoE (Anywhere on Earth) Time Zone (UTC-12).
      </p>
      <h1>Shared Task Overview</h1>
    <p class="program-step">
      Modeling long stories requires many additional abilities compared to short texts, including:
    </p>
    <ol class="program-step">
      <li>
        1) commonsense reasoning regarding characters' reaction and intention, and
        knowledge about physical objects (e.g., "river") and abstract concepts
        (e.g., "irony");
      </li>
      <li>
        2) modeling discourse-level features such as inter-sentence relations
        (e.g., causality) and global discourse structures (e.g., the order of
        events);
      </li>
      <li>
        3) the generation coherence and controllability, which require both
        maintaining a coherent plot and adhering to controllable attributes
        (e.g., topics).
      </li>
    </ol>
    <p class="program-step">
      The human-like long story generation (LSG) challenge asks models to output
      a consistent human-like long story (a Harry Potter generic audience fanfic
      in English), given a prompt of about 1K tokens. The text will be evaluated
      by automated metrics described in the <a href="https://aclanthology.org/2023.inlg-genchal.2.pdf">paper</a>, and a human evaluation protocol.
    </p>
    <p class="program-step">
      We hope that this challenge can gain interest from the NLG community and
      advance sampling approaches, prompting strategies, autoregressive and
      non-autoregressive text generation architectures and other subfields of
      text generation.
    </p>
    <p class="program-step">
      This competition is supported by the Higher School of Economics (HSE) and Tomsk State University (TSU)
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

.highlight-red strong {
  color: red;
}
</style>
