import workflow from "../data/workflow";

export default function WorkflowSection() {
    return (
        <section id='workflow' className="about-workflow container">
            <header className="about-workflow__header">
                <span>Il mio approccio</span>
                <h2>Come lavoriamo insieme?</h2>
                <p>
                    Un processo strutturato, ma flessibile:
                    ogni progetto ha le sue esigenze e il mio
                    obiettivo è trovare la soluzione più adatta.
                </p>
            </header>

            <ol className="workflow-list">
                {workflow.map((step) => (
                    <li
                        key={step.number}
                        className="workflow-step"
                    >
                        <div className="workflow-step__number">
                            {step.number}
                        </div>

                        <div className="workflow-step__content">
                            <h3>{step.title}</h3>

                            <p>{step.description}</p>

                            <ul>
                                {step.tasks.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>

                            {step.optional && (
                                <span className="workflow-step__note">
                                    Servizio opzionale, con tariffa
                                    mensile concordata in base
                                    alle caratteristiche del progetto.
                                </span>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
