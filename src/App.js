import AccordionGroup from "./components/AccordionGroup";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const data = [
    {
      title: "What is ODUMODUCORDION?",
      content:
        "An elegant, modern, animated accordion built with React, Tailwind CSS, and Framer Motion by ODUMODUBLVKK!",
    },
    {
      title: "Why use Framer Motion?",
      content:
        "It makes animations smooth, performant, and easy to customize for great UX.",
    },
    {
      title: "How is it responsive?",
      content:
        "It uses Tailwind’s responsive padding and max-width utilities to look great on any device from mobile to 4K screens.",
    },
    {
      title: "Can I open multiple items?",
      content:
        "Yes! Just pass `allowMultiple={true}` to AccordionGroup to let users open many sections at once.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white-100 via-white-100 to-white-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 transition-colors duration-500">
      <ThemeToggle />
      <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-900 dark:text-indigo-300 tracking-wide">
        ODUMODUCORDION 🔥
      </h1>

      <AccordionGroup items={data} allowMultiple={false} />
    </div>
  );
}

export default App;
