import { cn } from "../lib/utils.js";
import Marquee from "./magicui/marquee";

const reviews = [
  {
    name: "Simrat Ghai",
    username: "@simrat_ghai",
    body: "Awesome drink 🥤",
    img: "https://instagram.fknu1-6.fna.fbcdn.net/v/t51.2885-19/163295620_350502036371162_4357479009439974334_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fknu1-6.fna.fbcdn.net&_nc_cat=102&_nc_ohc=d1gYGVHh2DcQ7kNvgEH0Fa-&edm=APHcPcMBAAAA&ccb=7-5&oh=00_AYCte8MtsqD7uFB9aySukCG7RurSShxX2RSfSdUfFK3-SA&oe=66B7CD71&_nc_sid=bef7bc",
  },
  {
    name: "Jovial Mudsssir",
    username: "@jovial_mudassir",
    body: "Too Yummy To Taste It..... Best Ever Drink To Taste It...",
    img: "https://instagram.fknu1-5.fna.fbcdn.net/v/t51.2885-19/429181962_1457957451739661_5956242276024429398_n.jpg?_nc_ht=instagram.fknu1-5.fna.fbcdn.net&_nc_cat=105&_nc_ohc=7qOJ3gO-HFQQ7kNvgGqj-O3&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYBFMQPxIj60B3ZlU6cPwBhW0KaikhOeBU2Z0LAsMih9eA&oe=66B7D5CC&_nc_sid=8f1549",
  },
  {
    name: "Daljeet Singh",
    username: "@daljeetsingh.singh.1969",
    body: "Nice taste , groovy mixed fruit",
    img: "https://instagram.fknu1-5.fna.fbcdn.net/v/t51.2885-19/320749527_712692230205017_4896838675036726114_n.jpg?_nc_ht=instagram.fknu1-5.fna.fbcdn.net&_nc_cat=105&_nc_ohc=zr5EoIHqoEIQ7kNvgGN2WcT&edm=APHcPcMBAAAA&ccb=7-5&oh=00_AYD5U-4eNkC8dP6eL9LoZdSPD82KSjWuQ2b0mBKgyw0-vg&oe=66B7C3EE&_nc_sid=bef7bc",
  },
  {
    name: "Jane",
    username: "@ashishkumarguptasai",
    body: "Jabardast test hai hamne piya hai",
    img: "https://instagram.fknu1-1.fna.fbcdn.net/v/t51.2885-19/370191224_331754575950829_3528206785226424970_n.jpg?_nc_ht=instagram.fknu1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=_8HcGs5p2EkQ7kNvgHGAg_m&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYBi63fEMn7TDPNAAiFFZIvkGl_bE86fnWoxXA3PXA_8Bg&oe=66B7ED28&_nc_sid=8f1549",
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
