<template>
  <div class="homepage-container">
    <h1>LSGC Call for Participation</h1>
    <a
      href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAfe8TVJUM1NLRzdIOTE4REtETDJCVjFDOU1OTFo1Ni4u"
      target="_blank"
    >
      LSGC Registration
    </a>
    <h2>________________________________________</h2>
    <h2>LSGC 2024: The 1st Shared Task on Long Story Generation</h2>
    <p class="program-step">
      Modeling long stories requires many additional abilities compared to short
      texts, including:
    </p>
    <ol class="program-step">
      <li>
        commonsense reasoning regarding characters' reaction and intention, and
        knowledge about physical objects (e.g., "river") and abstract concepts
        (e.g., "irony");
      </li>
      <li>
        modeling discourse-level features such as inter-sentence relations
        (e.g., causality) and global discourse structures (e.g., the order of
        events);
      </li>
      <li>
        the generation coherence and controllability, which require both
        maintaining a coherent plot and adhering to controllable attributes
        (e.g., topics).
      </li>
    </ol>
    <p class="program-step">
      The human-like long story generation (LSG) challenge we propose asks
      models to output a consistent human-like long story (a Harry Potter
      generic audience fanfic in English), given a prompt of about 1K tokens.
      The text will be evaluated by automated metrics described in the paper,
      and a human evaluation protocol.
    </p>
    <p class="program-step">
      We hope that this challenge can gain interest from the NLG community and
      advance sampling approaches, prompting strategies, autoregressive and
      non-autoregressive text generation architectures and other subfields of
      text generation.
    </p>
    <h1>Long Story Generation Task</h1>
    <p class="program-step">
      LSG Challenge asks participants to provide a system that can output a
      consistent human-like long story (a Harry Potter generic audience fanfic
      at least 30K words long), given a prompt of about 1K tokens. A set of at
      least three dev prompts similar to the beginnings of human-written fan
      fiction are provided by organizers. The systems will be evaluated on a
      withheld test prompt (s).
    </p>
    <p class="program-step">
      It is important to note that no copyright-eligible texts will be used in
      the shared task. The evaluation protocol below does not require using the
      original Harry Potter texts, and subjective evaluation relies on the fact
      that judges have read Harry Potter books/seen the films, but no factual
      knowledge of Harry Potter books is also required for the evaluation
      criteria.
    </p>
    <p class="program-step">
      Given the open-ended and cutting-edge nature of the generation task and
      ongoing discussion on the best corpora and approaches to training LLMs, we
      feel that constraining the training set can be harmful to the task
      performance and participants are open to train their models on any
      dataset, as long as it is described in the system report.
    </p>
    <p class="program-step">
      We employ both automatic and human evaluation, described in the paper to
      evaluate the quality of the texts.
    </p>
    <h2>Procedure Overview</h2>
    <ol class="program-step">
      <li>
        We have released dev prompts and the baseline generation results to
        illustrate the task.
      </li>
      <li>
        The shared task itself will run until June 2024. You will be expected to
        submit your system during the evaluation, before the System Output
        Submission deadline.
      </li>
      <li>
        You will be expected to write a paper describing your system and submit
        by the System Report Submission deadline.
      </li>
      <li>
        Due to time constraints, we expect that the official results of the task
        will be available only after the System Report Submission deadline; you
        will have a chance to include them in your report before the
        Camera-Ready deadline for the report.
      </li>
    </ol>
    <h2>Data</h2>
    <p class="program-step">
      The data for the shared task would be available in the following Github
      repository
    </p>
    <p class="program-step">
      Task participants are allowed to use any further data. When submitting,
      you need to indicate which data was used to train your system.
    </p>
    <p class="program-step">
      In any case, please clearly describe which data was used in what way in
      your system paper.
    </p>
    <h2>Evaluation</h2>
    <h3>Automatic Evaluation</h3>
    <h3>Manual Evaluation</h3>
    <p class="program-step">
      A single number is not enough to evaluate the quality of a long story. We
      adopt multiple human evaluation metrics to better measure model
      performance. Similarly to Kryscinski et al. (2019), we ask annotators to
      rate the texts across four dimensions:
    </p>
    <ol class="program-step">
      <li>relevance (of topics in the text to the expected ones),</li>
      <li>consistency (alignment between the parts of the text),</li>
      <li>fluency (quality of individual sentences), and</li>
      <li>coherence (quality of sequence of sentences).</li>
    </ol>
    <p class="program-step">
      Additionally, extending (Guan et al., 2022), we ask annotators to rate:
    </p>
    <ol class="program-step" start="5">
      <li>
        knowledge about physical objects (LLM generated failure example: “I was
        on shore in a boat; but I was not in the water. I was not in the water.
        I was in the water.”)
      </li>
      <li>
        knowledge about abstract concepts (LLM generated failure example: “The
        twenty-eighth one is a twenty-eighth one. The twenty-nineteenth one is a
        twenty-eighth one. The twenty-ninth one is a twenty-ninth one. The
        twenty-tenth one is a twenty-tenth one.”)
      </li>
      <li>
        causality (LLM generated failure example: “The first part was pretty
        easy. The second one, on the other hand, took a lot of practice. I had a
        lot of difficulty with the first one.”)
      </li>
      <li>
        the order of events (LLM generated failure example: “This is the way all
        voyages of travel are done in all ages of the earth; they come to it and
        lay it down in the same fashion: — They get a wind, sail about awhile,
        and gather what stores are sufficient for a week, or for one night’s
        stay.”)
      </li>
    </ol>
    <p class="program-step">
      Finally, extending Guan and Huang (2020) we ask annotators to rate:
    </p>
    <ol class="program-step" start="9">
      <li>repeated plots (repeating similar texts)</li>
    </ol>
    <p class="program-step">
      A detailed evaluation manual will be developed as a part of the
      competition preparation and provided to judges, including a checklist
      conforming to suggestions of Howcroft et al., (2020).
    </p>
    <p class="program-step">
      Each text will be rated by 3 distinct judges with the final score obtained
      by averaging the individual scores. We plan to hire linguistics/philology
      students with English knowledge level at least C1 as the judges in at
      least two low-cost countries. Where possible, the judge assignment will be
      included into coursework. Small non-government/donation funding will be
      made available to cover judging expenses where the above approach is not
      possible.
    </p>
    <p class="program-step">
      <p>
    Submission Platform
    Please refer to the <a href="https://elitr.github.io/automatic-minuting/submission.html">submission page</a> for details.
</p>

<p>
    Publication
    All teams are required to submit a brief technical report describing their method. The
    proceedings will be published in the <a href="https://aclanthology.org/venues/inlg/">ACL Anthology</a>.
</p>

<p>
    Contact
    For further information about this task and dataset, please contact: <123123123>
</p>

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
