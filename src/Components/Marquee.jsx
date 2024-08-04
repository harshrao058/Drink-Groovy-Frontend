import { cn } from "../lib/utils.js";
import Marquee from "./magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        " relative w-64 cursor-pointer overflow-hidden bg-white rounded-xl border p-4",
        // light styles

        "border-gray-950/[.1] bg-gray-950/[.01] bg-white hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex  flex-row items-center gap-2  ">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black">
            {name}
          </figcaption>
          <p className="text-xs font-semibold text-black">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-medium text-black">
        {body}
      </blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative overflow-hidden  text-white">
      <div
        className="relative h-[50vh] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://embedsocial.com/admin/mediacdn/feed-media/18006/18006077030309004/image_0_large.webp')",
        }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center ">
        <h1 className="text-4xl uppercase font tracking-tight  py-8">
          Our{" "}
          <span className="text-green-6 border-b-2 border-green-600 ">
            Customers
          </span>{" "}
          Reviews
        </h1>

        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l "></div>
        </div>
        
      </div>
    </div>
  );
}
