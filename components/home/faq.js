import List from "../../utils/faq-list";

const FreqAskQuestion = () => (
  <section id="questions" className="p-5">
    <div className="container">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion accordion-flush" id="questions">
        {List.map((q, i) => {
          return (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-transparent fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#question-${i}`}
                >
                  {q.question}
                </button>
              </h2>

              <div
                id={`question-${i}`}
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body fst-italic">A: {q.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FreqAskQuestion;
