export const Section = ({ priority, title, children }) => (
  <section>
    {priority === 1 ? <h1>{title}</h1> : <h2>{title}</h2>}
    {children}
  </section>
);
