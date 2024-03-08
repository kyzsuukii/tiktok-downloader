type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="mx-auto text-center py-16">
      <h1 className="font-firaSansBold text-5xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <blockquote className="font-firaSansItalic mt-4 text-xl font-light text-gray-500 dark:text-gray-400">
        {description}
      </blockquote>
    </section>
  );
}
